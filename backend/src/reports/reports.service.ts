import { Injectable } from '@nestjs/common';
import { EnergyMonitoringService } from '../energy-monitoring/energy-monitoring.service';
import { WasteManagementService } from '../waste-management/waste-management.service';
import { EventPattern } from '@nestjs/microservices';

@Injectable()
export class ReportsService {
  @EventPattern('consumption_recorded') // Escutar o tópico 'consumption_recorded'
  handleConsumptionRecorded(data: { sectorId: number; consumption: number }) {
    console.log(
      `Novo consumo registrado no setor ${data.sectorId}: ${data.consumption} kWh`,
    );
  }
  constructor(
    private energyService: EnergyMonitoringService,
    private wasteService: WasteManagementService,
  ) {}

  async generateReport(sectorId: number) {
    const energyData = await this.energyService.getConsumption(sectorId);
    const wasteData = await this.wasteService.getWasteData(sectorId);
    return {
      sectorId,
      energy: energyData ? energyData.consumption : 'No data',
      waste: wasteData ? wasteData.wasteCollected : 'No data',
    };
  }
}
