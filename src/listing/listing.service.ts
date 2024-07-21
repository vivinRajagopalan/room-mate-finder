import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Listing } from './listing.schema';



@Injectable()
export class ListingService {
  constructor(@InjectModel('Listing') private Listing: Model<Listing>) {}

  async findAll(): Promise<Listing[]> {
    return this.Listing.find().exec();
  }

  async findOne(id: string): Promise<Listing> {
    return this.Listing.findById(id).exec();
  }

  async create(list: Listing): Promise<Listing> {
    const listing = new this.Listing(list);
    return listing.save();
  }
}
