import {
  TmBulkMessageRequestPayload,
  TmSingleMessageRequestPayload,
} from '../payload';
import { TmBulkMessageResponse, TmSingleMessageResponse } from '../response';

export abstract class AbstractMessagingService {
  abstract sendSingleMessage(
    payload: TmSingleMessageRequestPayload,
  ): Promise<TmSingleMessageResponse>;
  abstract sendBulkMessage(
    payload: TmBulkMessageRequestPayload,
  ): Promise<TmBulkMessageResponse>;
}
