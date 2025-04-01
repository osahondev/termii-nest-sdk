import { TmSendTokenPayload } from '../payload';
import { TmVerifyTokenPayload } from '../payload/tm-verify-token.payload';
import { TmSendTokenResponse } from '../response';
import { TmVerifyTokenResponse } from '../response/tm-verify-token.response';

export abstract class AbstractTokenService {
  abstract sendToken(payload: TmSendTokenPayload): Promise<TmSendTokenResponse>;
  abstract verifyToken(
    payload: TmVerifyTokenPayload,
  ): Promise<TmVerifyTokenResponse>;
}
