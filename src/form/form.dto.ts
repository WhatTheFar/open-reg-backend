import {
    IsString,
    IsArray,
    ValidateNested,
    IsIn,
    IsBoolean,
    IsOptional,
    IsMongoId,
    IsInt,
} from 'class-validator';
import {
    QUESTION_TYPES,
    Question,
    QuestionTypes,
    Choice,
} from './question.model';
import { Type } from 'class-transformer';
import { Form } from './form.model';
import { FormGroup } from './form-group.model';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

export class ChoiceDTO implements Choice {
    @ApiModelProperty()
    @IsString()
    label: string;

    @ApiModelProperty()
    @IsString()
    value: string;
}
export class QuestionDTO implements Question {
    @ApiModelProperty()
    @IsIn(QUESTION_TYPES)
    type: QuestionTypes;

    @ApiModelProperty()
    @IsString()
    label: string;

    @ApiModelProperty()
    @IsString()
    key: string;

    @ApiModelProperty()
    @IsInt()
    group: number;

    @ApiModelProperty()
    @IsInt()
    order: number;

    @ApiModelProperty({ type: [ChoiceDTO] })
    @IsOptional()
    @IsArray()
    choices: ChoiceDTO[];

    @ApiModelProperty()
    subChoices: {
        [key: string]: ChoiceDTO[];
    };

    @ApiModelProperty()
    @IsOptional()
    @IsBoolean()
    required: boolean;

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    description?: string;
}

export class FormGroupDTO implements FormGroup {
    @ApiModelProperty()
    @IsInt()
    order: number;

    @ApiModelProperty()
    @IsString()
    title: string;

    @ApiModelPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string;
}

export class CreateFormDTO implements Form {
    @ApiModelProperty()
    @IsMongoId()
    eventId: string;

    @ApiModelProperty()
    @IsString()
    title: string;

    @ApiModelProperty({ type: [FormGroupDTO] })
    @ValidateNested({ each: true })
    @Type(() => FormGroupDTO)
    groups: FormGroupDTO[];

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiModelProperty({ type: [QuestionDTO] })
    @ValidateNested({ each: true })
    @Type(() => QuestionDTO)
    questions: QuestionDTO[];

    @ApiModelPropertyOptional()
    readPermissions?: string[];
}

export class EditFormDTO implements Partial<Form> {
    @ApiModelProperty()
    @IsOptional()
    @IsMongoId()
    eventId?: string;

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    title?: string;

    @ApiModelProperty({ type: [FormGroupDTO] })
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => FormGroupDTO)
    groups?: FormGroupDTO[];

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiModelProperty({ type: [QuestionDTO] })
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => QuestionDTO)
    questions?: QuestionDTO[];

    @ApiModelPropertyOptional()
    @IsOptional()
    @ValidateNested({ each: true })
    readPermissions?: string[];
}
