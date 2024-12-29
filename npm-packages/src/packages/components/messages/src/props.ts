/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-17 22:02:06
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-18 23:28:04
 * @ Description: This code defines a TypeScript interface for `MessageBox` component. This particular interface is intended to specify the properties that can be passed to a `MessageBox` component, which likely is part of a UI library or application.
 */

import { ColorValue, ViewProps } from "react-native";
import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";


/**
 * Represents the different types of messages available in the application.
 * 
 * - `ghost`: Message box with a transparent background.
 * - `solid`: Message Box with a solid background color.
 */
export type FillMode = 'ghost' | 'solid';


export interface BaseMessageProps {
  /**
   * Message box border radius.
   * Specifies the roundness of the message box corners.
   * 
   * @default 'medium'
   */
  radius?: BorderRadius;

  /**
   * Optional message box borders width.
   * Specifies the thickness of the message box borders.
   * 
   * @default 'none'
   */
  borderWidth?: BorderWidth;

  /**
   * Fill Mode of the message box.
   * Determines the appearance of the message box.
   * To have appearance for 'ghost' with custom color you should use hex colors.
   * 
   * @default 'ghost'
   */
  fill?: FillMode;

  /**
   * Message box size.
   * Defines the overall size of the message box component.
   * 
   * @default normal
   */
  size?: Sizes;

  /**
   * Color by theme or a custom color according to `react-native` ColorValue.
   * Sets the primary color of the message box, either by theme or a specified color code.
   * 
   * @default 'default'
   */
  color?: Color;

  /**
   * Specifies the color of the message box borders.
   * Borders color according to `react-native` ColorValue.
   */
  borderColor?: ColorValue;
}

/**
 * This particular interface is intended to specify the properties that can be passed to a `MessageBox` component,
 * which likely is part of a UI library or application.
 */
export interface MessageBoxProps extends BaseMessageProps, ViewProps {
  /**
   * Children to display inside the Message box.
   * Can be any React elements that will be rendered within the message box.
   * */
  children?: React.ReactNode;

  /**
   * String that contains the text or message to be displayed inside the message box.
   * If the `children` property is used, this text property will be ignored.
   */
  text?: string;
}