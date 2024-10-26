import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import FontAwesome from '@expo/vector-icons/FontAwesome';//TODO Remove this

import { Roboto_700Bold, Roboto_400Regular, Roboto_500Medium, Roboto_400Regular_Italic, Roboto_500Medium_Italic } from '@expo-google-fonts/roboto';

import ThemeProvider from '@/providers/theme-provider';


let customFonts = {
  'Bold': Roboto_700Bold,
  'Regular': Roboto_400Regular,
  'Medium': Roboto_500Medium,
  'Italic': Roboto_400Regular_Italic,
  'ItalicSemiBold': Roboto_500Medium_Italic,
  'Icons': require('../assets/fonts/icons.ttf'),
  ...FontAwesome.font, //TODO Remove this
  // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), //TODO Remove this
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts(customFonts);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
