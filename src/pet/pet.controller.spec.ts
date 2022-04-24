import { Test, TestingModule } from '@nestjs/testing';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';

describe('PetController', () => {
  let controller: PetController;
  const mockResponse = {
    id: 1,
    name: 'Dang Test Pet',
    owner: {
      id: 1,
      name: 'Dang',
    },
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetController],
      providers: [
        {
          provide: PetService,
          useValue: {
            createPet: jest.fn(() => mockResponse),
          },
        },
      ],
    }).compile();

    controller = module.get<PetController>(PetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should be created the pet Dang Test Test', async () => {
    const pet = await controller.createPet();
    expect(pet).toEqual(mockResponse);
  });
});
