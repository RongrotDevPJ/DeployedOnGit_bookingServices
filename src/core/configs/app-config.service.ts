import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    constructor(private configService: ConfigService) { }

    get env(): string {
        return this.configService.get<string>('env')!;
    }

    get port(): number {
        return this.configService.get<number>('port')!;
    }


    get logLevel(): string {
        return this.configService.get<string>('logLevel')!;
    }

    get apiKey(): string {
        return this.configService.get<string>('apiKey')!;
    }
}
