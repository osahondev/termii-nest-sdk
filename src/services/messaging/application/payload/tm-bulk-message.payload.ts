import { TmMessageChannelModel, TmMessageTypeModel } from 'src/models/common';

export interface TmBulkMessageRequestPayload {
  to: string[];
  from: string;
  sms: string;
  type: TmMessageTypeModel;
  channel: TmMessageChannelModel;
}
