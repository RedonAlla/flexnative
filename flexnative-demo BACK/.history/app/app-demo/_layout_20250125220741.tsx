import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { useRouter, Redirect } from 'expo-router';

import { useAuthContext } from '@/contexts/AuthContext/AuthContext';

export default function BiometricProtectedLayout() {
  const router = useRouter();
  const { state, onAuthentication } = useAuthContext();

  useEffect(() => {
    if (!state.authenticated) {
      console.log('authenticated: ', state.authenticated)
      router.replace('/profile/settings');
      //onAuthentication();
    }
  }, []);

  //return <Redirect href="/app-demo/login" />;

  // if (!state.authenticated) {
  //   return <Redirect href="/app-demo/login" />;
  // }

  return <Slot />;
}