import {Controller, Get} from '@nestjs/common';
import {ProgramsService} from "./programs.service";

@Controller('programs')
export class ProgramsController {
    constructor(
        private readonly programsService: ProgramsService,
    ) {}

    @Get()
    findAll() {

        const jsonToReturn = {a: "aa", b: "bb", c: "cc", amount: 100};
        return this.programsService.findAll().then(a=>{
            return a;
        })
    }
}
