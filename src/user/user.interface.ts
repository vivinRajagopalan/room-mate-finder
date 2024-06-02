import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly location: string;
  readonly budgetMin: number;
  readonly budgetMax: number;
  readonly moveInDate: Date;
  readonly interests: string[];
  readonly ageRange: string;
  readonly gender: string;
  readonly genderPreference: string;
  readonly roomPreferences: object;
}
