import { Test, TestingModule } from '@nestjs/testing';
import { EnergyMonitoringService } from './energy-monitoring.service';

describe('EnergyMonitoringService', () => {
  let service: EnergyMonitoringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnergyMonitoringService],
    }).compile();

    service = module.get<EnergyMonitoringService>(EnergyMonitoringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
