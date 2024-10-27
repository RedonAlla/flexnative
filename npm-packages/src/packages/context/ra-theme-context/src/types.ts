/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 13:07:24
 * @ Description: All props for ThemeContext and ThemeProvider.
 */

import { ColorSchemeName, ColorValue } from 'react-native';

export interface BaseTheme {
  primary: ColorValue;
  info: ColorValue;
  success: ColorValue;
  warning: ColorValue;
  error: ColorValue;
  dark: ColorValue;
  secondary: ColorValue;
  light: ColorValue;
  background: ColorValue;
  default: ColorValue;
  card: ColorValue;
  text: ColorValue;
  border: ColorValue;
  placeholder: ColorValue;
}

export interface ThemeProviderProps<TColors> {
  children: React.ReactNode;
  colors?: BaseTheme & TColors;
};

export interface ThemeContextProps<TColors> {
  colors: BaseTheme & TColors;
  colorScheme?: ColorSchemeName;
  setTheme?: (theme: BaseTheme & TColors) => void;
  setColorScheme?: (colorScheme: ColorSchemeName) => void;
}