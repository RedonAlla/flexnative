import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { useRouter, Redirect } from 'expo-router';
import {
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_400Regular_Italic,
  Roboto_500Medium_Italic
} from '@expo-google-fonts/roboto';

import { useAuthContext } from '@/contexts/AuthContext/AuthContext';

/**
 * Define custom fonts in a typesafe manner for better maintainability
 */
let customFonts: Record<string, any> = {
  'Bold': Roboto_700Bold,
  'Regular': Roboto_400Regular,
  'Medium': Roboto_500Medium,
  'Italic': Roboto_400Regular_Italic,
  'ItalicSemiBold': Roboto_500Medium_Italic,
  'Icons': require('../assets/fonts/icons.ttf')
};


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