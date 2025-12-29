import axios from "axios";

import { env } from "@shared/config";

export const apiClient = axios.create({
  baseURL: env.API_URL,
  timeout: 15_000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
