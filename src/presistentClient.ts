import axios from 'axios';
import { CookieJar } from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';

export function presistentClient(
  extraConfig: axios.AxiosRequestConfig<any> = {},
): axios.AxiosInstance {
  const jar = new CookieJar();
  const client = wrapper(
    axios.default.create({ jar, transformResponse: (_) => _, ...extraConfig }),
  );

  return client;
}
