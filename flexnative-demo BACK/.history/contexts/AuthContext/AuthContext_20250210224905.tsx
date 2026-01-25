/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-10 22:28:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-10 22:49:05
 * @ Description: AuthContext is a React context that provides authentication-related data and methods to its consumers. It allows components within the application to access and manage authentication state, such as the current user, login status.
 */

import React from 'react';
import { AuthContextProps } from './AuthContext.props';

const AuthContext = React.createContext<AuthContextProps<any> | undefined>(undefined);

export default AuthContext;


export const useAuthContext = (): AuthContextProps<any> | undefined =>
  React.useContext(AuthContext);