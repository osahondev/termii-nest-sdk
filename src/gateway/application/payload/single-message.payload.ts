export interface SingleMessagePayload {
  to: string;
  from: string;
  sms: string;
  type: string;
  channel: 'generic' | 'dnd';
  api_key: string;
}
