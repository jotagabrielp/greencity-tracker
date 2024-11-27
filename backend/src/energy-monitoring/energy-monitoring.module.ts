import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnergyMonitoringService } from './energy-monitoring.service';
import { EnergyMonitoringController } from './energy-monitoring.controller';
import { Energy } from './energy.entity';
import { Sector } from '../sectors/sector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Energy, Sector])],
  providers: [EnergyMonitoringService],
  controllers: [EnergyMonitoringController],
})
export class EnergyMonitoringModule {}
