import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { unflatten } from 'flat';
@Injectable()
export class UnflattenPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (metadata.type === 'body') {
            return unflatten(value);
        } else {
            return value;
        }
    }
}
