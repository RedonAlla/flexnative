import { ColorSchemeName, ColorValue } from 'react-native';

/**
 * Represents the possible border radius values.
 * 
 * - `none`: No border radius (0).
 * - `small`: A small border radius (2).
 * - `medium`: A medium border radius (4).
 * - `large`: A large border radius (6).
 * - `full`: A fully rounded border radius (99999).
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
 * @property {string} thin - A thin border width, 1 unit.
 * @property {string} base - A base border width, 2 units.
 * @property {string} thick - A thick border width, 3 units.
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
 * - `xxs`: A small font size, 8 units.
 * - `xs`: The default font size, 12 units.
 * - `sm`: A medium font size, 14 units.
 * - `md`: A large font size, 16 units.
 * - `lg`: A large font size, 18 units.
 * - `xl`: A large font size, 20 units.
 * - `xxl`: A large font size, 24 units.
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
export type Color =
  'default' |
  'primary' |
  'secondary' |
  'info' |
  'success' |
  'warning' |
  'error' |
  'dark' |
  'light' |
  ColorValue;

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
 * @template TColors - Template to extend the theme's `colors` property.
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
   * Default theme colors.
   * Contains base colors merged with any custom TColors provided.
  */
  colors: BaseColors & TColors;

  /**
   * The current color scheme (e.g., 'light' or 'dark').
  */
  scheme: ColorSchemeName;
  
  /**
   * Indicates whether the current theme is a dark theme.
   */
  isDark: boolean;

  /**
   * Border configurations for the theme.
   */
  borders: Borders;

  /**
   * Spacing values used for margins, padding, etc.
   */
  spaces: Record<Spaces, number>;

  /**
   * Font size values used by components. 
   */
  fontSize: Record<FontSize, number>;

  /*
  A `scale` factor to the state and apply it to the theme dimensions (fonts, spaces, borders).
  */
  scale?: number;
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
  width: Record<BorderWidth, number>;
  radius: Record<BorderRadius, number>;
}

/**
 * Defines the default colors for a theme.
 * 
 * @interface BaseColors
 * @property {ColorValue} white - The default white color.
 * @property {ColorValue} black - The default black color.
 * @property {ColorValue} primary - The primary color used for key UI elements.
 * @property {ColorValue} info - The color used for informational messages and elements.
 * @property {ColorValue} success - The color used for success messages and indicators.
 * @property {ColorValue} warning - The color used for warning messages and indicators.
 * @property {ColorValue} error - The color used for error messages and alerts.
 * @property {ColorValue} dark - The dark color used for backgrounds and surfaces.
 * @property {ColorValue} secondary - The secondary color used for accents and highlights.
 * @property {ColorValue} light - The light color used for backgrounds and surfaces
 * @property {ColorValue} background - The default background color for screens and components. 
 * @property {ColorValue} card - The default color for card backgrounds.
 * @property {ColorValue} default - The default color used for text and icons.
 * @property {ColorValue} text - The default text color for readability.
 * @property {ColorValue} border - The default border color for components.
 * @property {ColorValue} placeholder - The color used for placeholder text in inputs and other components.
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

  /** @property {ColorValue} info - Info color. */
  info: ColorValue;

  /** @property {ColorValue} success - Success color. */
  success: ColorValue;

  /** @property {ColorValue} warning - Warning color. */
  warning: ColorValue;

  /** @property {ColorValue} error - Error color. */
  error: ColorValue;

  /** @property {ColorValue} dark - Dark color. */
  dark: ColorValue;

  /** @property {ColorValue} secondary - Secondary color. */
  secondary: ColorValue;

  /** @property {ColorValue} light - Light color. */
  light: ColorValue;

  /** @property {ColorValue} background - Background color. */
  background: ColorValue;

  /** @property {ColorValue} card - Card color. */
  default: ColorValue;

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

  /** @property {(arg: T) => void} [setTheme] - Function to update the theme. */
  setTheme?: <T>(arg: T) => void;

  /** @property {(scheme: ColorSchemeName) => void} [setColorScheme] - Function to update the color scheme. */
  setColorScheme?: (scheme: ColorSchemeName) => void;

  /** @property {(arg: number) => void} [scale] - Function to update the theme.scale. */
  setScale?: (scale: number) => void;
}