import { StyleSheet } from "react-native";
import { BorderRadius, BorderWidth } from "./props";

export const BASE_SIZE = 16;
export const DISABLED_OPACITY = 0.4;
export const GHOST_TRANSPARENCY = '40';
export const GHOST_ACTIVE_TRANSPARENCY = '73';
export const PADDING_VERTICAL_MULTIPLIER = 0.6;
export const PADDING_HORIZONTAL_MULTIPLIER = 1;

export const FONT_SIZE = {
  small: BASE_SIZE * 0.75,
  default: BASE_SIZE,
  medium: BASE_SIZE * 1.25,
  large: BASE_SIZE * 1.5
}

export const BORDER_RADIUS: Record<BorderRadius, number> = {
  none: 0,
  small: 2,
  medium: 4,
  large: 6,
  full: 99999,
}

export const BORDER_WIDTH: Record<BorderWidth, number> = {
  none: 0,
  hairline: StyleSheet.hairlineWidth,
  thin: 1,
  base: 2,
  thick: 3,
}