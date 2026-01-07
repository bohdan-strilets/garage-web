import { httpClient } from '../httpClient'

import type { ApiSuccess } from '../types/ApiSuccess'
import type { HttpConfig } from '../types/HttpConfig'

export const post = async <Response, Body = unknown>(
  url: string,
  body?: Body,
  config?: HttpConfig,
): Promise<Response> => {
  const response = await httpClient.post<ApiSuccess<Response>>(
    url,
    body,
    config,
  )

  return response.data.data
}
