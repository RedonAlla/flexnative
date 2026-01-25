import { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useRouter, Redirect } from 'expo-router';
import {
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_400Regular_Italic,
  Roboto_500Medium_Italic
} from '@expo-google-fonts/roboto';

import { useAuthContext } from '@/contexts/AuthContext/AuthContext';
import ThemeProvider from '@/contexts/theme/ThemeProvider';
import AuthProvider from '@/contexts/AuthContext/AuthContext.Provider';

/**
 * Prevent splash screen from auto-hiding during font loading
 */
SplashScreen.preventAutoHideAsync();

/**
 * Define custom fonts in a typesafe manner for better maintainability
 */
let customFonts: Record<string, any> = {
  'Bold': Roboto_700Bold,
  'Regular': Roboto_400Regular,
  'Medium': Roboto_500Medium,
  'Italic': Roboto_400Regular_Italic,
  'ItalicSemiBold': Roboto_500Medium_Italic,
  'Icons': require('../../assets/fonts/icons.ttf')
};


export default function AppLayout() {
  const router = useRouter();
  const [fontsLoaded, fontsError] = useFonts(customFonts);
  const { state, onAuthentication } = useAuthContext();

  useEffect(() => {
    if (!state.authenticated) {
      router.replace('/app-demo/login');
      onAuthentication();
    }
  }, []);

  /**
     * Handle font loading errors using an effect
     */
    useEffect(() => {
      if (fontsError)
        throw fontsError;
      
    }, [fontsError]);
  
    /**
     * Hide the splash screen when fonts are loaded
     */
    useEffect(() => {
      if (fontsLoaded)
        SplashScreen.hideAsync();
      
    }, [fontsLoaded]);

  //return <Redirect href="/app-demo/login" />;

  // if (!state.authenticated) {
  //   return <Redirect href="/app-demo/login" />;
  // }

  /**
   * Return null while waiting for fonts to load to prevent rendering issues
   */
  if (!fontsLoaded)
    return null;

  return (
    <ThemeProvider>
      <AuthProvider>
        <StatusBar style="auto" />
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}