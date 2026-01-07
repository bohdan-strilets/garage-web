import { httpClient } from '../httpClient'

import type { ApiSuccess } from '../types/ApiSuccess'
import type { HttpConfig } from '../types/HttpConfig'

export const del = async <Response>(
  url: string,
  config?: HttpConfig,
): Promise<Response> => {
  const response = await httpClient.delete<ApiSuccess<Response>>(url, config)
  return response.data.data
}
