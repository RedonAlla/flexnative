import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const authenticate = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      Alert.alert("Error", "Your device does not support biometric authentication.");
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
      // Simulate a user lookup
      //const user = users[0]; // Replace with logic to identify the user
      //setAuthenticatedUser(user);
      Alert.alert("Success", `Welcome back, user.username user.role`);
    } else {
      Alert.alert("Error", "Authentication failed.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fingerprint Authentication</Text>
      {authenticatedUser ? (
        <Text style={styles.welcomeText}>
          Welcome
        </Text>
      ) : (
        <Button title="Login with Fingerprint" onPress={authenticate} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;
