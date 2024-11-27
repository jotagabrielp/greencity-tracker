import { Test, TestingModule } from '@nestjs/testing';
import { EnergyMonitoringController } from './energy-monitoring.controller';

describe('EnergyMonitoringController', () => {
  let controller: EnergyMonitoringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnergyMonitoringController],
    }).compile();

    controller = module.get<EnergyMonitoringController>(EnergyMonitoringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
