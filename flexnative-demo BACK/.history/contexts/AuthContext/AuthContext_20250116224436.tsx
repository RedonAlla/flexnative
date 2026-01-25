/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-10 22:28:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-16 22:44:36
 * @ Description: AuthContext is a React context that provides authentication-related data and methods to its consumers. It allows components within the application to access and manage authentication state, such as the current user, login status.
 */

import React from 'react';
import { AuthContextProps } from './AuthContext.props';

const AuthContext = React.createContext<AuthContextProps>({
  state: {
    user: undefined,
    authenticated: false
  },
  onAuthentication: async () => { },
});

export default AuthContext;

/**
 * Custom hook to access the authentication context.
 *
 * This hook provides a convenient way to access the `AuthContext` within your components.
 * It uses React's `useContext` hook to retrieve the current context value.
 *
 * @returns {AuthContextProps} The current value of the `AuthContext`.
 */
export const useAuthContext = (): AuthContextProps => React.useContext(AuthContext);