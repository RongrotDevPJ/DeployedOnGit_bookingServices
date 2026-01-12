import { IsNotEmpty, IsString, IsDateString, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsString()
  userId: string; // ใครเป็นคนจอง

  @IsNotEmpty()
  @IsNumber()
  roomId: number; // จองห้องไหน

  @IsNotEmpty()
  @IsDateString()
  checkInDate: string; // วันที่เข้าพัก (ส่งมาเป็น ISO String เช่น "2024-01-01")

  @IsNotEmpty()
  @IsDateString()
  checkOutDate: string; // วันที่ออก
}