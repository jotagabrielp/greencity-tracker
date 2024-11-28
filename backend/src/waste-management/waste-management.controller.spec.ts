import { Test, TestingModule } from '@nestjs/testing';
import { WasteManagementController } from './waste-management.controller';

describe('WasteManagementController', () => {
  let controller: WasteManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WasteManagementController],
    }).compile();

    controller = module.get<WasteManagementController>(WasteManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
