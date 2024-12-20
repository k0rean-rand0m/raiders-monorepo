import axios from 'axios';
import { BASE_HTTP_CLIENT_SETTINGS } from './constants';
import { pickDataFromAxiosResponse } from './pick-data-from-axios-response';
import { addUserToAxiosRequest } from './add-user-data-to-axios-request';

const httpClient = axios.create({
  ...BASE_HTTP_CLIENT_SETTINGS,
  baseURL: import.meta.env.VITE_API,
});

httpClient.interceptors.response.use(pickDataFromAxiosResponse);
httpClient.interceptors.request.use(addUserToAxiosRequest);

export { httpClient };
