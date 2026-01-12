import { Injectable } from '@nestjs/common';
import { Booking } from '../entities/booking.entity';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { PaginationDto } from '../../../common/dto/pagination.dto';
import { BookingRepository } from '../repositories/booking.repository';

@Injectable()
export class BookingService {
  constructor(
    private readonly bookingRepository: BookingRepository,
  ) { }

  // ฟังก์ชันสร้างการจอง
  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    return await this.bookingRepository.create(createBookingDto);
  }

  // ฟังก์ชันดึงข้อมูลการจองทั้งหมด
  async findAll(paginationDto: PaginationDto): Promise<Booking[]> {
    return await this.bookingRepository.findAll(paginationDto);
  }
}