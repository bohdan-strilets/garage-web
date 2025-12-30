import { apiClient } from "./axios";

export const http = {
  get: async <T>(url: string, params?: unknown): Promise<T> => {
    const { data } = await apiClient.get<T>(url, { params });
    return data;
  },

  post: async <T, B = unknown>(url: string, body?: B): Promise<T> => {
    const { data } = await apiClient.post<T>(url, body);
    return data;
  },

  patch: async <T, B = unknown>(url: string, body?: B): Promise<T> => {
    const { data } = await apiClient.patch<T>(url, body);
    return data;
  },

  delete: async <T>(url: string): Promise<T> => {
    const { data } = await apiClient.delete<T>(url);
    return data;
  },
};
