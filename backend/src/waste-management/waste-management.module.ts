import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WasteManagementService } from './waste-management.service';
import { WasteManagementController } from './waste-management.controller';
import { Waste } from './waste.entity';
import { Sector } from '../sectors/sector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Waste, Sector])],
  providers: [WasteManagementService],
  controllers: [WasteManagementController],
})
export class WasteManagementModule {}
