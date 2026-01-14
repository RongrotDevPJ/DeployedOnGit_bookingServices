import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: Joi.ObjectSchema) { }

    transform(value: any, metadata: ArgumentMetadata) {
        const { error, value: validatedValue } = this.schema.validate(value, { convert: true });
        if (error) {
            throw new BadRequestException('Validation failed: ' + error.message);
        }
        return validatedValue;
    }
}
