import { Injectable } from '@nestjs/common';
import { TmSingleMessageRequestPayload } from './payload';
import { handleHttpResponse } from 'src/helpers';
import { firstValueFrom } from 'rxjs';
import { TmSingleMessageResponse } from './response';
import { IntegrationService } from 'src/services/integration';
import { AbstractMessagingService } from './core';

@Injectable()
export class MessagingService implements AbstractMessagingService {
  constructor(private readonly integrationService: IntegrationService) {}
  public sendSingleMessage = async (
    payload: TmSingleMessageRequestPayload,
  ): Promise<TmSingleMessageResponse> => {
    return await firstValueFrom(
      this.integrationService
        .post<
          TmSingleMessageResponse,
          TmSingleMessageRequestPayload
        >('/api/sms/send', payload)
        .pipe(handleHttpResponse()),
    );
  };
}
