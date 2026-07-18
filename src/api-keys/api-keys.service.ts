import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { createHash, createHmac, randomBytes } from 'crypto';
import { Model, Types } from 'mongoose';

import { ApiKey, ApiKeyDocument, ApiKeyKind } from './schemas/api-key.schema';

export type ApiKeyStatus = 'active' | 'expired' | 'revoked';

export interface ApiKeyView {
  readonly id: string;
  readonly name: string;
  readonly kind: ApiKeyKind;
  readonly masked: string;
  readonly status: ApiKeyStatus;
  readonly createdAt: Date;
  readonly expiresAt: Date | null;
  readonly lastUsedAt: Date | null;
}

export interface CreatedApiKey {
  readonly plainKey: string;
  readonly view: ApiKeyView;
}

export interface VerifiedApiKey {
  readonly userId: string;
  readonly keyId: string;
  readonly kind: ApiKeyKind;
}

export interface RotatedApiKey {
  readonly plainKey: string;
  readonly view: ApiKeyView;
  readonly revoked: ApiKeyView;
}

export interface UserTestKey {
  readonly plainKey: string;
  readonly view: ApiKeyView;
}

const LIVE_KEY_PREFIX = 'rt_live_';
const TEST_KEY_PREFIX = 'rt_test_';

@Injectable()
export class ApiKeysService {
  constructor(
    @InjectModel(ApiKey.name) private readonly apiKeyModel: Model<ApiKeyDocument>,
    private readonly configService: ConfigService,
  ) {}

  async createForUser(userId: string, name: string, expiresAt: Date | null): Promise<CreatedApiKey> {
    const plainKey = this.generateLivePlainKey();
    const keyHash = this.hashKey(plainKey);
    const prefix = plainKey.slice(0, LIVE_KEY_PREFIX.length + 6);
    const last4 = plainKey.slice(-4);

    const document = await this.apiKeyModel.create({
      userId: new Types.ObjectId(userId),
      name,
      kind: 'live',
      keyHash,
      prefix,
      last4,
      expiresAt,
    });

    return { plainKey, view: this.toView(document) };
  }

  async listForUser(userId: string): Promise<ApiKeyView[]> {
    const documents = await this.apiKeyModel
      .find({ userId: new Types.ObjectId(userId), kind: { $ne: 'test' } })
      .sort({ createdAt: -1 })
      .exec();

    return documents.map((document) => this.toView(document));
  }

  async listLiveForUser(userId: string): Promise<ApiKeyView[]> {
    return this.listForUser(userId);
  }

  async countActiveForUser(userId: string): Promise<number> {
    const documents = await this.apiKeyModel
      .find({ userId: new Types.ObjectId(userId), kind: { $ne: 'test' }, revokedAt: null })
      .exec();

    return documents.filter((document) => this.resolveStatus(document) === 'active').length;
  }

  async getLatestActiveLiveKey(userId: string): Promise<ApiKeyView | null> {
    const documents = await this.apiKeyModel
      .find({ userId: new Types.ObjectId(userId), kind: { $ne: 'test' }, revokedAt: null })
      .sort({ createdAt: -1 })
      .exec();

    const active = documents.find((document) => this.resolveStatus(document) === 'active');
    return active ? this.toView(active) : null;
  }

  async ensureTestKeyForUser(userId: string): Promise<UserTestKey> {
    const plainKey = this.deriveTestPlainKey(userId);
    const keyHash = this.hashKey(plainKey);
    const prefix = plainKey.slice(0, TEST_KEY_PREFIX.length + 6);
    const last4 = plainKey.slice(-4);
    const userObjectId = new Types.ObjectId(userId);

    const document = await this.apiKeyModel
      .findOneAndUpdate(
        { userId: userObjectId, kind: 'test' },
        {
          $set: {
            name: 'Development test key',
            keyHash,
            prefix,
            last4,
            expiresAt: null,
            revokedAt: null,
          },
          $setOnInsert: {
            userId: userObjectId,
            kind: 'test',
          },
        },
        { upsert: true, new: true },
      )
      .exec();

    if (!document) {
      throw new BadRequestException('Could not provision a development test key.');
    }

    return { plainKey, view: this.toView(document) };
  }

  async revokeForUser(userId: string, keyId: string): Promise<ApiKeyView> {
    const document = await this.findOwnedLiveKey(userId, keyId);

    if (!document.revokedAt) {
      document.revokedAt = new Date();
      await document.save();
    }

    return this.toView(document);
  }

  async rotateForUser(userId: string, keyId: string): Promise<RotatedApiKey> {
    const existing = await this.findOwnedLiveKey(userId, keyId);

    if (!existing.revokedAt) {
      existing.revokedAt = new Date();
      await existing.save();
    }

    const created = await this.createForUser(userId, existing.name, existing.expiresAt ?? null);

    return { plainKey: created.plainKey, view: created.view, revoked: this.toView(existing) };
  }

  async deleteForUser(userId: string, keyId: string): Promise<void> {
    const document = await this.findOwnedLiveKey(userId, keyId);

    if (this.resolveStatus(document) !== 'revoked') {
      throw new BadRequestException('Only revoked API keys can be deleted.');
    }

    await document.deleteOne();
  }

  async verify(plainKey: string): Promise<VerifiedApiKey | null> {
    const keyHash = this.hashKey(plainKey);
    const document = await this.apiKeyModel.findOne({ keyHash }).exec();

    if (!document || this.resolveStatus(document) !== 'active') {
      return null;
    }

    document.lastUsedAt = new Date();
    await document.save();

    return {
      userId: document.userId.toString(),
      keyId: document._id.toString(),
      kind: document.kind === 'test' ? 'test' : 'live',
    };
  }

  private async findOwnedLiveKey(userId: string, keyId: string): Promise<ApiKeyDocument> {
    if (!Types.ObjectId.isValid(keyId)) {
      throw new NotFoundException('API key not found.');
    }

    const document = await this.apiKeyModel
      .findOne({
        _id: new Types.ObjectId(keyId),
        userId: new Types.ObjectId(userId),
        kind: { $ne: 'test' },
      })
      .exec();

    if (!document) {
      throw new NotFoundException('API key not found.');
    }

    return document;
  }

  private generateLivePlainKey(): string {
    return `${LIVE_KEY_PREFIX}${randomBytes(24).toString('hex')}`;
  }

  private deriveTestPlainKey(userId: string): string {
    const secret =
      this.configService.get<string>('JWT_SECRET') ??
      this.configService.get<string>('MONGODB_URI') ??
      'telvri-dev-test-secret';
    const digest = createHmac('sha256', secret).update(`telvri-test-key:${userId}`).digest('hex');
    return `${TEST_KEY_PREFIX}${digest.slice(0, 48)}`;
  }

  private hashKey(plainKey: string): string {
    return createHash('sha256').update(plainKey).digest('hex');
  }

  private resolveStatus(document: ApiKeyDocument): ApiKeyStatus {
    if (document.revokedAt) {
      return 'revoked';
    }

    if (document.expiresAt && document.expiresAt.getTime() <= Date.now()) {
      return 'expired';
    }

    return 'active';
  }

  private toView(document: ApiKeyDocument): ApiKeyView {
    const kind: ApiKeyKind = document.kind === 'test' ? 'test' : 'live';

    return {
      id: document._id.toString(),
      name: document.name,
      kind,
      masked: `${document.prefix}${'\u2022'.repeat(8)}${document.last4}`,
      status: this.resolveStatus(document),
      createdAt: document.createdAt,
      expiresAt: document.expiresAt ?? null,
      lastUsedAt: document.lastUsedAt ?? null,
    };
  }
}
