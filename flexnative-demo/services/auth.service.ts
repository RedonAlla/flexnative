import axios from 'axios';

import { LoginProps } from "@/contexts/AuthContext/AuthContext.props";
import { Endpoints } from '@/core/constants/HttpCalls';


export async function login(loginForm: LoginProps) {
  return axios.post(Endpoints.login, loginForm)
              .then(response => response.data)
}