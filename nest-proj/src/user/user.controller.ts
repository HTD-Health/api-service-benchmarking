import {Controller, Get, Param} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Get()
    findAll() {
        const jsonToReturn = {a: "aa", b: "bb", c: "cc", amount: 100};
        return 'Hello, ' + jsonToReturn ;

    }
}
