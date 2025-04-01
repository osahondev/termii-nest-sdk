import { Injectable } from '@nestjs/common';
import { TmNumberPayload } from './payload';
import { handleHttpResponse } from 'src/helpers';
import { firstValueFrom } from 'rxjs';
import { IntegrationService } from 'src/services/integration';
import { AbstractNumberService } from './core';
import { TmNumberResponse } from './response';

@Injectable()
export class NumberService implements AbstractNumberService {
  constructor(private readonly integrationService: IntegrationService) {}
  public sendMessage = async (
    payload: TmNumberPayload,
  ): Promise<TmNumberResponse> => {
    return await firstValueFrom(
      this.integrationService
        .post<TmNumberResponse, TmNumberPayload>('api/sms/number/send', payload)
        .pipe(handleHttpResponse()),
    );
  };
}
