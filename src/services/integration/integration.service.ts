import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { SdkConfig } from 'src/config';
import { MODULE_OPTIONS_TOKEN } from 'src/termii-sdk/termii-sdk-definition';

@Injectable()
export class IntegrationService extends HttpService {
  private axiosRequestConfig: AxiosRequestConfig = null;
  private apiKey: string | undefined = null;
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: SdkConfig,
  ) {
    super();
    const { termiiApiKey, termiiBaseUrl } = options;
    this.axiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${options.termiiApiKey}`,
      },
    };
    this.axiosRef.defaults.baseURL = termiiBaseUrl;
    // this.axiosRef.defaults.timeout = 3000;
    this.apiKey = termiiApiKey;
  }
  public override get<T>(url: string): Observable<AxiosResponse<T>> {
    return super.get(url);
  }
  public override post<T, K>(
    url: string,
    payload: K,
  ): Observable<AxiosResponse<T>> {
    return super.post<T>(
      url,
      { ...payload, api_key: this.apiKey },
      {
        headers: this.axiosRequestConfig.headers,
      },
    );
  }
}
