import { Controller, Post, Get, Param, Body, UseInterceptors } from '@nestjs/common';
import { ResponseService } from './response.service';
import { SubmitResponseDTO } from './response.dto';
import { Authenticated } from '../auth/auth.decorator';
import { UserId } from '../user/user.decorator';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('response')
export class ResponseController {
    constructor(private readonly responseService: ResponseService) { }
    @Get(':id')
    getResponse(@Param('id') id: string) {
        return this.responseService.findById(id);
    }


    @Authenticated()
    @UseInterceptors(AnyFilesInterceptor())
    @Post()
    submitResponse(
        @Body() response: SubmitResponseDTO,
        @UserId() userId: string,
    ) {
        return this.responseService.submitResponse(response, userId);
    }
}
