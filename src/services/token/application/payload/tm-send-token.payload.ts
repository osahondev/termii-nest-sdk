import {
  TmMessageChannelModel,
  TmMessageTokenTypeModel,
} from 'src/models/common';

export interface TmSendTokenPayload {
  message_type: TmMessageTokenTypeModel;
  to: string;
  from: string;
  channel: TmMessageChannelModel;
  pin_attempts: number;
  pin_time_to_live: number;
  pin_length: number;
  pin_placeholder: string;
  message_text: string;
  pin_type: string;
}
