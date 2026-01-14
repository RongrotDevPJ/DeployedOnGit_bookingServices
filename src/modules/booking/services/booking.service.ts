import { Injectable } from '@nestjs/common';
import { Booking } from '../entities/booking.entity';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { UpdateBookingDto } from '../dto/update-booking.dto';
import { PaginationDto } from '../../../common/dto/pagination.dto';
import { BookingRepository } from '../repositories/booking.repository';

@Injectable()
export class BookingService {
  constructor(
    private readonly bookingRepository: BookingRepository,
  ) { }

  // ฟังก์ชันสร้างการจอง
  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingRepository.create(createBookingDto);
  }

  // ฟังก์ชันดึงข้อมูลการจองทั้งหมด
  async findAll(paginationDto: PaginationDto): Promise<Booking[]> {
    return this.bookingRepository.findAll(paginationDto);
  }

  async findOne(id: number): Promise<Booking> {
    return this.bookingRepository.findOne(id);
  }

  async update(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking> {
    return this.bookingRepository.update(id, updateBookingDto);
  }

  async remove(id: number): Promise<void> {
    return this.bookingRepository.remove(id);
  }
}