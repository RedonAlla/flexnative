import { Redirect, Slot } from 'expo-router';

import { useAuthContext } from '@flexnative/authentication';


export default function AppLayout() {
  const { state } = useAuthContext();

  if (!state.authenticated) {
    return <Redirect href="/app-demo/login" />;
  }

  return (
    <Slot />
  );
}