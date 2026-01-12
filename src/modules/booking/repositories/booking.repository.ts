import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../entities/booking.entity';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { PaginationDto } from '../../../common/dto/pagination.dto';

@Injectable()
export class BookingRepository {
    constructor(
        @InjectRepository(Booking)
        private readonly repository: Repository<Booking>,
    ) { }

    async create(createBookingDto: CreateBookingDto): Promise<Booking> {
        const newBooking = this.repository.create(createBookingDto);
        return await this.repository.save(newBooking);
    }

    async findAll(paginationDto: PaginationDto): Promise<Booking[]> {
        const { page, limit } = paginationDto;
        return await this.repository.find({
            skip: (page - 1) * limit,
            take: limit,
        });
    }
}