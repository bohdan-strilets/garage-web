export type ApiError = {
  success: boolean;
  statusCode: number;
  message: string[];
  timestamp: string;
  path: string;
};
