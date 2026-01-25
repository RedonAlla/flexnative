import { ReactNode } from "react";

import { LoginUser } from "@/core/models/LoginUser";


export type AuthContextProps<TLoginRequest> = {
  state: AuthStateProps;
  onRegister?: (registerForm: any) => Promise<void>;
  onLogout?: () => Promise<void>;
  onLogin: (loginForm: TLoginRequest) => Promise<void>;
  onAuthentication: () => Promise<void>;
};

export type AuthStateProps = {
  user?: LoginUser;
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