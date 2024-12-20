import type { AxiosResponse } from 'axios';

export const pickDataFromAxiosResponse = (response: AxiosResponse): AxiosResponse['data'] => response.data;
