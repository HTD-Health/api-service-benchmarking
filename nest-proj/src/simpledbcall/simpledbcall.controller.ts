import {Controller, Get} from '@nestjs/common';
import {UserService} from "../user/user.service";

@Controller('simpledbcall')
export class SimpledbcallController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Get()
    findAll() {
        return this.userService.findAll();
    }
}
