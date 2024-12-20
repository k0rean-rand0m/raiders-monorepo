import type { AxiosRequestConfig } from 'axios';
// import 'telegram-web-app';

export const addUserToAxiosRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // eslint-disable-next-line no-param-reassign
  config.data = config.data || {};

  // if (!('Telegram' in window)) return config;

  const initData = window.Telegram?.WebApp?.initData || import.meta.env.VITE_TG_INIT_DATA;

    config.headers = {
      'Content-Type': 'application/json',
      'X-Telegram-Init-Data': initData || ''
    };

  return config;
};
