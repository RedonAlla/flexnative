/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-11-21 22:34:36
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-29 22:36:05
 * @ Description: This code establishes a centralized approach to manage colors and considers the adaptability needed for light and dark themes, enhancing both visual consistency and user experience across different devices.
 */

import { Appearance } from "react-native";

/**
 * A constant defined for the color white using its hexadecimal code.
 */
export const WHITE_COLOR = '#FFFFFF';

/**
 * A constant defined for a specific shade of black color.
 */
export const BLACK_COLOR = '#424242';

/** 
 * Represents a semi-transparent black overlay, useful for overlays that need to darken a previous color.
*/
export const DARK_OVERLAY = '#00000021';

/**
 * Represents a semi-transparent black overlay, useful for overlays that need to darken a previous color.
 */
export const LIGHT_OVERLAY = '#FFFFFF21';

/**
 * This object contains a collection of named colors, each associated with a specific hexadecimal color code.
 * These can be used throughout the application for consistent theming.
 */
export const primaryColors = {
  red: '#ff6358',
  red2: '#f54748',
  blue: '#283d9e',
  blueOcean: '#1274AC',
  blueSky: '#23bde0',
  green: '#53b827',
  pink: '#fe6f9b',
  pink2: '#e7607b',
  pink3: '#fc347f',
  orange: '#ff9411',
  orangeRed: '#ff5c1a',
  purple: '#bf70cc',
  turquoise: '#28bfba',
  black: '#3a3e59'
}

/**
 * Creates a TypeScript type alias `IPrimaryColors`, which captures the structure of the `primaryColors` object.
 * It ensures type safety whenever dealing with objects of this format.
 */
export type IPrimaryColors = typeof primaryColors;

/**
 * Retrieve the current color scheme (e.g., 'light' or 'dark') from the device's appearance settings.
 * This method is typically used to apply different styles depending on the user's preferred theme.
 */
export const deviceScheme = Appearance.getColorScheme();

/**
 * An array of color names used in the framework.
 * 
 * The available colors are:
 * - 'default'
 * - 'primary'
 * - 'secondary'
 * - 'info'
 * - 'success'
 * - 'warning'
 * - 'error'
 * - 'dark'
 * - 'light'
 */
export const frameworkColors = [
  'default' , 'primary' , 'secondary' , 'info' , 'success' , 'warning' , 'error' , 'dark' , 'light' 
];