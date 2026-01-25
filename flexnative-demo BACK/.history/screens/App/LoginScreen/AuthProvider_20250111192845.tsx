import React from "react";
import * as LocalAuthentication from "expo-local-authentication";

import AuthContext from "./AuthContext";
import { ActonProps, AuthContextProps } from "./props";


const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const authenticate = async (): Promise<ActonProps> => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();

    if (!hasHardware) {
      throw new Error("Not supported. See: https://docs.expo.dev/versions/latest/sdk/local-authentication/#localauthenticationhashardwareasync");
    }

    const res = await LocalAuthentication.authenticateAsync();
    if (res.success) {
      setIsUnlocked(true);
    }
  };

  const values: AuthContextProps = {
    sta
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;