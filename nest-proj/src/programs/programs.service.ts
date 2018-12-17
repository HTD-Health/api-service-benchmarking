import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Programs} from "./programs.entity";

@Injectable()
export class ProgramsService {
    constructor(
        @InjectRepository(Programs)
        private readonly programsRepository: Repository<Programs>,
    ) {}

    async findAll(): Promise<Programs[]> {
        return await this.programsRepository.find({relations: ["projects"]});
    }
}
