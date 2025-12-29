import type { ApiMeta } from "./ApiMeta";

export type ApiResponse<Data = unknown> = {
  success: true;
  message: string | null;
  data: Data;
  meta?: ApiMeta;
};
