import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../entities/booking.entity';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { PaginationDto } from '../../../common/dto/pagination.dto';
import { UpdateBookingDto } from '../dto/update-booking.dto';

@Injectable()
export class BookingRepository {
    constructor(
        @InjectRepository(Booking)
        private readonly repository: Repository<Booking>,
    ) { }

    async create(createBookingDto: CreateBookingDto): Promise<Booking> {
        const newBooking = this.repository.create(createBookingDto);
        return this.repository.save(newBooking);
    }

    async findAll(paginationDto: PaginationDto): Promise<Booking[]> {
        const { page, limit } = paginationDto;
        return this.repository.find({
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    async findOne(id: number): Promise<Booking> {
        const booking = await this.repository.findOneBy({ id });
        if (!booking) {
            throw new NotFoundException(`Booking with ID ${id} not found`);
        }
        return booking;
    }

    async update(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking> {
        await this.repository.update(id, updateBookingDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}