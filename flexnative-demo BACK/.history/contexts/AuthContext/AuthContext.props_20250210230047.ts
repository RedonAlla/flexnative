import { ReactNode } from "react";

import { LoginUser } from "@/core/models/LoginUser";


export type AuthContextProps<TLoginRequest, TUser> = {
  state: AuthStateProps<TUser>;
  onRegister?: (registerForm: any) => Promise<void>;
  onLogout?: () => Promise<void>;
  onLogin: (loginForm: TLoginRequest) => Promise<void>;
  onAuthentication: () => Promise<void>;
};

export type AuthStateProps<TUser> = {
  user?: TUser;
  session?: string;
  authenticated: boolean;
}

export type AuthProviderProps = {
  children: ReactNode;
}

export type LoginProps = {
  email: string;
  password: string;
}