/**
 * @file props.ts
 * @author Redon Alla <redon.alla@gmail.com>
 * @createDate 2023-06-04 21:29:02
 * @modifyDate 2025-03-02 17:37:04
 * @description This file defines the types and interfaces for the ThemeContext and ThemeProvider components.
 *              It includes type definitions for colors, border radius, border width, font sizes, and the overall
 *              structure of the theme object. It also provides the interfaces for the props of the ThemeProvider
 *              and ThemeContext components.
 */

import { ColorSchemeName, ColorValue } from 'react-native';

/**
 * Represents the possible border radius values.
 * 
 * - `none`: No border radius (0).
 * - `small`: A small border radius.
 * - `medium`: A medium border radius.
 * - `large`: A large border radius.
 * - `full`: A fully rounded border radius.
 * - `number`: A custom numeric border radius.
 * @example
 * ```typescript
 * const borderRadius: BorderRadius = 'medium'; // Using a predefined value
 * const customRadius: BorderRadius = 10; // Using a custom number
 * ```
 */
export type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'full' | number;

/**
 * Represents the possible border width values.
 *
 * @property {string} none - No border width (0).
 * @property {string} hairline - A hairline border width, typically the thinnest possible line on the device.
 * @property {string} thin - A thin border width.
 * @property {string} base - A base border width.
 * @property {string} thick - A thick border width.
 * @property {number} number - A custom numeric border width.
 * @example
 * ```typescript
 * const borderWidth: BorderWidth = 'thin'; // Using a predefined value
 * const customWidth: BorderWidth = 2; // Using a custom number
 * ```
 */
export type BorderWidth = 'none' | 'hairline' | 'thin' | 'base' | 'thick' | number;

/**
 * Represents common size options.
 * 
 * - `small`: A small size.
 * - `medium`: A medium size.
 * - `large`: A large size.
 * - `number`: A custom numeric size.
 * @example
 * ```typescript
 * const size: Sizes = 'medium'; // Using a predefined value
 * const customSize: Sizes = 20; // Using a custom number
 * ```
 */
export type Sizes = 'small' | 'medium' | 'large' | number;

/**
 * Represents the possible font size options.
 * 
 * - `small`: A small font size.
 * - `default`: The default font size.
 * - `medium`: A medium font size.
 * - `large`: A large font size.
 * - `number`: A custom numeric font size.
 * @example
 * ```typescript
 * const fontSize: FontSize = 'lg'; // Using a predefined value
 * const customFontSize: FontSize = 15; // Using a custom number
 * ```
 */
export type FontSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number;

/**
 * Represents the possible color options.
 * 
 * - `default`: The default color.
 * - `primary`: The primary color.
 * - `secondary`: The secondary color.
 * - `info`: The info color.
 * - `success`: The success color.
 * - `warning`: The warning color.
 * - `error`: The error color.
 * - `dark`: The dark color.
 * - `light`: The light color.
 * - `ColorValue`: Any valid React Native ColorValue.
 * @example
 * ```typescript
 * const color: Color = 'primary'; // Using a predefined semantic color
 * const hexColor: Color = '#FF0000'; // Using a hex color value
 * const rgbaColor: Color = 'rgba(0, 0, 0, 0.5)'; // Using an RGBA color value
 * ```
 */
export type Color = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | ColorValue;

/**
 * Represents the possible spacing values used for margins, padding, etc.
 *
 * @property {string} 'none' - No spacing.
 * @property {string} 'xxxs' - Spacing of 2 units.
 * @property {string} 'xxs' - Spacing of 4 units.
 * @property {string} 'xs' - Spacing of 6 units.
 * @property {string} 'sm' - Spacing of 8 units.
 * @property {string} 'md' - Spacing of 12 units.
 * @property {string} 'default' - Spacing of 16 units.
 * @property {string} 'lg' - Spacing of 18 units.
 * @property {string} 'xl' - Spacing of 24 units.
 * @property {string} 'xxl' - Spacing of 32 units.
 * @property {string} 'xxxl' - Spacing of 36 units.
 * @property {number} number - A custom numeric spacing value.
 * @example
 * ```typescript
 * const spacing: Spaces = 'md'; // Using a predefined value
 * const customSpacing: Spaces = 10; // Using a custom number
 * ```
 */
