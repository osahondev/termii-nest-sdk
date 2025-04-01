export interface TmVerifyTokenResponse {
  data: TmVerifyTokenResponseDataModel;
}
export interface TmVerifyTokenResponseDataModel {
  pinId: string;
  verified: string;
  msisdn: string;
}
