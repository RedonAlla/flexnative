/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-27 20:34:52
 * @ Description: All props for ThemeContext and ThemeProvider.
 */

import { ColorSchemeName, ColorValue } from 'react-native';

/** Border radius used by components. */
export type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'full' | number;

/** Border width used by components. */
export type BorderWidth = 'none' | 'hairline' | 'thin' | 'base' | 'thick' | number;

/** Sizes used by components */
export type Sizes = 'small' | 'medium' | 'large' | number;

/** Font sizes used by components */
export type FontSize = 'small' | 'default' | 'medium' | 'large' | number;

export type Color = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | ColorValue;

export interface BaseTheme<TColors> {
  /**
   * Default theme colors.
   * You can add whatever values you want to the theme, and they will be merged with the default.
  */
  colors: BaseColors & TColors;

  /** Theme colorScheme {@link ColorSchemeName} */
  scheme?: ColorSchemeName;

  /** Border width used by components. */
  borderWidth: Record<BorderWidth, number>;

  /** Border width used by components. */
  borderRadius: Record<BorderRadius, number>;

  /** Font size used by components. */
  fontSize: Record<FontSize, number>;

  metrics: {
    /** Base size used in fontSize.
     * @default 16 
     */
    basSize: number;

    /**
     * Opacity style property value for disabled components.
     * @default 0.4
     */
    disabledOpacity: number;

    /**
     * Color opacity for components with 'ghost' appearance.
     * @default '40'
     */
    ghostOpacity: string;

    /**
     * Color opacity for components with 'ghost' appearance in active sate.
     * @default '73'
     */
    ghostActiveOpacity: string;

    /** A constant multiplayer for components vertical padding.
     * @default 0.6
     */
    verticalMultiplier: number;

    /**
     * A constant multiplayer for components horizontal padding.
     * @default 1
     */
    horizontalMultiplier: number;
  }
}

export interface BaseColors {
  white: ColorValue;
  black: ColorValue;
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
  overlay: ColorValue;
}

export interface ThemeProviderProps<TColors> extends BaseTheme<TColors> {
  children: React.ReactNode;
};

export interface ThemeContextProps<TColors> extends BaseTheme<TColors> {
  setTheme?: (theme: BaseTheme<TColors>) => void;
  setColorScheme?: (scheme: ColorSchemeName) => void;
}