import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../auth/user.entity';
import { Energy } from '../energy-monitoring/energy.entity';
import { Waste } from '../waste-management/waste.entity';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.sectors)
  user: User;

  @OneToMany(() => Energy, (energy) => energy.sector)
  energyRecords: Energy[];

  @OneToMany(() => Waste, (waste) => waste.sector)
  wasteRecords: Waste[];
}
