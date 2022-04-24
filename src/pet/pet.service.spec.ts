import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';

describe('PetService', () => {
  let service: PetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PetService,
        {
          provide: getRepositoryToken(Pet),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<PetService>(PetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
