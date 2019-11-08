import {
    IsString,
    IsEmail,
    IsNumberString,
    IsNotEmpty,
    ValidateNested,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateUserFromChulaSsoDTO {
    @IsString()
    chulaId: string;

    @IsString()
    faculty: string;
    @IsString()
    year: number;

    @IsString()
    firstName: string;

    @IsString()
    firstNameEn: string;

    @IsString()
    lastName: string;

    @IsString()
    lastNameEn: string;
}

export class UserInfoDto {
    @ApiModelProperty()
    @IsEmail()
    email: string;

    @ApiModelProperty()
    @IsString()
    line: string;

    @ApiModelProperty()
    @IsString()
    facebook: string;

    @ApiModelProperty()
    @IsString()
    title: string;

    @ApiModelProperty()
    @IsString()
    firstName: string;

    @ApiModelProperty()
    @IsString()
    lastName: string;

    @ApiModelProperty()
    @IsString()
    nickName: string;

    @ApiModelProperty()
    @IsString()
    titleEn: string;

    @ApiModelProperty()
    @IsString()
    firstNameEn: string;

    @ApiModelProperty()
    @IsString()
    lastNameEn: string;

    @ApiModelProperty()
    @IsString()
    nickNameEn: string;

    @ApiModelProperty()
    @IsNumberString()
    tel: string;

    @ApiModelProperty()
    @IsNumberString()
    emergencyTel: string;

    @ApiModelProperty()
    @IsString()
    emergencyRelationship: string;
}

export class RegisterUserDTO {
    @ValidateNested()
    @ApiModelProperty({ type: UserInfoDto })
    @Type(() => UserInfoDto)
    answers: UserInfoDto;

    @ApiModelProperty()
    image: any;
}
