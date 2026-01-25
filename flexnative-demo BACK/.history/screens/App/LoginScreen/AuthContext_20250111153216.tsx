/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-10 22:28:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-11 15:32:16
 * @ Description: AuthContext is a React context that provides authentication-related data and methods to its consumers. It allows components within the application to access and manage authentication state, such as the current user, login status, and authentication tokens.
 */

import React from 'react';

import { AuthContextProps } from './props';


/**
 * Context for authentication state and actions.
 * 
 * @typedef {Object} AuthContextProps
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @property {() => Promise<void>} onLogout - Function to handle user logout.
 * 
 * @constant
 * @type {React.Context<AuthContextProps>}
 * @default
 * @property {boolean} isAuthenticated - Default value is false.
 * @property {() => Promise<void>} onLogout - Default is an empty async function.
 */
const AuthContext = React.createContext<AuthContextProps>({
  isAuthenticated: false,
  onLogout: async () => {},
});


/**
 * AuthContext is a React context that provides authentication-related data and methods to its consumers.
 * It allows components within the application to access and manage
 * authentication state, such as the current user, login status, and authentication tokens.
 *
 * @example
 * ```tsx
 * import React, { useContext } from 'react';
 * import AuthContext from './AuthContext';
 *
 * const MyComponent = () => {
 *   const authContext = useContext(AuthContext);
 *
 *   return (
 *     <div>
 *       {authContext.isAuthenticated ? 'Logged In' : 'Logged Out'}
 *     </div>
 *   );
 * };
 * ```
 */
export default AuthContext;

/**
 * Custom hook to access the authentication context.
 *
 * This hook provides a convenient way to access the `AuthContext` within your components.
 * It uses React's `useContext` hook to retrieve the current context value.
 *
 * @returns {AuthContextType} The current value of the `AuthContext`.
 */
export const useAuthContext = () => React.useContext(AuthContext);