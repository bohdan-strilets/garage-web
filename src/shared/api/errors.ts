import axios from "axios";

import { ERROR_CODES } from "@shared/errors";

import type { ApiError } from "./types/ApiError";

export const normalizeApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError<ApiError>(error)) {
    const response = error.response;

    if (response?.data) {
      return response.data;
    }

    return {
      statusCode: response?.status ?? 500,
      code: ERROR_CODES.INTERNAL_SERVER_ERROR,
    };
  }

  return {
    statusCode: 500,
    code: ERROR_CODES.INTERNAL_SERVER_ERROR,
  };
};
