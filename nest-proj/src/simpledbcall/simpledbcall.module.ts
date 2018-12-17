import {Module} from '@nestjs/common';
import {SimpledbcallController} from './simpledbcall.controller';
import {Users} from "../user/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserService} from "../user/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    controllers: [SimpledbcallController],
    providers: [UserService],
})
export class SimpledbcallModule {
}
