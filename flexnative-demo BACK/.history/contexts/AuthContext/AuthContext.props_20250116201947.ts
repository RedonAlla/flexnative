import { ReactNode } from "react";

export type AuthContextProps<TUser = unknown> = {
  state: AuthStateProps<TUser>;
  onRegister: (registerForm: any) => Promise<void>;
  onLogout: () => Promise<void>;
  onAuthentication: () => Promise<void>;
};

export type AuthStateProps<TUser = unknown> = {
  user?: TUser;
}

export type AuthProviderProps = {
  children: ReactNode;
}