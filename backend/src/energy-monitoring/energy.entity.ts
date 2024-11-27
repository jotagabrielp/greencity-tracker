import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Sector } from '../sectors/sector.entity';

@Entity()
export class Energy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  consumption: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Sector, (sector) => sector.energyRecords)
  sector: Sector;
}
