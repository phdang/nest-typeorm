import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './ormconfig';
import { User } from './user.entity';
import { PetService } from './pet/pet.service';
import { Pet } from './pet/pet.entity';
import { PetController } from './pet/pet.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Pet]),
  ],
  controllers: [AppController, PetController],
  providers: [AppService, PetService],
})
export class AppModule {}
