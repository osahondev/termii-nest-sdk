import { TmRequestSenderIDPayload } from '../payload';
import { TmFetchSenderIDResponse } from '../response';

export abstract class AbstractSenderIDService {
  abstract fetchSenderId(): Promise<TmFetchSenderIDResponse>;
  abstract requestSenderId(payload: TmRequestSenderIDPayload): Promise<any>;
}