export type Spaces = 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'default' | 'lg' | 'xl' | 'xxl' | 'xxxl' | number; 


/**
 * Defines the structure of a theme object.
 * @template TColors - Template to extend `colors` with ore colors.
 * 
 * @property {BaseColors & TColors} colors - Default theme colors. You can extend the `BaseColors` with your own color properties.
 * @property {ColorSchemeName} [scheme] - The color scheme (e.g., 'light' or 'dark').
 * @property {Borders} borders - The border configurations for the theme.
 * @property {Record<FontSize, number>} fontSize - Font size values used by components, where the keys are from the `FontSize` type.
 * @property {boolean} isDark - Indicates whether the current theme is a dark theme.
 * @property {Record<Spaces, number>} spaces - Represents the possible spacing values used for margins, padding, etc.
 * @example
 * ```typescript
 * interface MyCustomColors {
 *   brand: ColorValue;
 *   brandHover: ColorValue;
 * }
 * const myTheme: BaseTheme<MyCustomColors> = {
 *   colors: {
 *     ...defaultColors(),
 *     brand: '#00FF00',
 *     brandHover: '#00CC00',
 *   },
 *   scheme: 'light',
 *   borders: { width: { base: 1}, radius: { small: 2 } },
 *   fontSize: FONT_SIZE,
 *   spaces: SPACING,
 *   isDark: false,
 * };
 * ```
 */
export interface BaseTheme<TColors> {
  /**
   * @property {BaseColors & TColors} colors - Default theme colors.
   * Default theme colors.
   * You can add whatever values you want to the theme, and they will be merged with the default.
  */
  colors: BaseColors & TColors;

  /**
   * @property {ColorSchemeName} [scheme]
   * Theme colorScheme {@link ColorSchemeName}
  */
  scheme: ColorSchemeName;
  
  /**
   * @property {boolean} isDark
   * Indicates whether the current theme is a dark theme.
   * This property should be set to `true` if the active theme is a dark theme, `false` otherwise.
   */
  isDark: boolean;

  /**
   * @property {Borders} borders
   * Border configurations for the theme.
   */
  borders: Borders;

  /**
   * @property {Record<Spaces, number>} spaces
   * Represents the possible spacing values used for margins, padding, etc.
   */
  spaces: Record<Spaces, number>;

  /** @property {Record<FontSize, number>} fontSize - Font size used by components. */
  fontSize: Record<FontSize, number>;
}

/**
 * Defines the border configurations for a theme.
 * 
 * @interface Borders
 * @property {Record<BorderWidth, number>} width - Border width values, where the keys are from the `BorderWidth` type.
 * @property {Record<BorderRadius, number>} radius - Border radius values, where the keys are from the `BorderRadius` type.
 * @example
 * ```typescript
 * const myBorders: Borders = {
 *   width: { none: 0, base: 1, thick: 2},
 *   radius: { none: 0, small: 4, full: 99999},
 * };
 * ```
 */
export interface Borders {
  width?: Record<BorderWidth, number>;
  radius?: Record<BorderRadius, number>;
}

