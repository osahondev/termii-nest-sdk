import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { TmSendTokenPayload } from './payload';
import { handleHttpResponse } from 'src/helpers';
import { firstValueFrom } from 'rxjs';
import { IntegrationService } from 'src/services/integration';
import { AbstractTokenService } from './core';
import { TmSendTokenResponse } from './response';
import { TmVerifyTokenPayload } from './payload/tm-verify-token.payload';
import { TmVerifyTokenResponse } from './response/tm-verify-token.response';

@Injectable()
export class TokenService implements AbstractTokenService {
  constructor(private readonly integrationService: IntegrationService) {}

  public sendToken = async (
    payload: TmSendTokenPayload,
  ): Promise<TmSendTokenResponse> => {
    return await firstValueFrom(
      this.integrationService
        .post<
          TmSendTokenResponse,
          TmSendTokenPayload
        >('api/sms/otp/send', payload)
        .pipe(handleHttpResponse()),
    );
  };
  public verifyToken = async (
    payload: TmVerifyTokenPayload,
  ): Promise<TmVerifyTokenResponse> => {
    const data = (await firstValueFrom(
      this.integrationService
        .post<
          TmVerifyTokenResponse,
          TmVerifyTokenPayload
        >('api/sms/otp/verify', payload)
        .pipe(handleHttpResponse()),
    )) as any;
    const { verified } = data;
    if (!verified || verified !== true)
      throw new BadRequestException(
        `${verified}: it appears this OTP request has expired...`,
      );

    return data;
  };
}
