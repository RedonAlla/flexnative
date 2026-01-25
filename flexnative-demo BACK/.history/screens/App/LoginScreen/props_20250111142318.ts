type AuthContextProps<TRegisterForm> = {
  isAuthenticated: boolean;
  token?: string;
  onRegister?: (registerForm: TRegisterForm) => Promise<void>;
  onLogout: () => Promise<void>;
};