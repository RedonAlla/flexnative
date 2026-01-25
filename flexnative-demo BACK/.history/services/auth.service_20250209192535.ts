import { LoginProps } from "@/contexts/AuthContext/AuthContext.props";
import { ContentType, Method } from "@/core/constants/HttpCalls";


export async function login(loginForm: LoginProps) {
  return await fetch('/account/login', {
    method: Method.POST,
    headers: {
      'Content-Type': ContentType.ApplicationJson
    },
    body: JSON.stringify(loginForm)
  }).then(response => {
    console.log('RESPONSE: ', response);
    console.log('JSON: ', response.json());
    return response.body;
  });
}