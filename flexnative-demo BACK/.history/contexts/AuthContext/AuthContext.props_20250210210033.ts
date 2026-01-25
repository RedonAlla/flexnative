import { ReactNode } from "react";

import { LoginUser } from "@/core/models/LoginUser";


/**
 * Type definition for AuthContextProps.
 * This represents the properties expected by an authentication context.
 */
export type AuthContextProps = {
  /**
   * Represents the current authentication state.
   */
  state: AuthStateProps;

  /**
   * Optional function to handle user registration.
   * Accepts a register form object and returns a promise that resolves void.
   * 
   * @param registerForm 
   * @returns Returns a promise that resolves void.
   */
  onRegister?: (registerForm: any) => Promise<void>;

  /**
   * Optional function to log out the user.
   * 
   * @returns Returns a promise that resolves void.
   */
  onLogout?: () => Promise<void>;

  /**
   * Function to handle user login.
   * @param loginForm 
   * @returns 
   */
  onLogin: (loginForm: LoginProps) => Promise<void>;

  /**
   * Function declaration for 'onAuthentication' which returns a Promise<void>.
   * @returns a Promise<void>
   */
  onAuthentication: () => Promise<void>;
};

export type AuthStateProps = {
  user?: LoginUser;
  token?: string;
  authenticated: boolean;
}

export type AuthProviderProps = {
  children: ReactNode;
}

export type LoginProps = {
  email: string;
  password: string;
}