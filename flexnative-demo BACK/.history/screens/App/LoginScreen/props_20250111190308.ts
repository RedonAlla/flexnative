export type AuthContextProps<TUser>  = {
  state: AuthStateProps<TUser> 
  //TODO as a generic type. 
  onRegister?: (registerForm: any) => Promise<void>;
  onLogout?: () => Promise<void>;
};

export type AuthStateProps<TUser> = {
  isAuthenticated: boolean;
  token?: string;
  user?: TUser;
}

export type ActonProps = {
  isError: boolean;
  message?: string;
}