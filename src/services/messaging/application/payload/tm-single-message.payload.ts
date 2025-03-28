import { TmMessageChannelModel, TmMessageTypeModel } from 'src/models/common';

export interface TmSingleMessageRequestPayload {
  to: string;
  from: string;
  sms: string;
  type: TmMessageTypeModel;
  channel: TmMessageChannelModel;
  media?: {
    url?: string;
    caption?: string;
  };
}
