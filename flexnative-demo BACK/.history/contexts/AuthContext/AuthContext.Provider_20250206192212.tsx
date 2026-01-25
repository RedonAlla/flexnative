import React from "react";
import { Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

import AuthContext from "./AuthContext";
import { AuthProviderProps, AuthStateProps, LoginProps } from "./AuthContext.props";
import { LoginUser, UserRole } from "@/core/models/LoginUser";
import { login } from "@/services/auth.service";


const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = React.useState<AuthStateProps>({
    authenticated: false
  });

  // const handleAuthenticate = async () => {
  //   const hasHardware = await LocalAuthentication.hasHardwareAsync();

  //   if (!hasHardware) {
  //     Alert.alert("Error", "No biometric data is enrolled on this device.");
  //     return;
  //   }

  //   const enrolled = await LocalAuthentication.isEnrolledAsync();

  //   if (!enrolled) {
  //     Alert.alert("Error", "No biometric data is enrolled on this device.");
  //     return;
  //   }

  //   const result = await LocalAuthentication.authenticateAsync({
  //     promptMessage: "Authenticate with fingerprint",
  //     fallbackLabel: "Use passcode",
  //   });

  //   if (result.success) {
  //     setState({
  //       user: {
  //         name: 'Redon',
  //         lastName: 'Alla',
  //         email: 'redon.alla@gmail.com',
  //         username: 'RedonAlla',
  //         role: UserRole.SuperAdmin
  //       },
  //       authenticated: true
  //     });
  //   } else {
  //     Alert.alert("Error", "Authentication failed.");
  //   }
  // };

  const handleLogin = async (loginForm: LoginProps)=> {
    console.log('loginForm: ', loginForm);
    const res = await login();
    console.log('LoginUser: ', res);
    setState({
      user: {
        name: 'Redon',
        lastName: 'Alla',
        email: 'redon.alla@gmail.com',
        username: 'RedonAlla',
        role: UserRole.SuperAdmin
      },
      authenticated: true
    });
    return true;
  } 

  return (
    <AuthContext.Provider value={{
      state,
      onAuthentication: async () => { },
      onLogin:  async () => { },
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;