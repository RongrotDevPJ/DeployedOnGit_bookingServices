import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingService } from './services/booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './entities/booking.entity';
import { BookingRepository } from './repositories/booking.repository';
import { AppConfigModule } from '../../core/configs/app-config.module';

@Module({
  imports: [TypeOrmModule.forFeature([Booking]), AppConfigModule], // Keep TypeORM for Repository Injection
  controllers: [BookingController],
  providers: [BookingService, BookingRepository],
  exports: [BookingService],
})
export class BookingModule { }
