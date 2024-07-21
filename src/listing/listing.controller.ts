import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Listing } from './listing.schema';
import { ListingService } from './listing.service';


@Controller('listing')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Get()
  async findAll(): Promise<Listing[]> {
    return this.listingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Listing> {
    return this.listingService.findOne(id);
  }

  @Post()
  async create(@Body() listing: Listing ): Promise<Listing> {
    return this.listingService.create(listing);
  }
}
