/**
 * @file constants.ts
 * @author Redon Alla <redon.alla@gmail.com>
 * @createDate 2024-11-05 22:13:28
 * @modifyDate 2025-03-09 23:05:53
 * @description Constants used for theming and styling in the application.
 */

import { StyleSheet } from "react-native";
import { BorderRadius, BorderWidth, FontSize, Spaces } from "./props";

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