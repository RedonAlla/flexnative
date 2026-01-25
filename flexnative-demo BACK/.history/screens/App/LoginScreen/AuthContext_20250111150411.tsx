import React from 'react';

import { AuthContextProps } from './props';

const AuthContext = React.createContext<AuthContextProps>({
  isAuthenticated: false,
  onLogout: async () => {},
});