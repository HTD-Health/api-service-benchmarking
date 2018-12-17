import { Module } from '@nestjs/common';
import { ComplexdbcallController } from './complexdbcall.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Programs} from "../programs/programs.entity";
import {ProgramsService} from "../programs/programs.service";

@Module({
    imports: [TypeOrmModule.forFeature([Programs])],
    controllers: [ComplexdbcallController],
    providers: [ProgramsService],

})
export class ComplexdbcallModule {}
