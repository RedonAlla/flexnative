/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-09 22:40:44
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-27 16:59:16
 * @ Description: Constant Values use for SkeletonLoader component.
 */

/**
 * Represents the light background color used for skeleton loading components.
 * This color is typically used as a placeholder background while content is loading.
 * 
 * @constant {string}
 */
const LIGHT_BACKGROUND_COLOR = '#d0d0d0';

/**
 * The background color used for dark mode in the skeleton loading component.
 * 
 * @constant {string}
 */
const DARK_BACKGROUND_COLOR = '#4b4a4a';

/**
 * A constant that defines the background colors for light and dark themes.
 * 
 * @constant
 * @type {Record<'light' | 'dark', string>}
 * @property {string} light - The background color for the light theme.
 * @property {string} dark - The background color for the dark theme.
 */
export const BACKGROUND_COLOR: Record<'light' | 'dark', string> = {
  light: LIGHT_BACKGROUND_COLOR,
  dark: DARK_BACKGROUND_COLOR
}