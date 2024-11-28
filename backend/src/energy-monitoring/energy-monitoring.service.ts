import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Energy } from './energy.entity';
import { Sector } from '../sectors/sector.entity';

@Injectable()
export class EnergyMonitoringService {
  constructor(
    @InjectRepository(Energy)
    private energyRepository: Repository<Energy>,
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
  ) {}

  async getConsumption(sectorId: number): Promise<Energy> {
    const sector = await this.sectorRepository.findOne({
      where: { id: sectorId },
    });
    if (!sector) {
      throw new Error('Setor não encontrado');
    }
    return this.energyRepository.find({ where: { sector } })[0];
  }

  async recordConsumption(
    sectorId: number,
    consumption: number,
  ): Promise<Energy> {
    const sector = await this.sectorRepository.findOne({
      where: { id: sectorId },
    });
    if (!sector) {
      throw new Error('Setor não encontrado');
    }
    const energy = this.energyRepository.create({ consumption, sector });
    return this.energyRepository.save(energy);
  }
}
