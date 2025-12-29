import { ACCESS_TOKEN_KEY } from "../constants";

export const accessToken = {
  get(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  set(token: string): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },

  remove(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  },
};
