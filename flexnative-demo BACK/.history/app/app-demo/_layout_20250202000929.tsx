import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { useRouter, Redirect } from 'expo-router';

import { useAuthContext } from '@/contexts/AuthContext/AuthContext';

export default function BiometricProtectedLayout() {
  const router = useRouter();
  const { state, onAuthentication } = useAuthContext();

  useEffect(() => {
    if (!state.authenticated) {
      router.replace('/app-demo/login');
      onAuthentication();
    }
  }, []);

  //return <Redirect href="/app-demo/login" />;

  // if (!state.authenticated) {
  //   return <Redirect href="/app-demo/login" />;
  // }

  return <Slot />;
}