/**
 * Defines the default colors for a theme.
 * 
 * @interface BaseColors
 * @property {ColorValue} white - White color.
 * @property {ColorValue} black - Black color.
 * @property {ColorValue} primary - Primary color.
 * @property {ColorValue} primaryHover - Primary color on hover.
 * @property {ColorValue} primaryActive - Primary color on active.
 * @property {ColorValue} primarySubtle - Subtle primary color.
 * @property {ColorValue} primarySubtleHover - Subtle primary color on hover.
 * @property {ColorValue} primarySubtleActive - Subtle primary color on active.
 * @property {ColorValue} info - Info color.
 * @property {ColorValue} infoHover - Info color on hover.
 * @property {ColorValue} infoActive - Info color on active.
 * @property {ColorValue} infoSubtle - Subtle info color.
 * @property {ColorValue} infoSubtleHover - Subtle info color on hover.
 * @property {ColorValue} infoSubtleActive - Subtle info color on active.
 * @property {ColorValue} success - Success color.
 * @property {ColorValue} successHover - Success color on hover.
 * @property {ColorValue} successActive - Success color on active.
 * @property {ColorValue} successSubtle - Subtle success color.
 * @property {ColorValue} successSubtleHover - Subtle success color on hover.
 * @property {ColorValue} successSubtleActive - Subtle success color on active.
 * @property {ColorValue} warning - Warning color.
 * @property {ColorValue} warningHover - Warning color on hover.
 * @property {ColorValue} warningActive - Warning color on active.
 * @property {ColorValue} warningSubtle - Subtle warning color.
 * @property {ColorValue} warningSubtleHover - Subtle warning color on hover.
 * @property {ColorValue} warningSubtleActive - Subtle warning color on active.
 * @property {ColorValue} error - Error color.
 * @property {ColorValue} errorHover - Error color on hover.
 * @property {ColorValue} errorActive - Error color on active.
 * @property {ColorValue} errorSubtle - Subtle error color.
 * @property {ColorValue} errorSubtleHover - Subtle error color on hover.
 * @property {ColorValue} errorSubtleActive - Subtle error color on active.
 * @property {ColorValue} dark - Dark color.
 * @property {ColorValue} darkHover - Dark color on hover.
 * @property {ColorValue} darkActive - Dark color on active.
 * @property {ColorValue} darkSubtle - Subtle dark color.
 * @property {ColorValue} darkSubtleHover - Subtle dark color on hover.
 * @property {ColorValue} darkSubtleActive - Subtle dark color on active.
 * @property {ColorValue} secondary - Secondary color.
 * @property {ColorValue} secondaryHover - Secondary color on hover.
 * @property {ColorValue} secondaryActive - Secondary color on active.
 * @property {ColorValue} secondarySubtle - Subtle secondary color.
 * @property {ColorValue} secondarySubtleHover - Subtle secondary color on hover.
 * @property {ColorValue} secondarySubtleActive - Subtle secondary color on active.
 * @property {ColorValue} light - Light color.
 * @property {ColorValue} lightHover - Light color on hover.
 * @property {ColorValue} lightActive - Light color on active.
 * @property {ColorValue} lightSubtle - Subtle light color.
 * @property {ColorValue} lightSubtleHover - Subtle light color on hover.
 * @property {ColorValue} lightSubtleActive - Subtle light color on active.
 * @property {ColorValue} background - Background color.
 * @property {ColorValue} card - Card color.
 * @property {ColorValue} default - Default color.
 * @property {ColorValue} defaultHover - Default color on hover.
 * @property {ColorValue} defaultActive - Default color on active.
 * @property {ColorValue} defaultSubtle - Subtle default color.
 * @property {ColorValue} defaultSubtleHover - Subtle default color on hover.
 * @property {ColorValue} defaultSubtleActive - Subtle default color on active.
 * @property {ColorValue} text - Text color.
 * @property {ColorValue} border - Border color.
 * @property {ColorValue} placeholder - Placeholder color.
 * @example
 * ```typescript
 * const myBaseColors: BaseColors = {
 *   white: '#FFFFFF',
 *   black: '#000000',
 *   primary: '#EA5A51',
 *   primaryHover: '#D35149',
 *   primaryActive: '#d45349',
 *   primarySubtle: '#EA5A510d',
 *   primarySubtleHover: '#EA5A512b',
 *   primarySubtleActive: '#EA5A5140',
 *   // ... other colors
 * };
 * ```
 */
export interface BaseColors {
  /** @property {ColorValue} white - White color. */
  white: ColorValue;

  /** @property {ColorValue} black - Black color. */
  black: ColorValue;

