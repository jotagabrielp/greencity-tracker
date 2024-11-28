import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EnergyMonitoringService } from './energy-monitoring.service';

@Controller('energy')
export class EnergyMonitoringController {
  constructor(private energyService: EnergyMonitoringService) {}

  @Get(':sectorId')
  getConsumption(@Param('sectorId') sectorId: number) {
    return this.energyService.getConsumption(sectorId);
  }

  @Post()
  recordConsumption(@Body() body: { sectorId: number; consumption: number }) {
    this.energyService.recordConsumption(body.sectorId, body.consumption);
    return { message: 'Consumption recorded' };
  }
}
