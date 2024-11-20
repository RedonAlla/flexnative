/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-11-05 22:13:28
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-20 21:58:26
 * @ Description: Utility functions for creating themes.
 */

import { Appearance, ColorSchemeName } from "react-native";
import { BaseColors, BaseTheme } from "./props";
import { dark, light } from "./colors";
import {
  BASE_SIZE,
  BORDER_RADIUS,
  BORDER_WIDTH,
  DISABLED_OPACITY,
  FONT_SIZE,
  GHOST_TRANSPARENCY,
  PADDING_HORIZONTAL_MULTIPLIER,
  PADDING_VERTICAL_MULTIPLIER
} from "./constants";


/**
 * Returns the default color scheme based on the provided scheme name.
 *
 * @param scheme - The name of the color scheme, either 'dark' or 'light'.
 * @returns The base colors corresponding to the specified color scheme.
 */
export function defaultColors(scheme: ColorSchemeName): BaseColors {
  return scheme === 'dark' ? dark : light;
}

/**
 * Generates the default theme configuration based on the current color scheme.
 *
 * @returns {BaseTheme<BaseColors>} The default theme object containing colors, scheme, border width, border radius, font size, and various metrics.
 */
export function defaultTheme(): BaseTheme<BaseColors> {
  const scheme = Appearance.getColorScheme();
  return {
    colors: defaultColors(scheme),
    scheme: scheme,
    borderWidth: BORDER_WIDTH,
    borderRadius: BORDER_RADIUS,
    fontSize: FONT_SIZE,
    metrics: {
      baseSize: BASE_SIZE,
      disabledOpacity: DISABLED_OPACITY,
      ghostOpacity: GHOST_TRANSPARENCY,
      verticalMultiplier: PADDING_VERTICAL_MULTIPLIER,
      horizontalMultiplier: PADDING_HORIZONTAL_MULTIPLIER
    }
  }
}

/**
 * Creates a theme object by merging the provided properties with default values.
 *
 * @template TColors - The type of the colors object.
 * @param {BaseTheme<TColors>} props - The base theme properties.
 * @returns {BaseTheme<TColors>} The created theme object.
 *
 * @property {TColors} colors - The color scheme for the theme.
 * @property {string} scheme - The color scheme name.
 * @property {number} borderWidth - The width of the borders.
 * @property {number} borderRadius - The radius of the borders.
 * @property {number} fontSize - The font size.
 * @property {object} metrics - Various metrics used in the theme.
 * @property {number} metrics.baseSize - The base size.
 * @property {number} metrics.disabledOpacity - The opacity for disabled elements.
 * @property {number} metrics.ghostOpacity - The opacity for ghost elements.
 * @property {number} metrics.verticalMultiplier - The vertical padding multiplier.
 * @property {number} metrics.horizontalMultiplier - The horizontal padding multiplier.
 */
export function createTheme<TColors>(props: BaseTheme<TColors>): BaseTheme<TColors> {
  const scheme = props.scheme ?? Appearance.getColorScheme() ?? 'light';

  return {
    colors: props.colors ?? defaultColors(scheme),
    scheme: scheme,
    borderWidth: props.borderWidth ?? BORDER_WIDTH,
    borderRadius: props.borderRadius ?? BORDER_RADIUS,
    fontSize: props.fontSize ?? FONT_SIZE,
    metrics: Object.assign({},
      {
        baseSize: BASE_SIZE,
        disabledOpacity: DISABLED_OPACITY,
        ghostOpacity: GHOST_TRANSPARENCY,
        verticalMultiplier: PADDING_VERTICAL_MULTIPLIER,
        horizontalMultiplier: PADDING_HORIZONTAL_MULTIPLIER
      },
      props.metrics
    )
  }
}