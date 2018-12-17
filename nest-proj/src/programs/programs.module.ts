import { Module } from '@nestjs/common';
import { ProgramsController } from './programs.controller';
import { ProgramsService } from './programs.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Programs} from "./programs.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Programs])],

    controllers: [ProgramsController],
  providers: [ProgramsService]
})
export class ProgramsModule {}
