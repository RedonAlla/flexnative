export type AuthContextProps= {
  isAuthenticated: boolean;
  token?: string;

  //TODO add as a generic type. 
  onRegister?: (registerForm: any) => Promise<void>;
  onLogout: () => Promise<void>;
};