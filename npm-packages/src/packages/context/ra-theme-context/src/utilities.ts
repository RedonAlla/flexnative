import { Appearance, ColorSchemeName } from "react-native";
import { BaseColors, BaseTheme } from "./props";
import { dark, light } from "./colors";
import {
  BASE_SIZE,
  BORDER_RADIUS,
  BORDER_WIDTH,
  DISABLED_OPACITY,
  FONT_SIZE,
  GHOST_ACTIVE_TRANSPARENCY,
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
 * @returns An object containing the default theme settings, including colors, scheme, border width, border radius, font size, and various metrics.
 *
 * The returned object has the following structure:
 * - `colors`: The default colors based on the current color scheme.
 * - `scheme`: The current color scheme.
 * - `borderWidth`: The default border width.
 * - `borderRadius`: The default border radius.
 * - `fontSize`: The default font size.
 * - `metrics`: An object containing various metric settings:
 *   - `basSize`: The base size.
 *   - `disabledOpacity`: The opacity for disabled elements.
 *   - `ghostOpacity`: The opacity for ghost elements.
 *   - `ghostActiveOpacity`: The active opacity for ghost elements.
 *   - `verticalMultiplier`: The vertical padding multiplier.
 *   - `horizontalMultiplier`: The horizontal padding multiplier.
 */
export function defaultTheme() {
  const scheme = Appearance.getColorScheme();
  return {
    colors: defaultColors(scheme),
    scheme: scheme,
    borderWidth: BORDER_WIDTH,
    borderRadius: BORDER_RADIUS,
    fontSize: FONT_SIZE,
    metrics: {
      basSize: BASE_SIZE,
      disabledOpacity: DISABLED_OPACITY,
      ghostOpacity: GHOST_TRANSPARENCY,
      ghostActiveOpacity: GHOST_ACTIVE_TRANSPARENCY,
      verticalMultiplier: PADDING_VERTICAL_MULTIPLIER,
      horizontalMultiplier: PADDING_HORIZONTAL_MULTIPLIER
    }
  }
}

/**
 * Creates a theme object based on the provided properties and defaults.
 *
 * @template TColors - The type of the colors object.
 * @param {BaseTheme<TColors>} props - The base theme properties.
 * @returns {object} The theme object.
 *
 * @property {TColors} colors - The colors for the theme. Defaults to `defaultColors(scheme)`.
 * @property {string} scheme - The color scheme. Defaults to `Appearance.getColorScheme()`.
 * @property {number} borderWidth - The border width. Defaults to `BORDER_WIDTH`.
 * @property {number} borderRadius - The border radius. Defaults to `BORDER_RADIUS`.
 * @property {number} fontSize - The font size. Defaults to `FONT_SIZE`.
 * @property {object} metrics - The metrics for the theme, including:
 *   @property {number} basSize - The base size. Defaults to `BASE_SIZE`.
 *   @property {number} disabledOpacity - The opacity for disabled elements. Defaults to `DISABLED_OPACITY`.
 *   @property {number} ghostOpacity - The opacity for ghost elements. Defaults to `GHOST_TRANSPARENCY`.
 *   @property {number} ghostActiveOpacity - The active opacity for ghost elements. Defaults to `GHOST_ACTIVE_TRANSPARENCY`.
 *   @property {number} verticalMultiplier - The vertical padding multiplier. Defaults to `PADDING_VERTICAL_MULTIPLIER`.
 *   @property {number} horizontalMultiplier - The horizontal padding multiplier. Defaults to `PADDING_HORIZONTAL_MULTIPLIER`.
 */
export function createTheme<TColors>(props: BaseTheme<TColors>) {
  const scheme = props.scheme ?? Appearance.getColorScheme();

  return {
    colors: props.colors ?? defaultColors(scheme),
    scheme: scheme,
    borderWidth: props.borderWidth ?? BORDER_WIDTH,
    borderRadius: props.borderRadius ?? BORDER_RADIUS,
    fontSize: props.fontSize ?? FONT_SIZE,
    metrics: Object.assign({},
      {
        basSize: BASE_SIZE,
        disabledOpacity: DISABLED_OPACITY,
        ghostOpacity: GHOST_TRANSPARENCY,
        ghostActiveOpacity: GHOST_ACTIVE_TRANSPARENCY,
        verticalMultiplier: PADDING_VERTICAL_MULTIPLIER,
        horizontalMultiplier: PADDING_HORIZONTAL_MULTIPLIER
      },
      props.metrics
    )
  }
}