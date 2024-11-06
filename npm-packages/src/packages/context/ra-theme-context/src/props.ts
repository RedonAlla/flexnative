/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-06 23:13:06
 * @ Description: All props for ThemeContext and ThemeProvider.
 */

import { ColorSchemeName, ColorValue } from 'react-native';

/**
 * Represents the possible values for border radius.
 * 
 * @typedef {('none' | 'small' | 'medium' | 'large' | 'full' | number)} BorderRadius
 * 
 * @property {'none'} none - No border radius.
 * @property {'small'} small - Small border radius.
 * @property {'medium'} medium - Medium border radius.
 * @property {'large'} large - Large border radius.
 * @property {'full'} full - Full border radius, typically a circle.
 * @property {number} number - Custom border radius specified as a number.
 */
export type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'full' | number;

/**
 * Represents the possible values for border width.
 * 
 * @typedef {('none' | 'hairline' | 'thin' | 'base' | 'thick' | number)} BorderWidth
 * 
 * @property {'none'} none - No border.
 * @property {'hairline'} hairline - A very thin border.
 * @property {'thin'} thin - A thin border.
 * @property {'base'} base - A standard border width.
 * @property {'thick'} thick - A thick border.
 * @property {number} number - A custom border width specified as a number.
 */
export type BorderWidth = 'none' | 'hairline' | 'thin' | 'base' | 'thick' | number;

/**
 * Represents the possible sizes for a component.
 * 
 * @typedef {('small' | 'medium' | 'large' | number)} Sizes
 * 
 * @property {'small'} small - Represents a small size.
 * @property {'medium'} medium - Represents a medium size.
 * @property {'large'} large - Represents a large size.
 * @property {number} number - Represents a custom size specified as a number.
 */
export type Sizes = 'small' | 'medium' | 'large' | number;

/**
 * Represents the possible font sizes that can be used in the application.
 * 
 * @typedef {('small' | 'default' | 'medium' | 'large' | number)} FontSize
 * 
 * @property {'small'} small - Represents a small font size.
 * @property {'default'} default - Represents the default font size.
 * @property {'medium'} medium - Represents a medium font size.
 * @property {'large'} large - Represents a large font size.
 * @property {number} number - Represents a custom font size specified as a number.
 */
export type FontSize = 'small' | 'default' | 'medium' | 'large' | number;

/**
 * Represents the possible color options for a component.
 * 
 * The available color options are:
 * - 'default': The default color.
 * - 'primary': The primary color.
 * - 'secondary': The secondary color.
 * - 'info': The informational color.
 * - 'success': The success color.
 * - 'warning': The warning color.
 * - 'error': The error color.
 * - 'dark': The dark color.
 * - 'light': The light color.
 * - `ColorValue`: A custom color value.
 */
export type Color = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | ColorValue;

/**
 * Interface representing the base theme structure.
 * 
 * @template TColors - Custom colors that extend the base colors.
 * 
 * @property {BaseColors & TColors} colors - Default theme colors. You can add whatever values you want to the theme, and they will be merged with the default.
 * @property {ColorSchemeName} [scheme] - Theme color scheme.
 * @property {Record<BorderWidth, number>} borderWidth - Border width used by components.
 * @property {Record<BorderRadius, number>} borderRadius - Border radius used by components.
 * @property {Record<FontSize, number>} fontSize - Font size used by components.
 * @property {Object} metrics - Base constants values used by components.
 * @property {number} metrics.baseSize - Base size used in fontSize. Default is 16.
 * @property {number} metrics.disabledOpacity - Opacity style property value for disabled components. Default is 0.4.
 * @property {string} metrics.ghostOpacity - Color opacity for components with 'ghost' appearance. Default is '40'.
 * @property {string} metrics.ghostActiveOpacity - Color opacity for components with 'ghost' appearance in active state. Default is '73'.
 * @property {number} metrics.verticalMultiplier - A constant multiplier for components vertical padding. Default is 0.6.
 * @property {number} metrics.horizontalMultiplier - A constant multiplier for components horizontal padding. Default is 1.
 */
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

  /** Base constants values used by components. */
  metrics: {
    /** Base size used in fontSize.
     * @default 16 
     */
    baseSize: number;

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

/**
 * Interface representing the base colors used in the theme.
 * 
 * @interface BaseColors
 * 
 * @property {ColorValue} white - The color value for white.
 * @property {ColorValue} black - The color value for black.
 * @property {ColorValue} primary - The primary color value.
 * @property {ColorValue} info - The color value for informational messages.
 * @property {ColorValue} success - The color value for success messages.
 * @property {ColorValue} warning - The color value for warning messages.
 * @property {ColorValue} error - The color value for error messages.
 * @property {ColorValue} dark - The color value for dark themes.
 * @property {ColorValue} secondary - The secondary color value.
 * @property {ColorValue} light - The color value for light themes.
 * @property {ColorValue} background - The background color value.
 * @property {ColorValue} default - The default color value.
 * @property {ColorValue} card - The color value for cards.
 * @property {ColorValue} text - The color value for text.
 * @property {ColorValue} border - The color value for borders.
 * @property {ColorValue} placeholder - The color value for placeholders.
 * @property {ColorValue} overlay - The color value for overlays.
 */
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

/**
 * Props for the ThemeProvider component.
 *
 * @template TColors - The type representing the theme colors.
 * @extends BaseTheme<TColors>
 *
 * @property {React.ReactNode} children - The child components to be rendered within the ThemeProvider.
 */
export interface ThemeProviderProps<TColors> extends BaseTheme<TColors> {
  children: React.ReactNode;
};

/**
 * Interface representing the properties for the Theme Context.
 *
 * @template TColors - The type representing the colors in the theme.
 *
 * @extends BaseTheme<TColors>
 *
 * @property {function} [setTheme] - Optional method to implement for changing the theme.
 * @property {function} [setColorScheme] - Optional method to implement for changing the color scheme.
 */
export interface ThemeContextProps<TColors> extends BaseTheme<TColors> {
  /** Optional method to change the theme. */
  setTheme?: (theme: BaseTheme<TColors>) => void;

  /** Optional method to change color scheme. */
  setColorScheme?: (scheme: ColorSchemeName) => void;
}