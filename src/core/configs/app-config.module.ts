import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { AppConfigService } from './app-config.service';
import configuration from './configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                ENV: Joi.string().valid('local', 'dev', 'sit', 'prf', 'uat', 'prd').default('dev'),
                PORT: Joi.number().default(3000),
                DATETIME_FORMAT_PATTERN: Joi.string().optional().default(`yyyy-MM-dd'T'HH:mm:ss.SSSZZ`),
                TIMEZONE: Joi.string().default('Asia/Bangkok'),
                RETRY_ATTEMPTS: Joi.number().default(3),
                TIMEOUT: Joi.number().default(10000),
                LOG_LEVEL: Joi.string().default('debug'),
            }),
        }),
    ],
    exports: [AppConfigService],
    providers: [AppConfigService],
})
export class AppConfigModule { }
    