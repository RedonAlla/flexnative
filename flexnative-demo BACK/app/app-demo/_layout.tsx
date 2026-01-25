import { Slot } from 'expo-router';

import AuthProvider from '@/contexts/AuthContext/AuthContext.Provider';


export default function Root() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}