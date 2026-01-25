import { Appearance } from "react-native";
import { darkBlueTheme, darkRedTheme, lightBlueTheme, lightRedTheme } from "./colors";
import { ThemeStoreProps } from "./props";

//Key to access the theme in storage
//You can change it to whatever you want
//but make sure to use the same key in your ThemeProvider
export const APP_THEME = 'app-theme';

export const themes = {
  lightRedTheme,
  lightBlueTheme,
  darkRedTheme,
  darkBlueTheme
};

export const defaultThemeStored: ThemeStoreProps = { 
  themeName: 'RedTheme',
  colorScheme: Appearance.getColorScheme()
};
