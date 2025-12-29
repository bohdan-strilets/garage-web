import axios from "axios";

import type { ApiError } from "./types/ApiError";

export const normalizeApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError<ApiError>(error)) {
    const response = error.response;

    if (response?.data) {
      return response.data;
    }

    return {
      success: false,
      statusCode: response?.status ?? 500,
      message: [error.message || "Request failed"],
      timestamp: new Date().toISOString(),
      path: "",
    };
  }

  return {
    success: false,
    statusCode: 500,
    message: ["Unexpected error"],
    timestamp: new Date().toISOString(),
    path: "",
  };
};
