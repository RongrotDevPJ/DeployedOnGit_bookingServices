import { Controller, Get, Post, Body, Query, UsePipes } from '@nestjs/common';
import { BookingService } from './services/booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';
import { PaginationSchema, PaginationDto } from '../../common/dto/pagination.dto';

@Controller('booking') // Base URL http://localhost:3000/booking
export class BookingController {
  constructor(private readonly bookingService: BookingService) { }

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  @UsePipes(new JoiValidationPipe(PaginationSchema))
  findAll(@Query() query: PaginationDto) {
    return this.bookingService.findAll(query);
  }
}