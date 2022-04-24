import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { PetController } from './pet.controller';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';

@Module({
  imports: [Pet],
  providers: [PetService, AppService],
  controllers: [PetController],
})
export class PetModule {}
