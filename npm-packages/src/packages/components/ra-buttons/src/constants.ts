/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-11-13 21:22:20
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-17 23:50:21
 * @ Description: This module defines constants used within the Button component, such as colors, spacing multipliers, and opacity values. These constants help maintain consistency and flexibility in the button's styling and layout.
 */

/**
 * Constant representing the color white in hexadecimal format.
 * These constants help maintain consistency and flexibility in the button's styling and layout.
 * 
 * @constant {string}
 */
export const WHITE_COLOR = '#ffffff';

/**
 * Multiplier used to calculate the horizontal padding within the button.
 * This constant helps in determining the amount of padding on the left and right sides of the button content.
 * Adjusting this value changes the button's internal horizontal spacing.
 *
 * @constant {number} HORIZONTAL_PADDING_MULTIPLIER
 * @default 2
 * @example
 * ```typescript
 * import { HORIZONTAL_PADDING_MULTIPLIER } from './constants';
 * const padding = 8 * HORIZONTAL_PADDING_MULTIPLIER; // padding will be 16
 * ```
 */
export const HORIZONTAL_PADDING_MULTIPLIER: number = 2;

/**
 * Multiplier used for general gap calculations within the button.
 * This constant can be used for determining spacing between various elements, such as the icon and text.
 * It allows for fine-tuning the overall spacing within the button.
 *
 * @constant {number} GAP_MULTIPLIER
 * @default 1.15
 * @example
 * ```typescript
 * import { GAP_MULTIPLIER } from './constants';
 * const iconTextGap = 4 * GAP_MULTIPLIER; //icon text gap will be 4.6
 * ```
 */
export const GAP_MULTIPLIER: number = 1.15;

/**
 * Opacity value to be applied when the button is in a disabled state.
 * This constant defines how transparent the button should be when it's not interactive,
 * providing visual feedback that the button is currently inactive.
 *
 * @constant {number} DISABLED_OPACITY
 * @default 0.6
 * @example
 * ```typescript
 * import { DISABLED_OPACITY } from './constants';
 * // Button will have an opacity of 0.6 when disabled.
 * const buttonStyle = {
 *   opacity: DISABLED_OPACITY,
 * };
 * ```
 */
export const DISABLED_OPACITY: number = 0.6;