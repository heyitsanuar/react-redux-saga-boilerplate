import axios, { AxiosRequestConfig, CancelTokenSource, CancelTokenStatic, Method } from 'axios';

import { BASE_URL } from './axios.config';

export interface IRequestParams {
  endpoint?: string;
  headers?: object;
  formData?: any;
  body?: object;
  method?: Method;
}

export type Request = (params: IRequestParams) => Promise<any>;

export class AxiosService {
  private readonly baseURL: string;
  private cancelGlobal: CancelTokenStatic;
  private source: CancelTokenSource;

  constructor(baseURL: string = BASE_URL) {
    this.baseURL = baseURL;
    this.cancelGlobal = axios.CancelToken;
    this.source = this.cancelGlobal.source();
  }

  get: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'get',
    });
  };

  post: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'post',
    });
  };

  put: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'put',
    });
  };

  patch: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'patch',
    });
  };

  delete: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'delete',
    });
  };

  cancelRequest(msg: string): void {
    this.source.cancel(msg);
  }

  request: Request = ({ endpoint = this.baseURL, headers = {}, body = {}, method }) => {
    const requestSetup: AxiosRequestConfig = {
      method,
      data: body,
      cancelToken: this.source.token,
    };

    if (headers) {
      requestSetup.headers = { ...requestSetup.headers, ...headers };
    }

    return new Promise((resolve, reject) =>
      axios(endpoint, requestSetup)
        .then(response => {
          if (response.status === 200) {
            return resolve(response);
          }
          return reject(response);
        })
        .catch(error => {
          if (axios.isCancel(error)) {
            return reject({ wasCancelled: true, error });
          }
          return reject({ wasCancelled: false, error });
        }),
    );
  };
}
