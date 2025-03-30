/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-17 22:02:06
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-30 23:55:11
 * @ Description: This module defines the interfaces and types for the properties of the Message component.
 */

import { ViewProps } from "react-native";
import { BorderRadius, BorderWidth, Sizes } from "@flexnative/theme-context";
import { IconName } from "@flexnative/icons";


/**
 * Represents the different types of messages available in the application.
 * 
 * - `ghost`: Message box with a transparent background.
 * - `solid`: Message Box with a solid background color.
 */
export type FillMode = 'ghost' | 'solid';

/**
 * Represents the different types of messages available in the application.
 * 
 * - `info`: Information message.
 * - `warning`: Warning message.
 * - `error`: Error message.
 * - `success`: Success message.
 * - `default`: Default message.
 */
export type Type = 'info' | 'warning' | 'error' | 'success' | 'default';

/**
 * Interface for the base properties of the Message component.
 */
export interface BaseMessageProps {
  /**
   * Specifies the message box type.
   * 
   * - `info`: Information message.
   * - `warning`: Warning message.
   * - `error`: Error message.
   * - `success`: Success message.
   * - `default`: Default message.
   * 
   * @default 'default'
   */
  type?: Type;

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
   * 
   * - `ghost`: Message box with a transparent background.
   * - `solid`: Message Box with a solid background color.
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
   * Title of the message box.
   * Specifies the title of the message box.
   */
  title?: string;

  /**
   * Specifies the name of the icon to display in the message box.
   * The icon name should be one of the available icons in the application.
   * 
   * If you do not want the icon to me be displayed just set the value to `null`.
   * 
   * If no icon is specified, the default icon for the message type will be displayed.
   * @default 
   *  - `type='info'` is `info-circle`,
   *  - `type='warning'` is 'warning-circle',
   *  - `type='error'` is 'close-circle', 
   *  - `type='success'` is 'check-circle',
   *  - `type='default'` is 'info-circle'.
   * 
   * @see IconName
   */
  icon?: keyof IconName | null;
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