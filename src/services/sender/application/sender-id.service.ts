import { Injectable } from '@nestjs/common';
import { TmRequestSenderIDPayload } from './payload';
import { handleHttpResponse } from 'src/helpers';
import { firstValueFrom } from 'rxjs';
import { IntegrationService } from 'src/services/integration';
import { AbstractSenderIDService } from './core';
import { TmFetchSenderIDResponse, TmRequestSenderIDResponse } from './response';

@Injectable()
export class SenderIDService implements AbstractSenderIDService {
  constructor(private readonly integrationService: IntegrationService) {}
  public fetchSenderId = async (): Promise<TmFetchSenderIDResponse> => {
    return await firstValueFrom(
      this.integrationService
        .get<TmFetchSenderIDResponse>('api/sender-id')
        .pipe(handleHttpResponse()),
    );
  };
  public requestSenderId = async (
    payload: TmRequestSenderIDPayload,
  ): Promise<TmRequestSenderIDResponse> => {
    return await firstValueFrom(
      this.integrationService
        .post<
          TmRequestSenderIDResponse,
          TmRequestSenderIDPayload
        >('api/sender-id/request', payload)
        .pipe(handleHttpResponse()),
    );
  };
}
