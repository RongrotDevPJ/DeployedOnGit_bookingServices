import * as Joi from 'joi';

export class PaginationDto {
    page: number;
    limit: number;
}

export const PaginationSchema = Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
});
