export interface TmSendTokenResponse {
  data: TmSendTokenResponseDataModel;
}
export interface TmSendTokenResponseDataModel {
  pinId: string;
  to: string;
  smsStatus: string;
}
