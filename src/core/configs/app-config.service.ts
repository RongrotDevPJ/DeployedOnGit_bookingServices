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

    get datetimeFormatPattern(): string {
        return this.configService.get<string>('datetimeFormatPattern')!;
    }

    get timezone(): string {
        return this.configService.get<string>('timezone')!;
    }

    get retryAttempts(): number {
        return this.configService.get<number>('retryAttempts')!;
    }

    get timeout(): number {
        return this.configService.get<number>('timeout')!;
    }

    get logLevel(): string {
        return this.configService.get<string>('logLevel')!;
    }
}
