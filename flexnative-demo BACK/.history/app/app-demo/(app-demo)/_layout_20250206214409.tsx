import { useEffect } from 'react';
import { Redirect, Slot, useRouter } from 'expo-router';

import { useAuthContext } from '@/contexts/AuthContext/AuthContext';


export default function AppLayout() {
  const router = useRouter();
  const { state, onAuthentication } = useAuthContext();

  // useEffect(() => {
  //   if (!state.authenticated) {
  //     router.replace('/app-demo/login');
  //     onAuthentication();
  //   }
  // }, []);

  // return <Redirect href="/app-demo/login" />;

  if (!state.authenticated) {
    return <Redirect href="/app-demo/login" />;
  }

  return (
    <Slot />
  );
}