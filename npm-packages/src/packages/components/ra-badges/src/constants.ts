/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-11 22:27:34
 * @ Description: Constants used in Badges component.
 */

import { BadgePosition, Position } from "./props";


/**
 * Multiplier used to calculate padding for badges.
 * This constant is used to scale the padding proportionally.
 */
export const PADDING_MULTIPLIER = 0.4;

/**
 * Represents the color white in hexadecimal format.
 * This constant can be used for styling components where a white color is needed.
 */
export const WHITE_COLOR = '#FFFFFF';

export const POSITION: Record<BadgePosition, Position> = {
  'top-left': { top: -10, left: -10 },
  'top-right': { top: -10, right: -10 },
  'bottom-left': { bottom: -10, left: -10 },
  'bottom-right': { bottom: -10, right: -10 }
}