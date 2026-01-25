export type AuthContextProps<TUser>  = {
  state: AuthStateProps<TUser> 
  //TODO add as a generic type. 
  onRegister?: (registerForm: any) => Promise<void>;
  onLogout: () => Promise<void>;
};

export type AuthStateProps<TUser> = {
  isAuthenticated: boolean;
  token?: string;
  user?: TUser;
}