import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';

export const request = [(config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('token');

  if(token) {
    config.headers.token = token;
  }

  return config;
}];

export const response = [
  (res: AxiosResponse): Promise<AxiosResponse> => {
    if(!(res.data.code === 'success' || res.data.code === 0) && res.data.code) {
      if(res.data.msg === '401') {
        localStorage.clear();

        return Promise.reject('用户没有访问权限');
      } else {
        ElMessage.error({
          message: res.data.msg + '，建议刷新重试！',
          type: 'error'
        })

        return Promise.reject(res.data.msg);
      }
    }

    return Promise.resolve(res);
  }
];
