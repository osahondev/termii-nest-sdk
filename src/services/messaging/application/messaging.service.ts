import { Injectable } from '@nestjs/common';
import {
  TmBulkMessageRequestPayload,
  TmSingleMessageRequestPayload,
} from './payload';
import { handleHttpResponse, reprocessPhoneNumber } from 'src/helpers';
import { firstValueFrom } from 'rxjs';
import { TmBulkMessageResponse, TmSingleMessageResponse } from './response';
import { IntegrationService } from 'src/services/integration';
import { AbstractMessagingService } from './core';

@Injectable()
export class MessagingService implements AbstractMessagingService {
  constructor(private readonly integrationService: IntegrationService) {}
  public sendSingleMessage = async (
    payload: TmSingleMessageRequestPayload,
  ): Promise<TmSingleMessageResponse> => {
    const { to } = payload;
    const reprocessedPayload = {
      ...payload,
      to: reprocessPhoneNumber(to),
    };
    return await firstValueFrom(
      this.integrationService
        .post<
          TmSingleMessageResponse,
          TmSingleMessageRequestPayload
        >('/api/sms/send', reprocessedPayload)
        .pipe(handleHttpResponse()),
    );
  };

  public sendBulkMessage = async (
    payload: TmBulkMessageRequestPayload,
  ): Promise<TmBulkMessageResponse> => {
    const { to } = payload;
    const reprocessedPayload: TmBulkMessageRequestPayload = {
      ...payload,
      to: to.map((phone) => reprocessPhoneNumber(phone)),
    };
    return await firstValueFrom(
      this.integrationService
        .post<
          TmBulkMessageResponse,
          TmBulkMessageRequestPayload
        >('/api/sms/send/bulk', reprocessedPayload)
        .pipe(handleHttpResponse()),
    );
  };
}
