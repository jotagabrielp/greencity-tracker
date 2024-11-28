import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Waste } from './waste.entity';
import { Sector } from '../sectors/sector.entity';

@Injectable()
export class WasteManagementService {
  constructor(
    @InjectRepository(Waste)
    private wasteRepository: Repository<Waste>,
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
  ) {}

  async getWasteData(sectorId: number): Promise<Waste> {
    const sector = await this.sectorRepository.findOne({
      where: { id: sectorId },
    });
    if (!sector) {
      throw new Error('Setor não encontrado');
    }
    return this.wasteRepository.find({ where: { sector } })[0];
  }

  async recordWaste(sectorId: number, wasteCollected: number): Promise<Waste> {
    const sector = await this.sectorRepository.findOne({
      where: { id: sectorId },
    });
    if (!sector) {
      throw new Error('Setor não encontrado');
    }
    const waste = this.wasteRepository.create({ wasteCollected, sector });
    return this.wasteRepository.save(waste);
  }
}
