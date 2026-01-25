import axios from 'axios';

import { LoginProps } from "@/contexts/AuthContext/AuthContext.props";
import { ContentType, Method } from "@/core/constants/HttpCalls";
import { customFetch } from "@/utilities/fetch.utilities";


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
      .then(res => {
        const persons = res.data;
        console.log('RES: ', persons)
        // this.setState({ persons });
        return (persons as any)._bodyInit;
      })
}