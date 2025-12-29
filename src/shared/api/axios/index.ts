import { apiClient } from "./client";
import { attachAccessToken } from "./requestInterceptor";
import { handleResponse, handleResponseError } from "./responseInterceptor";

apiClient.interceptors.request.use(attachAccessToken);
apiClient.interceptors.response.use(handleResponse, handleResponseError);

export { apiClient };
