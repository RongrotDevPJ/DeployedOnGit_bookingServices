import { Controller, Get, Post, Body, Query, UsePipes, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from '../../common/guards/api-key.guard';
import { BookingService } from './services/booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';
import { PaginationSchema, PaginationDto } from '../../common/dto/pagination.dto';

@Controller('booking') // Base URL http://localhost:3000/booking
@UseGuards(ApiKeyGuard)
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}