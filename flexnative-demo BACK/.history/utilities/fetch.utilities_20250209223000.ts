import { useAuthContext } from "@/contexts/AuthContext/AuthContext";
import { ContentType } from "@/core/constants/HttpCalls";

export function customFetch(input: string | URL | globalThis.Request, options?: RequestInit): Promise<Response> {

  const { state } = useAuthContext();
  const defaultHeaders = {
    'Content-Type': ContentType.ApplicationJson,
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  };

  const headers = {
    ...defaultHeaders,
    ...(options?.headers || {})
  };

  const newOptions = {
    ...options,
    headers: headers
  }; 

  return fetch(input, newOptions);
}