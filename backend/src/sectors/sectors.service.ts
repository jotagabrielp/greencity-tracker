import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sector } from './sector.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class SectorsService {
  constructor(
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createSector(sectorData: {
    name: string;
    userId: number;
  }): Promise<Sector> {
    const { name, userId } = sectorData;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const sector = this.sectorRepository.create({
      name,
      user,
      energyRecords: [],
      wasteRecords: [],
    });

    return this.sectorRepository.save(sector);
  }

  async getSectorById(sectorId: number): Promise<Sector> {
    return this.sectorRepository.findOne({ where: { id: sectorId } });
  }
}
