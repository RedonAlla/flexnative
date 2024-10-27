export type BorderRadius = "none" | "small" | "medium" | "large" | "full";

export const borderRadius: Record<BorderRadius, number> = {
  none: 0,
  small: 2,
  medium: 4,
  large: 6,
  full: 9999
}