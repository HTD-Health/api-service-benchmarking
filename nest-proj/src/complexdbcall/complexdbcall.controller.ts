import {Controller, Get} from '@nestjs/common';
import {ProgramsService} from "../programs/programs.service";

@Controller('complexdbcall')
export class ComplexdbcallController {
    constructor(
        private readonly programsService: ProgramsService,
    ) {}
    @Get()
    findAll() {
        return this.programsService.findAll();
    }
}
