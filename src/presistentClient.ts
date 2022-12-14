import axios from 'axios';
import { CookieJar } from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';

export function presistentClient(
  extraConfig: axios.AxiosRequestConfig<any> = {}
): axios.AxiosInstance {
  const jar = new CookieJar();

  const client = wrapper(axios.default.create({ jar, ...extraConfig }));

  return client;
}

const transformResponse = _ => _;
const { EGY_HOST, VIDSTREAM_HOST } = process.env;

export const egyClient = presistentClient({
  baseURL: EGY_HOST,
  transformResponse
});

export const egyJsonClient = presistentClient({
  baseURL: EGY_HOST
});

export const vidStreamClient = presistentClient({
  baseURL: VIDSTREAM_HOST,
  transformResponse
});
