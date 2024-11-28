import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sector } from '../sectors/sector.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Sector, (sector) => sector.user)
  sectors: Sector[];
}
