/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-06 17:22:13
 * @ Description: Defines constants used within the Badge component for styling and positioning.
 */

import { ColorValue } from "react-native";
import { BadgePosition, Position } from "./props";


/**
 * Represents the color white in hexadecimal format.
 * This constant is used for styling components where a white color is needed, such as text or borders.
 */
export const WHITE_COLOR: ColorValue = '#FFFFFF';

/**
 * Defines the positioning offsets for badges relative to their parent element.
 * Each key represents a corner position (e.g., 'top-left', 'bottom-right'), and the value is an object
 * specifying the `top`, `bottom`, `left`, and `right` offsets.
 */
export const POSITION: Record<BadgePosition, Position> = {
  'top-left': { top: -10, left: -10 },
  'top-right': { top: -10, right: -10 },
  'bottom-left': { bottom: -10, left: -10 },
  'bottom-right': { bottom: -10, right: -10 }
}