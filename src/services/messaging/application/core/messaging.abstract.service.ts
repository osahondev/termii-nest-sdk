import { Observable } from 'rxjs';
import { TmSingleMessageRequestPayload } from '../payload';
import { TmSingleMessageResponse } from '../response';

export abstract class AbstractMessagingService {
  abstract sendSingleMessage(
    payload: TmSingleMessageRequestPayload,
  ): Promise<TmSingleMessageResponse>;
}
