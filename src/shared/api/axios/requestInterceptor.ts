import { getAccessToken, isAuthenticated } from "@entities/session";

import type { InternalAxiosRequestConfig } from "axios";

export const attachAccessToken = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const accessToken = getAccessToken();
  const isAuth = isAuthenticated();

  if (isAuth) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};
