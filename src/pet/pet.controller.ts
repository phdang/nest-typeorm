import { Controller, Get } from '@nestjs/common';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}
  @Get()
  async createPet(): Promise<Pet> {
    return this.petService.createPet('Dang Pet 3', 4);
  }
}
