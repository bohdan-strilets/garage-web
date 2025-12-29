import { apiClient } from "./axios";
import { normalizeApiError } from "./errors";

export const http = {
  get: async <T>(url: string, params?: unknown): Promise<T> => {
    try {
      const { data } = await apiClient.get<T>(url, { params });
      return data;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },

  post: async <T, B = unknown>(url: string, body?: B): Promise<T> => {
    try {
      const { data } = await apiClient.post<T>(url, body);
      return data;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },

  patch: async <T, B = unknown>(url: string, body?: B): Promise<T> => {
    try {
      const { data } = await apiClient.patch<T>(url, body);
      return data;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },

  delete: async <T>(url: string): Promise<T> => {
    try {
      const { data } = await apiClient.delete<T>(url);
      return data;
    } catch (error) {
      throw normalizeApiError(error);
    }
  },
};
