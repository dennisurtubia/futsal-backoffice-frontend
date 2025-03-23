import { AxiosRequestConfig } from 'axios';

export interface IHttpClient {
  get<T = unknown>(_url: string, _config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown, D = Record<string, unknown>>(_url: string, _data?: D, _config?: AxiosRequestConfig): Promise<T>;
  put<T = unknown, D = Record<string, unknown>>(_url: string, _data?: D, _config?: AxiosRequestConfig): Promise<T>;
  delete<T = unknown>(_url: string, _config?: AxiosRequestConfig): Promise<T>;
  patch<T = unknown, D = Record<string, unknown>>(_url: string, _data?: D, _config?: AxiosRequestConfig): Promise<T>;
  request<T = unknown>(_config: AxiosRequestConfig): Promise<T>;
}
