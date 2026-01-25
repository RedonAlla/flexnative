import { useEffect } from 'react';
import { Slot } from 'expo-router';

import AuthProvider from '@/contexts/AuthContext/AuthContext.Provider';


export default function AppLayout() {
  // const router = useRouter();
  // const { state, onAuthentication } = useAuthContext();

  useEffect(() => {
    // if (!state.authenticated) {
    //   //router.replace('/app-demo/login');
    //   // onAuthentication();
    // }
  }, []);

  //return <Redirect href="/app-demo/login" />;

  // if (!state.authenticated) {
  //   return <Redirect href="/app-demo/login" />;
  // }

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}