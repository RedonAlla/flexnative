import { StyleSheet } from 'react-native';


export type BorderRadius = "none" | "small" | "medium" | "large" | "full";
export type BorderWidth = "none" | "hairline" | "thin" | "base" | "thick";

export const borderRadius: Record<BorderRadius, number> = {
  none: 0,
  small: 2,
  medium: 4,
  large: 6,
  full: 9999,
}

export const borderWidth: Record<BorderWidth, number> = {
  none: 0,
  hairline: StyleSheet.hairlineWidth,
  thin: 1,
  base: 2,
  thick: 3,
}