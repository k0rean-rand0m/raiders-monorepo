import type { CreateAxiosDefaults } from 'axios';

export const BASE_HTTP_CLIENT_SETTINGS: CreateAxiosDefaults = {
  responseType: 'json',
  headers: { Accept: 'application/json' },
  withCredentials: false,
};
