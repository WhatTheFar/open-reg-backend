import { FormGroup } from './form-group.model';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Question, QuestionTypes } from './question.model';
import { Form } from './form.model';
import { ChoiceDTO } from './form.dto';

export class FormGroupResponse implements FormGroup {
    @ApiModelProperty()
    _id: string;
    @ApiModelProperty()
    order: number;
    @ApiModelProperty()
    title: string;
    @ApiModelPropertyOptional()
    description?: string;
}

export class QuestionResponse implements Question {
    @ApiModelProperty()
    _id: string;
    @ApiModelProperty()
    order: number;
    @ApiModelProperty()
    group: number;
    @ApiModelProperty()
    type: QuestionTypes;
    @ApiModelProperty()
    label: string;
    @ApiModelProperty()
    key: string;
    @ApiModelProperty()
    value: string;
    @ApiModelProperty({ type: [ChoiceDTO] })
    choices: ChoiceDTO[];
    @ApiModelProperty()
    required: boolean;
    @ApiModelPropertyOptional()
    description?: string;
}

export class FormResponse implements Form {
    @ApiModelProperty()
    _id: string;
    @ApiModelProperty()
    eventId: string;
    @ApiModelProperty({ type: [FormGroupResponse] })
    groups: FormGroup[];
    @ApiModelProperty({ type: [QuestionResponse] })
    questions: Question[];
    @ApiModelProperty()
    title: string;
    @ApiModelPropertyOptional()
    description?: string;
}
