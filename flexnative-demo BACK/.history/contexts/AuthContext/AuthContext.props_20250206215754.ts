import { ReactNode } from "react";

import { LoginUser } from "@/core/models/LoginUser";


export type AuthContextProps = {
  state: AuthStateProps;
  onRegister?: (registerForm: any) => Promise<void>;
  onLogout?: () => Promise<void>;
  onLogin: (loginForm: LoginProps) => Promise<void>;
  onAuthentication: () => void;
};

export type AuthStateProps = {
  user?: LoginUser;
  authenticated: boolean;
}

export type AuthProviderProps = {
  children: ReactNode;
}

export type LoginProps = {
  email: string;
  password: string;
}