import { AxiosRequestConfig } from 'axios';

export interface IHttpClient {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown, D = Record<string, unknown>>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>;
  put<T = unknown, D = Record<string, unknown>>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>;
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  patch<T = unknown, D = Record<string, unknown>>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>;
  request<T = unknown>(config: AxiosRequestConfig): Promise<T>;
}
