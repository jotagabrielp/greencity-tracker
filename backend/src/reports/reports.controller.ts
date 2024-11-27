import { Controller, Get, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get(':sectorId')
  generateReport(@Param('sectorId') sectorId: number) {
    return this.reportsService.generateReport(sectorId);
  }
}
