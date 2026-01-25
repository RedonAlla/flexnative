import React from "react";
import { Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import axios from "axios";
import { AuthContext, useAuthState } from "@flexnative/authentication";

import { LoginProps } from "./AuthContext.props";
import { login } from "@/services/auth.service";
import { ContentType } from "@/core/constants/HttpCalls";
import { isTokenExpired } from "@/utilities/token.utilities";


const SESSION_KEY = 'token';

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  //user: jwtDecode<LoginUser>(token),
  const [[isLoading, session], setSession] = useAuthState(SESSION_KEY);

  const isSessionExpired = isTokenExpired(session!);

  React.useEffect(() => {
    if(isSessionExpired)
      setSession(null);
    
  }, [session]);

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
      setSession(null);
    } else {
      Alert.alert("Error", "Authentication failed.");
    }
  };

  const handleLogin = async (loginForm: LoginProps) => {
    await login(loginForm).then(token => {
      setSession(token);

      //axios.defaults.baseURL = Endpoints.baseUri;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.post['Content-Type'] = ContentType.ApplicationJson;
    });
  }

  const handleLogout = async () => {
    setSession(null);
    axios.defaults.headers.common['Authorization'] = null;
  }

  return (
    <AuthContext.Provider value={{
      state: {
        session: session!,
        authenticated: session !== null
      },
      onLogin: handleLogin,
      onLogout: handleLogout,
      onAuthentication: handleAuthenticate,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;