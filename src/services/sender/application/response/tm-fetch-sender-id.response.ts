export interface TmFetchSenderIDResponse {
  data: TmFetchSenderIDResponseDataModel;
}
export interface TmFetchSenderIDResponseDataModel {
  current_page: number;
  data: {
    sender_id: string;
    status: string;
    company: string;
    usecase: string;
    country: string;
    created_at: Date;
  }[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}
