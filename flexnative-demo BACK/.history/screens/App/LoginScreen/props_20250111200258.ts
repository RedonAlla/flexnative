import { ReactNode } from "react";

export type AuthContextProps<TUser = unknown> = {
  state: AuthStateProps<TUser>
  //TODO as a generic type. 
  onRegister?: (registerForm: any) => Promise<void>;
  onLogout?: () => Promise<void>;
  onLocalAuthentication: () => Promise<void>;
};

export type AuthStateProps<TUser = unknown> = {
  isAuthenticated: boolean;
  token?: string;
  user?: TUser;
}

export type AuthProviderProps = {
  children?: ReactNode;
}