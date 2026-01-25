import { Slot } from 'expo-router';
import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { Alert, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useAuthContext } from '@/contexts/AuthContext/AuthContext';

export default function BiometricProtectedLayout() {
  const { state, onAuthentication } = useAuthContext();

  useEffect(() => {
    if (!state.authenticated) {
      onAuthentication();
    }
  }, []);

  if (!state.authenticated) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontFamily: 'Inter', fontSize: 20, marginBottom: 20 }}>
          Use FaceId to Unlock
        </Text>
        <FontAwesome5
          onPress={onAuthentication}
          name="fingerprint"
          size={75}
          color="red"
        />
      </View>
    );
  }

  return <Slot />;
}