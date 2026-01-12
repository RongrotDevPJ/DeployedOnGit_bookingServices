import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Index } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  userId: string;

  @Index()
  @Column()
  roomId: number;

  @Column()
  checkInDate: Date;

  @Column()
  checkOutDate: Date;

  @Index()
  @Column({ default: 'PENDING' }) // สถานะเริ่มต้นเป็น PENDING
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}