  /** @property {ColorValue} primary - Primary color. */
  primary: ColorValue;

  /** @property {ColorValue} primaryHover - Primary color on hover. */
  primaryHover: ColorValue;

  /** @property {ColorValue} primaryActive - Primary color on active. */
  primaryActive: ColorValue;

  /** @property {ColorValue} primarySubtle - Subtle primary color. */
  primarySubtle: ColorValue;

  /** @property {ColorValue} primarySubtleHover - Subtle primary color on hover. */
  primarySubtleHover: ColorValue;

  /** @property {ColorValue} primarySubtleActive - Subtle primary color on active. */
  primarySubtleActive: ColorValue;

  /** @property {ColorValue} info - Info color. */
  info: ColorValue;

  /** @property {ColorValue} infoHover - Info color on hover. */
  infoHover: ColorValue;

  /** @property {ColorValue} infoActive - Info color on active. */
  infoActive: ColorValue;

  /** @property {ColorValue} infoSubtle - Subtle info color. */
  infoSubtle: ColorValue;

  /** @property {ColorValue} infoSubtleHover - Subtle info color on hover. */
  infoSubtleHover: ColorValue;

  /** @property {ColorValue} infoSubtleActive - Subtle info color on active. */
  infoSubtleActive: ColorValue;

  /** @property {ColorValue} success - Success color. */
  success: ColorValue;

  /** @property {ColorValue} successHover - Success color on hover. */
  successHover: ColorValue;

  /** @property {ColorValue} successActive - Success color on active. */
  successActive: ColorValue;

  /** @property {ColorValue} successSubtle - Subtle success color. */
  successSubtle: ColorValue;

  /** @property {ColorValue} successSubtleHover - Subtle success color on hover. */
  successSubtleHover: ColorValue;

  /** @property {ColorValue} successSubtleActive - Subtle success color on active. */
  successSubtleActive: ColorValue;

  /** @property {ColorValue} warning - Warning color. */
  warning: ColorValue;

  /** @property {ColorValue} warningHover - Warning color on hover. */
  warningHover: ColorValue;

  /** @property {ColorValue} warningActive - Warning color on active. */
  warningActive: ColorValue;

  /** @property {ColorValue} warningSubtle - Subtle warning color. */
  warningSubtle: ColorValue;

  /** @property {ColorValue} warningSubtleHover - Subtle warning color on hover. */
  warningSubtleHover: ColorValue;

  /** @property {ColorValue} warningSubtleActive - Subtle warning color on active. */
  warningSubtleActive: ColorValue;

  /** @property {ColorValue} error - Error color. */
  error: ColorValue;

  /** @property {ColorValue} errorHover - Error color on hover. */
  errorHover: ColorValue;

  /** @property {ColorValue} errorActive - Error color on active. */
  errorActive: ColorValue;

  /** @property {ColorValue} errorSubtle - Subtle error color. */
  errorSubtle: ColorValue;

  /** @property {ColorValue} errorSubtleHover - Subtle error color on hover. */
  errorSubtleHover: ColorValue;

  /** @property {ColorValue} errorSubtleActive - Subtle error color on active. */
  errorSubtleActive: ColorValue;

  /** @property {ColorValue} dark - Dark color. */
  dark: ColorValue;

  /** @property {ColorValue} darkHover - Dark color on hover. */
  darkHover: ColorValue;

  /** @property {ColorValue} darkActive - Dark color on active. */
  darkActive: ColorValue;

  /** @property {ColorValue} darkSubtle - Subtle dark color. */
  darkSubtle: ColorValue;

  /** @property {ColorValue} darkSubtleHover - Subtle dark color on hover. */
  darkSubtleHover: ColorValue;

  /** @property {ColorValue} darkSubtleActive - Subtle dark color on active. */
  darkSubtleActive: ColorValue;

  /** @property {ColorValue} secondary - Secondary color. */
  secondary: ColorValue;

