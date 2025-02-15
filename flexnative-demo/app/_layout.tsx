/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-09 15:27:55
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-09 23:34:26
 * @ Description: Layout page for Home page of Demo App.
 */

import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen, Slot } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import ThemeProvider from '@/contexts/theme/ThemeProvider';

import {
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_400Regular_Italic,
  Roboto_500Medium_Italic
} from '@expo-google-fonts/roboto';


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

/* #region Fake HTTP Call Server */
import { makeServer } from '@/services/fake.server';

// if (process.env.NODE_ENV === "development") {
  if ((window as any).server) {
    (window as any).server.shutdown();
  }
  (window as any).server = makeServer();
// }
/* #endregion */

/**
 * Prevent splash screen from auto-hiding during font loading
 */
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontsError] = useFonts(customFonts);

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

  /**
   * Return null while waiting for fonts to load to prevent rendering issues
   */
  if (!fontsLoaded)
    return null;

  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}