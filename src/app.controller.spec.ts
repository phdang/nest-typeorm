import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetController } from './pet/pet.controller';
import { Pet } from './pet/pet.entity';
import { PetService } from './pet/pet.service';
import { User } from './user.entity';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, PetController],
      providers: [
        AppService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
        PetService,
        {
          provide: getRepositoryToken(Pet),
          useValue: {},
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
