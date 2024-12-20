import type { AxiosRequestConfig } from 'axios';
// import 'telegram-web-app';

export const addUserToAxiosRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // eslint-disable-next-line no-param-reassign
  config.data = config.data || {};

  // if (!('Telegram' in window)) return config;

  // const initData = window.Telegram?.WebApp?.initData || import.meta.env.VITE_TG_INIT_DATA;
  const initData =  'user=%7B%22id%22%3A268824873%2C%22first_name%22%3A%22Nick%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22green_crepper%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FcOAwclNwCbTXIZ9XK0D755FOMW6NyO2AUWZdClaVLok.svg%22%7D&chat_instance=5048095695595414696&chat_type=private&auth_date=1734700185&signature=hME9quj143QsE2n-Prc6rYjCEde8faLJHtlk2Tz07w6tKanzNH5z3EEVMji1rYnqOvnKbPDaV5eifhwvpQOWDg&hash=576ffb99a83475d83ec83efb230b97c687e75bf7562fceed06100b15b87d8474'

  config.headers = {
      'Content-Type': 'application/json',
      'X-Telegram-Init-Data': initData || ''
    };

  return config;
};