  /** @property {ColorValue} secondaryHover - Secondary color on hover. */
  secondaryHover: ColorValue;

  /** @property {ColorValue} secondaryActive - Secondary color on active. */
  secondaryActive: ColorValue;

  /** @property {ColorValue} secondarySubtle - Subtle secondary color. */
  secondarySubtle: ColorValue;

  /** @property {ColorValue} secondarySubtleHover - Subtle secondary color on hover. */
  secondarySubtleHover: ColorValue;

  /** @property {ColorValue} secondarySubtleActive - Subtle secondary color on active. */
  secondarySubtleActive: ColorValue;

  /** @property {ColorValue} light - Light color. */
  light: ColorValue;

  /** @property {ColorValue} lightHover - Light color on hover. */
  lightHover: ColorValue;

  /** @property {ColorValue} lightActive - Light color on active. */
  lightActive: ColorValue;

  /** @property {ColorValue} lightSubtle - Subtle light color. */
  lightSubtle: ColorValue;

  /** @property {ColorValue} lightSubtleHover - Subtle light color on hover. */
  lightSubtleHover: ColorValue;

  /** @property {ColorValue} lightSubtleActive - Subtle light color on active. */
  lightSubtleActive: ColorValue;

  /** @property {ColorValue} background - Background color. */
  background: ColorValue;

  /** @property {ColorValue} card - Card color. */
  default: ColorValue;

  /** @property {ColorValue} text - Text color. */
  defaultHover: ColorValue;

  /** @property {ColorValue} border - Border color. */
  defaultActive: ColorValue;

  /** @property {ColorValue} placeholder - Placeholder color. */
  defaultSubtle: ColorValue;

  /** @property {ColorValue} overlay - Overlay color. */
  defaultSubtleHover: ColorValue;

  /** @property {ColorValue} overlay - Overlay color. */
  defaultSubtleActive: ColorValue;

  /** @property {ColorValue} overlay - Overlay color. */
  card: ColorValue;

  /** @property {ColorValue} overlay - Overlay color. */
  text: ColorValue;

  /** @property {ColorValue} overlay - Overlay color. */
  border: ColorValue;

  /** @property {ColorValue} overlay - Overlay color. */
  placeholder: ColorValue;
}

/**
 * @interface ThemeProviderProps<TColors>
 * @template TColors
 * @description Defines the props for the ThemeProvider component.
 * @property {BaseTheme<TColors>} [theme] - The initial theme to apply. If not provided, the default theme is used.
 * @property {React.ReactNode} children - The child components that will receive the theme via context.
 */
export interface ThemeProviderProps<TColors> {
  /** @property {BaseTheme<TColors>} [theme] - The initial theme to apply. */
  theme?: BaseTheme<TColors>;

  /** @property {React.ReactNode} children - The child components that will receive the theme via context. */
  children: React.ReactNode;
};

/**
 * @interface ThemeContextProps<TColors>
 * @template TColors
 * @description Defines the structure of the theme context value.
 * @property {BaseTheme<TColors>} state - The current theme state.
 * @property {(theme: BaseTheme<TColors>) => void} [setTheme] - A function to update the theme.
 * @property {(scheme: ColorSchemeName) => void} [setColorScheme] - A function to update the color scheme.
 * @property {(colors: BaseColors & TColors) => void} [setColors] - A function to update only the theme colors.
 */
export interface ThemeContextProps<TColors> {
  /** @property {BaseTheme<TColors>} state - The current theme state. */
  state: BaseTheme<TColors>;

  /** @property {(theme: BaseTheme<TColors>) => void} [setTheme] - Function to update the theme. */
  setTheme?: (theme: BaseTheme<TColors>) => void;

  /** @property {(scheme: ColorSchemeName) => void} [setColorScheme] - Function to update the color scheme. */
  setColorScheme?: (scheme: ColorSchemeName) => void;

  /** @property {(colors: BaseColors & TColors) => void} [setColors] - Function to update only the theme colors. */
  setColors?: (colors: BaseColors & TColors) => void;
}