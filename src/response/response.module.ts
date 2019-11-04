import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RESPONSE_MODEL, ResponseSchema } from './response.model';
import { FormModule } from '../form/form.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '../config/config.module';
import { FileService } from '../file/file.service';
import { ConfigService } from 'aws-sdk';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: RESPONSE_MODEL, schema: ResponseSchema },
        ]),
        FormModule,
        MulterModule.registerAsync({
            imports: [ConfigModule],
            useClass: FileService,
            inject: [ConfigService],
        }),
    ],
    providers: [ResponseService],
    exports: [ResponseService],
    controllers: [ResponseController],
})
export class ResponseModule { }
