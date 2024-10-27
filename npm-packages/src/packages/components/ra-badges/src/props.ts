/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 12:58:27
 * @ Description: Badge component.
 */

import { TextProps, ColorValue } from "react-native";

export type Position = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number
}

export type BadgeRadius = 'none' | 'small' | 'medium' | 'large' | 'full' | number;
export type BadgeColor = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | ColorValue;
export type BadgeType = 'default' | 'text' | 'ghost';
export type BadgeSize = 'small' | 'default' | 'medium' | 'large';
export type BorderWidth = 'none' | 'hairline' | 'thin' | 'base' | 'thick' | number;
export type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | Position;

export default interface BadgedProps extends TextProps {
  /**
   * Text to display on badged. 
   */
  text?: string;

  /**
   * Text color value.
   */
  textColor?: ColorValue;

  /**
   * Badge background color.
   */
  backgroundColor?: ColorValue;

  /**
   * ReactNode to render where to render the badge.
   */
  children: React.ReactNode;

  /** Optional borders width.
   * @default none
  */
  borderWidth?: BorderWidth;

  /** Badge position.
   * @default 'top-right'
  */
  position?: BadgePosition;

  /** Borders color color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /** Badged Size variable
  * @default 'default'
  */
  size?: BadgeSize;

  /**
   * @default 'default'
  */
  type?: BadgeType;

  /** Badged border radius.
  * @default 'full'
  */
  radius: BadgeRadius;

  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color: BadgeColor;
}