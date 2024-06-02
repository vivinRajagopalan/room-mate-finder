import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  budgetMin: number;

  @Prop({ required: true })
  budgetMax: number;

  @Prop({ required: true })
  moveInDate: Date;

  @Prop({ type: [String], required: true })
  interests: string[];

  @Prop({ required: true })
  ageMin: string;

  @Prop({ required: true })
  ageMax: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  genderPreference: string;

  @Prop({ required: true })
  profession: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
