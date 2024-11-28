import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SectorsService } from './sectors.service';

@Controller('sectors')
export class SectorsController {
  constructor(private sectorsService: SectorsService) {}

  @Get(':id')
  async getSector(@Param('id') sectorId: number) {
    return this.sectorsService.getSectorById(sectorId);
  }

  @Post()
  async createSector(@Body() sectorData: any) {
    return this.sectorsService.createSector(sectorData);
  }
}
