import { IsMongoId, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class SubmitResponseDTO {
    @ApiModelProperty()
    @IsMongoId()
    form: string;

    @ApiModelProperty()
    @IsNotEmpty()
    answer: {
        [key: string]: string;
    };
}
