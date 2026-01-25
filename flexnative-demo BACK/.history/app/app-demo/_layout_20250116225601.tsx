import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { Redirect } from 'expo-router';

import { useAuthContext } from '@/contexts/AuthContext/AuthContext';

export default function BiometricProtectedLayout() {
  const { state, onAuthentication } = useAuthContext();

  useEffect(() => {
    if (!state.authenticated) {
      onAuthentication();
    }
  }, []);

  // if (!state.authenticated) {
  //   return <Redirect href="/app-demo/login" />;
  // }

  return <Slot />;
}