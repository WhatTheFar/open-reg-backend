import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_MODEL, UserSchema } from './user.model';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '../config/config.module';
import { FileService } from '../file/file.service';
import { ConfigService } from 'aws-sdk';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: USER_MODEL, schema: UserSchema }]),
        MulterModule.registerAsync({
            imports: [ConfigModule],
            useClass: FileService,
            inject: [ConfigService],
        }),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
