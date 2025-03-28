import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { SdkConfig } from 'src/config';

@Injectable()
export class TermiiSDKClient {
  private readonly httpClient: AxiosInstance;
  private readonly baseUrl: string;
  constructor(config: SdkConfig) {
    const { termiiBaseUrl, termiiApiKey } = config;
    this.baseUrl = termiiBaseUrl;
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
    });
  }

  private processSDKResponseMessageToClient = (): void => {};
  public sendSingleMessage = async (payload) => {
    //this.messagingService.sendSingleMessage();
  };
  public sendBulkMessage = async () => {};
}
