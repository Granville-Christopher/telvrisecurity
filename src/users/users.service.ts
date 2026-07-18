import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';

import { User, UserDocument } from './schemas/user.schema';

export interface CreateUserInput {
  readonly email: string;
  readonly password: string;
  readonly fullName: string;
  readonly company?: string;
}

const PASSWORD_SALT_ROUNDS = 12;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async create(input: CreateUserInput): Promise<UserDocument> {
    const existing = await this.userModel.findOne({ email: input.email }).exec();
    if (existing) {
      throw new ConflictException('An account with this email already exists.');
    }

    const passwordHash = await bcrypt.hash(input.password, PASSWORD_SALT_ROUNDS);

    return this.userModel.create({
      email: input.email,
      passwordHash,
      fullName: input.fullName,
      company: input.company,
    });
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email: email.toLowerCase().trim() }).exec();
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec();
  }

  async verifyPassword(user: UserDocument, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.passwordHash);
  }

  async bumpSessionVersion(userId: string): Promise<number> {
    const updated = await this.userModel
      .findByIdAndUpdate(userId, { $inc: { sessionVersion: 1 } }, { new: true })
      .exec();

    return updated?.sessionVersion ?? 0;
  }
}
