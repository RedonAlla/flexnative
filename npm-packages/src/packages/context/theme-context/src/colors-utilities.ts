import * as Color from "color-bits";
import { ColorSchemeName, ColorValue } from "react-native";

const LIGHT_HOVER_OPACITY = 0.075;
const LIGHT_ACTIVE_OPACITY = 0.15;
const DARK_HOVER_OPACITY = 0.03;
const DARK_ACTIVE_OPACITY = 0.075;
const SUBTLE_OPACITY = 0.9;
const SUBTLE_HOVER_OPACITY = 0.8;
const SUBTLE_ACTIVE_OPACITY = 0.77;

/**
 * Generates a hover color based on the color scheme.
 * For dark mode, it lightens the color. For light mode, it darkens the color.
 *
 * @param baseColor - The starting color string.
 * @param modification - The current color scheme ('light', 'dark', or null).
 * @returns The modified hover color string.
 */
export const applyHoverColor = (
  baseColor: string,
  modification: ColorSchemeName,
) => {
  const parsedColor = Color.parse(baseColor);
  const modifiedColor =
    modification === "dark"
      ? Color.lighten(parsedColor, LIGHT_HOVER_OPACITY)
      : Color.darken(parsedColor, DARK_HOVER_OPACITY);
  return Color.format(modifiedColor);
};

/**
 * Generates an active (pressed) color based on the color scheme.
 * For dark mode, it lightens the color. For light mode, it darkens the color.
 *
 * @param baseColor - The starting color string or ColorValue.
 * @param modification - The current color scheme ('light', 'dark', or null).
 * @returns The modified active color string.
 */
export const applyActiveColor = (
  baseColor: ColorValue | string,
  modification: ColorSchemeName,
) => {
  const parsedColor = Color.parse(baseColor as string);
  const modifiedColor =
    modification === "dark"
      ? Color.lighten(parsedColor, LIGHT_ACTIVE_OPACITY)
      : Color.darken(parsedColor, DARK_ACTIVE_OPACITY);
  return Color.format(modifiedColor);
};

/**
 * Generates a subtle color by lightening the base color.
 *
 * @param baseColor - The starting color string.
 * @returns The lightened subtle color.
 */
export const subtleColor = (baseColor: string) =>
  Color.format(Color.lighten(Color.parse(baseColor), SUBTLE_OPACITY));

/**
 * Generates a subtle hover color by lightening the base color.
 *
 * @param baseColor - The starting color string.
 * @returns The lightened subtle hover color.
 */
export const subtleHoverColor = (baseColor: string) =>
  Color.format(Color.lighten(Color.parse(baseColor), SUBTLE_HOVER_OPACITY));

/**
 * Generates a subtle active (pressed) color by lightening the base color.
 *
 * @param baseColor - The starting color string.
 * @returns The lightened subtle active color.
 */
export const subtleActiveColor = (baseColor: string) =>
  Color.format(Color.lighten(Color.parse(baseColor), SUBTLE_ACTIVE_OPACITY));