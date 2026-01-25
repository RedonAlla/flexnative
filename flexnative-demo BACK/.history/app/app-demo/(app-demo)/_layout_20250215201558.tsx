import { useEffect } from 'react';
import { Redirect, Slot, useRouter } from 'expo-router';

import { useAuthContext } from '@flexnative/authentication';


export default function AppLayout() {
  const { state } = useAuthContext();

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