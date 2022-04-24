import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { getRepository, Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}
  async createPet(name: string, id: number): Promise<Pet> {
    const user = await getRepository(User).findOneBy({ id });
    const pet = this.petsRepository.create({ name, owner: user });
    return this.petsRepository.save(pet);
  }
}
