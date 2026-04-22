/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2026-04-21 21:58:20
 * @ Description: Defines the properties for the Badged component.
 */

import { BorderRadius, BorderWidth, Color, FontSize } from "@flexnative/theme-context";
import { TextProps, ColorValue } from "react-native";

/**
 * Represents the position of an element with optional top, bottom, left, and right properties.
 * Each property is a number that specifies the distance from the respective edge.
 * 
 * @property {number} [top] - The distance from the top edge.
 * @property {number} [bottom] - The distance from the bottom edge.
 * @property {number} [left] - The distance from the left edge.
 * @property {number} [right] - The distance from the right edge.
 */
export type Position = {
  /**
   * @property {number} [top] - The distance from the top edge.
   */
  top?: number;
  /**
   * @property {number} [bottom] - The distance from the bottom edge.
   */
  bottom?: number;
  /**
   * @property {number} [left] - The distance from the left edge.
   */
  left?: number;
  /**
   * @property {number} [right] - The distance from the right edge.
   */
  right?: number;
}

/**
 * Represents the possible positions for a badge component.
 * 
 * The badge can be positioned at one of the four corners:
 * - 'top-left' => { top: -10, left: -10 }
 * - 'top-right' => { top: -10, right: -10 }
 * - 'bottom-left' => { bottom: -10, left: -10 }
 * - 'bottom-right' => { bottom: -10, right: -10 }
 * 
 * Additionally, it can take any value of the {@link Position} type.
 */
export type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

/**
 * Interface representing the properties for a Badged component.
*/
export default interface BadgedProps extends TextProps {
  /**
   * The text content to be displayed within the badge.
   */
  text?: string;

  /**
   * Text color value.
   */
  textColor?: ColorValue;

  /**
   * ReactNode to render where to render the badge.
   */
  children: React.ReactNode;

  /** Optional borders width.
   * @default 'none'
  */
  borderWidth?: BorderWidth;

  /** Badge position.
   * @default 'top-right'
  */
  position?: BadgePosition | Position;

  /** Borders color color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /** Badged Size variable
  * @default 'md'
  */
  size?: FontSize;

  /** Badged border radius.
  * @default 'full'
  */
  radius?: BorderRadius;

  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'error'
  */
  color?: Color;
}