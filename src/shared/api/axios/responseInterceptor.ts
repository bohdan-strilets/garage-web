import { normalizeApiError } from "../errors";

import type { AxiosResponse } from "axios";

export const handleResponse = <T>(response: AxiosResponse<T>) => {
  return response;
};

export const handleResponseError = (error: unknown) => {
  const apiError = normalizeApiError(error);
  return Promise.reject(apiError);
};
