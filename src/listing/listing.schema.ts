import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Listing extends Document {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  address: string;

  rent: number;

  @Prop([String])
  amenities: string[];

}

export const ListingSchema = SchemaFactory.createForClass(Listing);
