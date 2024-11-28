import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WasteManagementService } from './waste-management.service';

@Controller('waste')
export class WasteManagementController {
  constructor(private wasteService: WasteManagementService) {}

  @Get(':sectorId')
  getWasteData(@Param('sectorId') sectorId: number) {
    return this.wasteService.getWasteData(sectorId);
  }

  @Post()
  recordWaste(@Body() body: { sectorId: number; wasteCollected: number }) {
    this.wasteService.recordWaste(body.sectorId, body.wasteCollected);
    return { message: 'Waste data recorded' };
  }
}
