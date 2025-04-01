export interface TmNumberResponse {
  data: TmNumberResponseDataModel;
}
export interface TmNumberResponseDataModel {
  code: string;
  balance: string;
  message_id: string;
  message: string;
  user: string;
}
