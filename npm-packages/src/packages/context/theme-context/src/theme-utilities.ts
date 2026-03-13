import { Appearance, ColorSchemeName } from "react-native";
import { BaseColors, BaseTheme } from "./props";
import { dark, light } from "./colors";
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  FONT_SIZE,
  SPACING
} from "./constants";


/**
 * @function defaultColors
 * @template TColors
 * @description Determines the default color palette based on the user's preferred color scheme or the system's appearance.
 *              It returns either the `dark` or `light` color scheme.
 * @param {ColorSchemeName} [userScheme] - Optional. The user's preferred color scheme ('light' or 'dark'). If not provided, the system's appearance is used.
 * @returns {BaseColors & TColors} The default color palette for the specified or detected color scheme, extended with any custom colors.
 * @example
 * // Returns the dark color scheme if the system is in dark mode.
 * const darkColors = defaultColors();
 * 
 * // Returns the light color scheme.
 * const lightColors = defaultColors('light');
 */
export function defaultColors<TColors>(userScheme? : ColorSchemeName): BaseColors & TColors {
  const scheme = userScheme ?? Appearance.getColorScheme();
  return (scheme === 'dark' ? dark : light) as BaseColors & TColors;
}

/**
 * @function defaultTheme
 * @description Creates the default theme object, including colors, font sizes, spacing, and borders, based on the system's appearance.
 * @returns {BaseTheme<BaseColors>} The default theme configuration.
 */
export function defaultTheme(): BaseTheme<BaseColors> {
  const scheme = Appearance.getColorScheme();
  return {
    isDark: scheme === 'dark',
    colors: defaultColors(),
    scheme: scheme,
    fontSize: FONT_SIZE,
    spaces: SPACING,
    borders: {
      width: BORDER_WIDTH,
      radius: BORDER_RADIUS
    }
  }
}

/**
 * @function createTheme
 * @template TColors
 * @description Generates a custom theme by merging provided properties with the default theme.
 * @param {Partial<BaseTheme<TColors>>} props - The properties to override in the default theme.
 * @returns {BaseTheme<TColors>} The complete custom theme.
 */
export function createTheme<TColors>(props: Partial<BaseTheme<TColors>>): BaseTheme<TColors> {
  const theme = defaultTheme();

  return {
    isDark: theme.isDark,
    colors: {
      ...theme.colors,
      ...(props.colors ?? {})
    } as BaseColors & TColors,
    spaces: {
      ...theme.spaces,
      ...(props.spaces! ?? {})
    },
    scheme: theme.scheme,
    fontSize: props.fontSize ?? theme.fontSize,
    borders: {
      ...theme.borders,
      ...(props.borders ?? {})
    }
  }
}