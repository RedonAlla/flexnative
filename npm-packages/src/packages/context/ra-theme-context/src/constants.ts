/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-11-05 22:13:28
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-20 21:55:25
 * @ Description: Constants used for theming and styling in the application.
 */

import { StyleSheet } from "react-native";
import { BorderRadius, BorderWidth } from "./props";

/**
 * The base size used for scaling and sizing elements in the application.
 * This constant is typically used as a reference value for consistent spacing,
 * font sizing, and other dimensions throughout the application.
 */
export const BASE_SIZE = 16;

/**
 * The opacity value used to indicate a disabled state for UI elements.
 * This value is typically applied to elements to visually convey that they are not interactive.
 * 
 * @constant {number}
 */
export const DISABLED_OPACITY = 0.4;

/**
 * The transparency level for ghost elements in the application.
 * This value is represented as a string percentage.
 * 
 * @constant {string}
 */
export const GHOST_TRANSPARENCY = '40';

/**
 * Multiplier used to calculate vertical padding.
 * This constant is used to adjust the vertical padding
 * in various components or layouts within the application.
 */
export const PADDING_VERTICAL_MULTIPLIER = 0.6;

/**
 * Multiplier used to calculate the horizontal padding.
 * This constant is used to adjust the horizontal padding values
 * throughout the application to maintain consistent spacing.
 */
export const PADDING_HORIZONTAL_MULTIPLIER = 1;

/**
 * An object representing different font sizes based on a base size.
 * 
 * @property {number} small - Font size for small text, calculated as 75% of the base size.
 * @property {number} default - Default font size, equal to the base size.
 * @property {number} medium - Font size for medium text, calculated as 125% of the base size.
 * @property {number} large - Font size for large text, calculated as 150% of the base size.
 */
export const FONT_SIZE = {
  small: BASE_SIZE * 0.75,
  default: BASE_SIZE,
  medium: BASE_SIZE * 1.25,
  large: BASE_SIZE * 1.5
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