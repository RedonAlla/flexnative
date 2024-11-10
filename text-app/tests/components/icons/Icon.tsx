
import Icon from '@flexnative/icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

let customFonts = {
  'Icons': require('../../../assets/fonts/icons.ttf'),
};

SplashScreen.preventAutoHideAsync();

export default function TestIcon() {
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
    <Icon name="check" size={128} color="red" />
  );
}
