import type { AxiosResponse } from "axios";

export const handleResponse = (response: AxiosResponse) => response;

export const handleResponseError = (error: unknown) => {
  // тут зʼявиться:
  // refresh token
  // logout
  // normalize error
  return Promise.reject(error);
};
