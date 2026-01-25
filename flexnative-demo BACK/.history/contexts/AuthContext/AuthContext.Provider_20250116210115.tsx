import React from "react";
import { Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

import AuthContext from "./AuthContext";
import { AuthProviderProps, AuthStateProps } from "./AuthContext.props";


const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = React.useState<AuthStateProps>({
    authenticated: false
  });

  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();

    if (!hasHardware) {
      Alert.alert("Error", "No biometric data is enrolled on this device.");
      return;
    }

    const enrolled = await LocalAuthentication.isEnrolledAsync();

    if (!enrolled) {
      Alert.alert("Error", "No biometric data is enrolled on this device.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with fingerprint",
      fallbackLabel: "Use passcode",
    });

    if (result.success) {
      //setAuthenticatedUser(user);
      Alert.alert("Success", `Welcome back, user.username user.role`);
    } else {
      Alert.alert("Error", "Authentication failed.");
    }
  };

  return (
    <AuthContext.Provider value={{ state, onAuthentication: authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;