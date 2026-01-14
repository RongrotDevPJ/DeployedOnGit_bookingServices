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

                LOG_LEVEL: Joi.string().default('debug'),
            }),
        }),
    ],
    exports: [AppConfigService],
    providers: [AppConfigService],
})
export class AppConfigModule { }
