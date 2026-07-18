import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ApiKeyDocument = HydratedDocument<ApiKey>;
export type ApiKeyKind = 'live' | 'test';

@Schema({ collection: 'api_keys', timestamps: true })
export class ApiKey {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, index: true })
  userId!: Types.ObjectId;

  @Prop({ required: true, trim: true })
  name!: string;

  @Prop({ required: true, enum: ['live', 'test'], default: 'live', index: true })
  kind!: ApiKeyKind;

  @Prop({ required: true, unique: true, index: true })
  keyHash!: string;

  @Prop({ required: true })
  prefix!: string;

  @Prop({ required: true })
  last4!: string;

  @Prop({ type: Date, default: null })
  expiresAt?: Date | null;

  @Prop({ type: Date, default: null })
  revokedAt?: Date | null;

  @Prop({ type: Date, default: null })
  lastUsedAt?: Date | null;

  createdAt!: Date;

  updatedAt!: Date;
}

export const ApiKeySchema = SchemaFactory.createForClass(ApiKey);
