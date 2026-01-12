import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './modules/booking/booking.module';
import { AppConfigModule } from './core/configs/app-config.module';
import { DatabaseModule } from './core/databases/database.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }