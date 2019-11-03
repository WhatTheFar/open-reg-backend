import {
    Controller,
    Get,
    Post,
    Body,
    UseInterceptors,
    UploadedFile,
    BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserId } from './user.decorator';
import { Authenticated } from '../auth/auth.decorator';
import { RegisterUserDTO } from './user.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { FormResponse } from '../form/form.response';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Authenticated()
    @Get('profile')
    getProfile(@UserId() userId: string) {
        return this.userService.findById(userId);
    }

    @ApiOkResponse({ type: FormResponse })
    @Authenticated()
    @Get('form')
    getRegistrationForm(@UserId() userId: string) {
        return this.userService.getRegistrationForm(userId);
    }

    @UseInterceptors(FileInterceptor('image'))
    @Authenticated()
    @Post('form')
    async submitRegistrationForm(
        @UserId() userId: string,
        @Body() { image, answer }: RegisterUserDTO,
        @UploadedFile() file: any,
    ) {
        if (file) {
            await this.userService.deleteOldImage(userId);
        }
        const url = file ? file.location : image;
        if (!url) throw new BadRequestException('Image is missing.');
        // TODO delete old file
        return this.userService.submitRegistrationForm(userId, answer, url);
    }
}
