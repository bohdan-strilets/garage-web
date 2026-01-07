import { httpClient } from '../httpClient'

import type { ApiSuccess } from '../types/ApiSuccess'
import type { HttpConfig } from '../types/HttpConfig'

export const put = async <Response, Body = unknown>(
  url: string,
  body?: Body,
  config?: HttpConfig,
): Promise<Response> => {
  const response = await httpClient.put<ApiSuccess<Response>>(url, body, config)
  return response.data.data
}
