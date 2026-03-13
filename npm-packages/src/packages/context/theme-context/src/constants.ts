import { StyleSheet } from "react-native";
import { BorderRadius, BorderWidth, FontSize, Spaces } from "./props";

/**
 * A constant object that maps different font sizes to their corresponding numeric values.
 * 
 * @constant
 * @type {Record<FontSize, number>}
 * 
 * @property {number} xxs - Represents an extra extra small font size (8).
 * @property {number} xs - Represents an extra small font size (12).
 * @property {number} sm - Represents a small font size (14).
 * @property {number} md - Represents a medium font size (16).
 * @property {number} lg - Represents a large font size (18).
 * @property {number} xl - Represents an extra large font size (20).
 * @property {number} xxl - Represents an extra extra large font size (24).
 */
export const FONT_SIZE: Record<FontSize, number> = {
  'xxs': 8,
  'xs': 12,
  'sm': 14,
  'md': 16,
  'lg': 18,
  'xl': 20,
  'xxl': 24,
}

/**
 * A constant object that maps different border radius sizes to their corresponding numeric values.
 * 
 * @constant
 * @type {Record<BorderRadius, number>}
 * 
 * @property {number} none - Represents no border radius (0).
 * @property {number} small - Represents a small border radius (2).
 * @property {number} medium - Represents a medium border radius (4).
 * @property {number} large - Represents a large border radius (6).
 * @property {number} full - Represents a fully rounded border radius (99999).
 */
export const BORDER_RADIUS: Record<BorderRadius, number> = {
  none: 0,
  small: 2,
  medium: 4,
  large: 6,
  full: 99999,
}

/**
 * A constant object that maps different border width types to their corresponding numeric values.
 * 
 * @constant
 * @type {Record<BorderWidth, number>}
 * 
 * @property {number} none - Represents no border width (0).
 * @property {number} hairline - Represents a hairline border width, using the platform's hairline width.
 * @property {number} thin - Represents a thin border width (1).
 * @property {number} base - Represents a base border width (2).
 * @property {number} thick - Represents a thick border width (3).
 */
export const BORDER_WIDTH: Record<BorderWidth, number> = {
  none: 0,
  hairline: StyleSheet.hairlineWidth,
  thin: 1,
  base: 2,
  thick: 3,
}

/**
 * A constant object that maps different spacing values to their corresponding numeric values.
 * 
 * @constant
 * @type {Record<Spaces, number>}
 * 
 * @property {number} none - Represents no spacing (0).
 * @property {number} xxxs - Represents an extra extra extra small spacing (2).
 * @property {number} xxs - Represents an extra extra small spacing (4).
 * @property {number} xs - Represents an extra small spacing (6).
 * @property {number} sm - Represents a small spacing (8).
 * @property {number} md - Represents a medium spacing (12).
 * @property {number} default - Represents the default spacing (16).
 * @property {number} lg - Represents a large spacing (18).
 * @property {number} xl - Represents an extra large spacing (24).
 * @property {number} xxl - Represents an extra extra large spacing (32).
 * @property {number} xxxl - Represents an extra extra extra large spacing (36).
 */
export const SPACING: Record<Spaces, number> = {
  'none': 0,
  'xxxs': 2,
  'xxs': 4,
  'xs': 6,
  'sm': 8,
  'md': 12,
  'default': 16,
  'lg': 18,
  'xl': 24,
  'xxl': 32,
  'xxxl': 36,
}