import { useEffect } from 'react';
import { Redirect, Slot, useRouter } from 'expo-router';

import AuthProvider from '@/contexts/AuthContext/AuthContext.Provider';
import { useAuthContext } from '@/contexts/AuthContext/AuthContext';


export default function Root() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}