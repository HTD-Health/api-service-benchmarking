import {forwardRef, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserController} from './user/user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from './user/user.module';
import {SimpledbcallModule} from './simpledbcall/simpledbcall.module';
import {SimpledbcallController} from './simpledbcall/simpledbcall.controller';
import {UserService} from "./user/user.service";
import {ComplexdbcallModule} from './complexdbcall/complexdbcall.module';
import {ComplexdbcallController} from "./complexdbcall/complexdbcall.controller";
import {ProjectsModule} from './projects/projects.module';
import {ProgramsModule} from './programs/programs.module';
import {ProgramsController} from "./programs/programs.controller";
import {ProgramsService} from "./programs/programs.service";

@Module({
    imports: [TypeOrmModule.forRoot(),
        forwardRef(() => UserModule),
        forwardRef(() => SimpledbcallModule),
        ComplexdbcallModule,
        ProjectsModule,
        ProgramsModule,
    ],
    controllers: [
        AppController,
        UserController,
        SimpledbcallController,
        ComplexdbcallController,
        ProgramsController],
    providers: [
        AppService,
        UserService,
        ProgramsService
    ],
})
export class AppModule {
}
