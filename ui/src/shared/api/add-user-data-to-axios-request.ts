import type { AxiosRequestConfig } from 'axios';
// import 'telegram-web-app';

export const addUserToAxiosRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // eslint-disable-next-line no-param-reassign
  config.data = config.data || {};

  // if (!('Telegram' in window)) return config;

  const initData = window.Telegram?.WebApp?.initData || import.meta.env.VITE_TG_INIT_DATA;
  // const initData = 'query_id=AAG0QsUNAAAAALRCxQ0tFuPe&user=%7B%22id%22%3A231031476%2C%22first_name%22%3A%22Ian%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22cxrtisxl%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FD9_SrswjNHT6niKwI3WCD10Q8k_ifGLNM7B1xcgbF6o.svg%22%7D&auth_date=1733401586&signature=Lk5rX0vBNUcquS8JgQBb4KrOwpwmm1BXGHY6GRdMVdJim31H3941T10f9V4Sg4-_lU8WH3Jqvj1cBXiZkg9bDQ&hash=1d890351a5f18aee09ff3aa2c0666e56e182daefb6af228f3818ca9ede744f87';

    config.headers = {
      'Content-Type': 'application/json',
      'X-Telegram-Init-Data': initData || ''
    };

  return config;
};
