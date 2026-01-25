export type AuthContextProps<TUser> = {
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

export type ActonProps = {
  isError: boolean;
  message?: string;
}