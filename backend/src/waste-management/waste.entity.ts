import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Sector } from '../sectors/sector.entity';

@Entity()
export class Waste {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  wasteCollected: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Sector, (sector) => sector.wasteRecords)
  sector: Sector;
}
