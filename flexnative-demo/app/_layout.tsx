import { createIconSetFromIcoMoon, IconProvider } from "@flexnative/icons";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";

import ThemeProvider from "@/contexts/theme-provider";
import iconsConfig from "../assets/fonts/icons-config.json";

SplashScreen.preventAutoHideAsync();

let customFonts: Record<string, any> = {
  Icons: require("../assets/fonts/Icons.ttf"),
};

const icons = createIconSetFromIcoMoon(iconsConfig);

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts(customFonts);

  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <IconProvider icons={icons}>
        <Slot />
      </IconProvider>
    </ThemeProvider>
  );
}
