import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { AppConfigService } from '../../core/configs/app-config.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    constructor(private readonly appConfigService: AppConfigService) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>();
        const apiKey = request.headers['x-api-key'];

        if (apiKey !== this.appConfigService.apiKey) {
            throw new UnauthorizedException('Invalid API Key');
        }

        return true;
    }
}
