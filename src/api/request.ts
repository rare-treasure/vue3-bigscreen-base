import axios from 'axios';
import { request, response } from './interceptors';

export type ResData = {
  data: Record<string, unknown>;
}

// 超时
axios.defaults.timeout = 90000;

axios.defaults.baseURL = '/forestry';

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//HTTPrequest拦截
axios.interceptors.request.use(...request);

// HTTPresponse拦截
axios.interceptors.response.use(...response);

export default axios;

export async function post(url: string, data: Record<string, unknown>, opts = {}): Promise<ResData> {
  return axios({
    url,
    data,
    method: 'post',
    ...opts
  }).then(({ data }) => data)
}

export async function get(url: string, params: { [key: string]: string }, opts = {}): Promise<ResData> {
  return axios({
    url,
    params,
    method: 'get',
    ...opts
  }).then(({ data }) => data)
}
