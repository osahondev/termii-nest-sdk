export interface TmSingleMessageResponse {
  data: TmSingleMessageResponseDataModel;
}
export interface TmSingleMessageResponseDataModel {
  code: string;
  balance: string;
  message_id: string;
  message: string;
  user: string;
  message_id_str: string;
}
