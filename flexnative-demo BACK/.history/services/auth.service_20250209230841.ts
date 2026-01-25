import axios from 'axios';

import { LoginProps } from "@/contexts/AuthContext/AuthContext.props";


export async function login(loginForm: LoginProps) {
  // return await customFetch('/account/login', {
  //   method: Method.POST,
  //   headers: {
  //     'Content-Type': ContentType.ApplicationJson
  //   },
  //   body: JSON.stringify(loginForm)
  // }).then(response => {
  //   return (response as any)._bodyInit;
  // });

  return axios.post(`/account/login`, loginForm)
              .then(response => response.data)
}