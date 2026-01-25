/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-10 22:28:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-10 22:59:36
 * @ Description: AuthContext is a React context that provides authentication-related data and methods to its consumers. It allows components within the application to access and manage authentication state, such as the current user, login status.
 */

import React from 'react';
import { AuthContextProps } from './AuthContext.props';


/**
 * React context for authentication.
 * 
 * This context provides authentication state and functions to manage authentication.
 * It is initialized with `undefined` to allow for proper type checking and to ensure
 * that the context is provided by a parent component.
 * 
 * @type {React.Context<AuthContextProps<any> | undefined>}
 */
const AuthContext: React.Context<AuthContextProps<any> | undefined> =
  React.createContext<AuthContextProps<any> | undefined>(undefined);

/**
 * Default export of the AuthContext.
 * 
 * This context provides authentication state and functions to manage authentication.
 * It should be used with a corresponding provider to supply the context value.
 * 
 * @type {React.Context<AuthContextProps<any> | undefined>}
 */
export default AuthContext;

/**
 * This hook provides a convenient way to access the `AuthContext` within your components.
 * It uses React's `useContext` hook to retrieve the current context value.
 *
 * @returns {AuthContextProps<TLoginRequest>} The current value of the `AuthContext`.
 */
export const useAuthContext = <TLoginRequest,>(): AuthContextProps<TLoginRequest> | undefined =>
  React.useContext(AuthContext);