import React from "react";
import { Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

import AuthContext from "./AuthContext";
import { AuthStateProps, LoginProps } from "./AuthContext.props";
import { LoginUser, UserRole } from "@/core/models/LoginUser";
import { login } from "@/services/auth.service";
import { ContentType, Endpoints } from "@/core/constants/HttpCalls";


const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = React.useState<AuthStateProps>({
    authenticated: false
  });

  const handleAuthenticate = async () => {
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
    } else {
      Alert.alert("Error", "Authentication failed.");
    }
  };

  const handleLogin = async (loginForm: LoginProps) => {
    await login(loginForm).then(token => {
      setState({
        user: jwtDecode<LoginUser>(token),
        token: token,
        authenticated: true
      });

      axios.defaults.baseURL = Endpoints.baseUri;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.post['Content-Type'] = ContentType.ApplicationJson;
    });
  }

  const handleLogout = async () => {
    axios.defaults.headers.common['Authorization'] = '';

    setState({
      user: undefined,
      token: '',
      authenticated: false
    });
  }

  return (
    <AuthContext.Provider value={{
      state,
      onLogin: handleLogin,
      onLogout: handleLogout,
      onAuthentication: handleAuthenticate,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;