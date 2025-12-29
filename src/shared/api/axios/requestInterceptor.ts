import { accessToken } from "../token/accessToken";

import type { InternalAxiosRequestConfig } from "axios";

export const attachAccessToken = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const token = accessToken.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
