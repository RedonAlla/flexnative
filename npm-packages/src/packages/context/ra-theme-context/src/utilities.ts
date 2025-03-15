/**
 * @file utilities.ts
 * @author Redon Alla <redon.alla@gmail.com>
 * @createDate 2024-11-05 22:13:28
 * @modifyDate 2025-03-02 17:44:56
 * @description Utility functions for creating and managing themes within the FlexNative framework.
 *              This file provides functions to generate default themes, merge custom themes,
 *              and handle color schemes, ensuring a consistent and flexible theming system.
 */

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
 * @description Generates the default theme object with predefined colors, border configurations, and font sizes.
 *              It determines the initial color scheme based on the system's appearance or the user's preference.
 * @returns {BaseTheme<BaseColors>} The default theme object.
 * @example
 * 
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