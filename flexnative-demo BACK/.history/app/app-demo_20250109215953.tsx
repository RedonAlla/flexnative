//export { default } from '@/screens/App/LoginScreen'; 

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';


const FingerprintLogin = () => {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const fetchEmail = async () => {
      const storedEmail = await SecureStore.getItemAsync('userEmail');
      console.log('storedEmail: ', storedEmail);
      setEmail(storedEmail);
    };
    fetchEmail();
  }, []);

  const handleBiometricAuth = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      Alert.alert('Error', 'Your device does not support biometric authentication.');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Use password',
    });

    if (result.success && email) {
      Alert.alert('Success', `Welcome back! Your email: ${email}`);
      // Fetch user role or navigate based on email
    } else {
      Alert.alert('Error', 'Authentication failed.');
    }
  };

  return (
    <View>
      <Button title="Login with Fingerprint" onPress={handleBiometricAuth} />
    </View>
  );
};

export default FingerprintLogin;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});