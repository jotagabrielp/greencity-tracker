import { Test, TestingModule } from '@nestjs/testing';
import { WasteManagementService } from './waste-management.service';

describe('WasteManagementService', () => {
  let service: WasteManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WasteManagementService],
    }).compile();

    service = module.get<WasteManagementService>(WasteManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
