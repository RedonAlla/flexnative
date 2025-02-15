/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-10 22:28:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-13 22:02:56
 * @ Description: AuthContext is a React context that provides authentication-related data and methods to its consumers. It allows components within the application to access and manage authentication state, such as the current user, login status.
 */

import React from 'react';
import { AuthContextProps } from './props';


/**
 * React context for authentication.
 * 
 * This context provides authentication state and functions to manage authentication.
 * It is initialized with `undefined` to allow for proper type checking and to ensure
 * that the context is provided by a parent component.
 * 
 * @type {React.Context<AuthContextProps<any, any>>}
 */
const AuthContext: React.Context<AuthContextProps<any, any>> =
  React.createContext<AuthContextProps<any, any>>({
    state: {
      authenticated: false
    },
    onLogin: async (loginForm: any) => { console.log('loginForm: ', loginForm)},
    onAuthentication: async () => {}
  });

/**
 * Default export of the AuthContext.
 * 
 * This context provides authentication state and functions to manage authentication.
 * It should be used with a corresponding provider to supply the context value.
 * 
 * @type {React.Context<AuthContextProps<any, any>>}
 */
export default AuthContext;

/**
 * This hook provides a convenient way to access the `AuthContext` within your components.
 * It uses React's `useContext` hook to retrieve the current context value.
 *
 * @returns {AuthContextProps<TLoginRequest, TRegisterForm>} The current value of the `AuthContext`.
 */
export function useAuthContext<TLoginRequest, TRegisterForm>(): AuthContextProps<TLoginRequest, TRegisterForm> {
  const value = React.useContext(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <AuthProvider />');
  }

  return value;
}