import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createHash, randomBytes } from 'crypto';
import { Model, Types } from 'mongoose';

import { ApiKey, ApiKeyDocument } from './schemas/api-key.schema';

export type ApiKeyStatus = 'active' | 'expired' | 'revoked';

export interface ApiKeyView {
  readonly id: string;
  readonly name: string;
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
}

export interface RotatedApiKey {
  readonly plainKey: string;
  readonly view: ApiKeyView;
  readonly revoked: ApiKeyView;
}

const LIVE_KEY_PREFIX = 'rt_live_';

@Injectable()
export class ApiKeysService {
  constructor(@InjectModel(ApiKey.name) private readonly apiKeyModel: Model<ApiKeyDocument>) {}

  async createForUser(userId: string, name: string, expiresAt: Date | null): Promise<CreatedApiKey> {
    const plainKey = this.generatePlainKey();
    const keyHash = this.hashKey(plainKey);
    const prefix = plainKey.slice(0, LIVE_KEY_PREFIX.length + 6);
    const last4 = plainKey.slice(-4);

    const document = await this.apiKeyModel.create({
      userId: new Types.ObjectId(userId),
      name,
      keyHash,
      prefix,
      last4,
      expiresAt,
    });

    return { plainKey, view: this.toView(document) };
  }

  async listForUser(userId: string): Promise<ApiKeyView[]> {
    const documents = await this.apiKeyModel
      .find({ userId: new Types.ObjectId(userId) })
      .sort({ createdAt: -1 })
      .exec();

    return documents.map((document) => this.toView(document));
  }

  async countActiveForUser(userId: string): Promise<number> {
    const documents = await this.apiKeyModel
      .find({ userId: new Types.ObjectId(userId), revokedAt: null })
      .exec();

    return documents.filter((document) => this.resolveStatus(document) === 'active').length;
  }

  async revokeForUser(userId: string, keyId: string): Promise<ApiKeyView> {
    if (!Types.ObjectId.isValid(keyId)) {
      throw new NotFoundException('API key not found.');
    }

    const document = await this.apiKeyModel
      .findOne({ _id: new Types.ObjectId(keyId), userId: new Types.ObjectId(userId) })
      .exec();

    if (!document) {
      throw new NotFoundException('API key not found.');
    }

    if (!document.revokedAt) {
      document.revokedAt = new Date();
      await document.save();
    }

    return this.toView(document);
  }

  async rotateForUser(userId: string, keyId: string): Promise<RotatedApiKey> {
    if (!Types.ObjectId.isValid(keyId)) {
      throw new NotFoundException('API key not found.');
    }

    const existing = await this.apiKeyModel
      .findOne({ _id: new Types.ObjectId(keyId), userId: new Types.ObjectId(userId) })
      .exec();

    if (!existing) {
      throw new NotFoundException('API key not found.');
    }

    if (!existing.revokedAt) {
      existing.revokedAt = new Date();
      await existing.save();
    }

    const created = await this.createForUser(userId, existing.name, existing.expiresAt ?? null);

    return { plainKey: created.plainKey, view: created.view, revoked: this.toView(existing) };
  }

  async verify(plainKey: string): Promise<VerifiedApiKey | null> {
    const keyHash = this.hashKey(plainKey);
    const document = await this.apiKeyModel.findOne({ keyHash }).exec();

    if (!document || this.resolveStatus(document) !== 'active') {
      return null;
    }

    document.lastUsedAt = new Date();
    await document.save();

    return { userId: document.userId.toString(), keyId: document._id.toString() };
  }

  private generatePlainKey(): string {
    return `${LIVE_KEY_PREFIX}${randomBytes(24).toString('hex')}`;
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
    return {
      id: document._id.toString(),
      name: document.name,
      masked: `${document.prefix}${'\u2022'.repeat(8)}${document.last4}`,
      status: this.resolveStatus(document),
      createdAt: document.createdAt,
      expiresAt: document.expiresAt ?? null,
      lastUsedAt: document.lastUsedAt ?? null,
    };
  }
}
