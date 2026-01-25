import { LoginProps } from "@/contexts/AuthContext/AuthContext.props";
import { ContentType, Method } from "@/core/constants/HttpCalls";


export async function login(form: LoginProps) {
  return await fetch('/account/login', {
    method: Method.Post,
    headers: {
      'Content-Type': ContentType.ApplicationJson
    },
    body: JSON.stringify(form)
  }).then(response => response.json());
}