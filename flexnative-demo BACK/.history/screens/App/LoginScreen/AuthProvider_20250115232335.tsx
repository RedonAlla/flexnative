import React from "react";
import { Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

import AuthContext from "./AuthContext";
import { AuthProviderProps, AuthContextProps, AuthStateProps } from "./props";

//TODO make messages configurable.


export default class BaseAuthProvider<TUser = unknown> extends React.PureComponent<AuthProviderProps, AuthStateProps<TUser>> {

  authenticate = async () => {
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

    this.onAuthenticate();
  
    if (result.success) {
      //setAuthenticatedUser(user);
      Alert.alert("Success", `Welcome back, user.username user.role`);
    } else {
      Alert.alert("Error", "Authentication failed.");
    }
  };

  /**
  * This method it is called on `componentDidMount`.
    You can store your themes in a database, local storage, or any other storage.
    and this method it is used to write the logic for reading the theme from your storage and render on your app.
    @see Example <https://redonalla.github.io/flexnative/docs/theme/examples>
  * @return Promise of type void {Promise<void>}
  */
  onAuthenticate() {
    console.log('Hello from BaseAuthProvider....')
  }

  render(): React.ReactNode {
    return (
      <AuthContext.Provider value={{
        state: this.state,
        onLocalAuthentication: this.authenticate
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
};