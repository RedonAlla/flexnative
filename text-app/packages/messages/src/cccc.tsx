
Redon Alla
Generate documentation


Gemini
 typescript 
/**
 * @module @flexnative/messages
 * @description This module provides a customizable Message component for displaying various types of messages within a React Native application.
 * It leverages the `@flexnative/theme-context` for theming and `@flexnative/icons` for icons.
 */

/**
 * @fileoverview This file contains the implementation and documentation for the Message component.
 */

/**
 * @packageDocumentation
 * @module @flexnative/messages
 * @description This module provides a customizable Message component for displaying various types of messages within a React Native application.
 * It leverages the `@flexnative/theme-context` for theming and `@flexnative/icons` for icons.
 */

/**
 * @module @flexnative/messages/constants
 * @description This module defines constants used within the Message component.
 */

/**
 * @file constants.ts
 * @description Defines constants used in UI for Message Box component.
 */

/**
 * @constant BORDER_LEFT_WIDTH
 * @type {number}
 * @description The width of the left border in pixels.
 * @default 5
 */
export const BORDER_LEFT_WIDTH = 5;

/**
 * @constant WHITE_COLOR
 * @type {string}
 * @description The color white in hexadecimal representation.
 * @default '#fff'
 */
export const WHITE_COLOR = '#fff';

/**
 * @constant TITLE_MULTIPLIER
 * @type {number}
 * @description A multiplier used to calculate the font size of the title text.
 * @default 1.3
 */
export const TITLE_MULTIPLIER: number = 1.3;

/**
 * @module @flexnative/messages/props
 * @description This module defines the interfaces and types for the properties of the Message component.
 */

/**
 * @file props.ts
 * @description This code defines a TypeScript interface for `MessageBox` component. This particular interface is intended to specify the properties that can be passed to a `MessageBox` component, which likely is part of a UI library or application.
 */

import { ViewProps } from "react-native";
import { BorderRadius, BorderWidth, Sizes } from "@flexnative/theme-context";
import { IconName } from "@flexnative/icons";


/**
 * @typedef FillMode
 * @type {'ghost' | 'solid'}
 * @description Represents the different types of message box fill modes.
 * @property {'ghost'} ghost - Message box with a transparent background.
 * @property {'solid'} solid - Message Box with a solid background color.
 */
export type FillMode = 'ghost' | 'solid';

/**
 * @typedef Type
 * @type {'info' | 'warning' | 'error' | 'success' | 'default'}
 * @description Represents the different types of messages available in the application.
 * @property {'info'} info - Information message.
 * @property {'warning'} warning - Warning message.
 * @property {'error'} error - Error message.
 * @property {'success'} success - Success message.
 * @property {'default'} default - Default message.
 */
export type Type = 'info' | 'warning' | 'error' | 'success' | 'default';


/**
 * @interface BaseMessageProps
 * @description Interface for the base properties of the Message component.
 * @property {Type} [type='default'] - Color of the message box. Specifies the color of the message box.
 *   - `info`: Information message.
 *   - `warning`: Warning message.
 *   - `error`: Error message.
 *   - `success`: Success message.
 *   - `default`: Default message.
 * @property {BorderRadius} [radius='medium'] - Message box border radius. Specifies the roundness of the message box corners.
 * @property {BorderWidth} [borderWidth='none'] - Optional message box borders width. Specifies the thickness of the message box borders.
 * @property {FillMode} [fill='ghost'] - Fill Mode of the message box. Determines the appearance of the message box.
 *   - `ghost`: Message box with a transparent background.
 *   - `solid`: Message Box with a solid background color.
 * @property {Sizes} [size='medium'] - Message box size. Defines the overall size of the message box component.
 * @property {string} [title] - Title of the message box. Specifies the title of the message box.
 * @property {keyof IconName | null} [icon] - Specifies the name of the icon to display in the message box. The icon name should be one of the available icons in the application.
 *   If you do not want the icon to me be displayed just set the value to `null`.
 *   If no icon is specified, the default icon for the message type will be displayed.
 *   - `type='info'` is `info-circle`,
 *   - `type='warning'` is 'warning-circle',
 *   - `type='error'` is 'close-circle',
 *   - `type='success'` is 'check-circle',
 *   - `type='default'` is 'info-circle'.
 * @see {@link IconName}
 */
export interface BaseMessageProps {
  /**
   * @property {Type} [type='default']
   * @description Color of the message box. Specifies the color of the message box.
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
   * @property {BorderRadius} [radius='medium']
   * @description Message box border radius. Specifies the roundness of the message box corners.
   * 
   * @default 'medium'
   */
  radius?: BorderRadius;

  /**
   * @property {BorderWidth} [borderWidth='none']
   * @description Optional message box borders width. Specifies the thickness of the message box borders.
   * 
   * @default 'none'
   */
  borderWidth?: BorderWidth;

  /**
   * @property {FillMode} [fill='ghost']
   * @description Fill Mode of the message box. Determines the appearance of the message box.
   * 
   * - `ghost`: Message box with a transparent background.
   * - `solid`: Message Box with a solid background color.
   * 
   * @default 'ghost'
   */
  fill?: FillMode;

  /**
   * @property {Sizes} [size='medium']
   * @description Message box size. Defines the overall size of the message box component.
   * 
   * @default normal
   */
  size?: Sizes;

  /**
   * @property {string} [title]
   * @description Title of the message box. Specifies the title of the message box.
   */
  title?: string;

  /**
   * @property {keyof IconName | null} [icon]
   * @description Specifies the name of the icon to display in the message box.
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
   * @see {@link IconName}
   */
  icon?: keyof IconName | null;
}

/**
 * @interface MessageBoxProps
 * @extends BaseMessageProps
 * @extends ViewProps
 * @description This particular interface is intended to specify the properties that can be passed to a `MessageBox` component,
 * which likely is part of a UI library or application.
 * @property {React.ReactNode} [children] - Children to display inside the Message box. Can be any React elements that will be rendered within the message box.
 * @property {string} [text] - String that contains the text or message to be displayed inside the message box. If the `children` property is used, this text property will be ignored.
 */
export interface MessageBoxProps extends BaseMessageProps, ViewProps {
  /**
   * @property {React.ReactNode} [children]
   * @description Children to display inside the Message box.
   * Can be any React elements that will be rendered within the message box.
   * */
  children?: React.ReactNode;

  /**
   * @property {string} [text]
   * @description String that contains the text or message to be displayed inside the message box.
   * If the `children` property is used, this text property will be ignored.
   */
  text?: string;
}

/**
 * @module @flexnative/messages/styles
 * @description This module defines the styles for the Message component.
 */

/**
 * @file styles.ts
 * @description Styles applied in to Message component.
 */

import { StyleSheet } from 'react-native';
import { BaseTheme } from '@flexnative/theme-context';

import { BaseMessageProps } from './props';
import { getThemeSpaceKey, getThemeColorKey, getIconSize, getThemeFontSizeKey } from './utilities';
import { BORDER_LEFT_WIDTH, TITLE_MULTIPLIER, WHITE_COLOR } from './constants';


/**
 * @function createStyles
 * @description Creates a stylesheet for button's components with customizable styles.
 * @param {BaseMessageProps} props - The properties to customize the styles.
 * @param {BaseTheme<any>} theme - The theme from @flexnative/theme-context.
 * @returns {StyleSheet.NamedStyles<any>} A StyleSheet object containing the styles for overlay, text, and icon.
 */
export default function createStyles(props: BaseMessageProps, theme: BaseTheme<any>)
{
  const colorKey = getThemeColorKey(props.type!);
  const themeColor = theme.colors[colorKey];
  
  const themSpace = theme.spaces[getThemeSpaceKey(props.size)];
  const fontSize = theme.fontSize[getThemeFontSizeKey(props.size!)];
  const backgroundColor = props.fill === 'solid' ? themeColor : theme.colors[`${colorKey}Subtle`];
  const textColor = props.fill === 'solid' ? WHITE_COLOR : themeColor;
  const iconSize = theme.fontSize[getIconSize(props.size!)];
  const borderWidth = theme.borders?.width![props.borderWidth!] ?? props.borderWidth;

  return StyleSheet.create({
    /**
     * @property {object} container
     * @description Styles for the main container of the message box.
     */
    container: {
      display: 'flex',
      width: '100%',
      gap: themSpace,
      padding: themSpace,
      borderTopWidth: borderWidth,
      borderBottomWidth: borderWidth,
      borderRightWidth: borderWidth,
      borderLeftWidth: props.fill === 'solid' ? borderWidth : BORDER_LEFT_WIDTH,
      borderColor: themeColor,
      backgroundColor: backgroundColor,
      borderRadius: theme.borders?.radius![props?.radius!] ?? props.radius,
    },
    /**
     * @property {object} messageContainer
     * @description Styles for the container of the message content (title and text).
     */
    messageContainer: {
      flex: 1,
      gap: themSpace / 2,
      display: 'flex',
      flexDirection: 'column',
    },
    /**
     * @property {object} text
     * @description Styles for the message text.
     */
    text: {
      fontSize: fontSize,
      fontFamily: 'Regular',
      color: textColor
    },
    /**
     * @property {object} title
     * @description Styles for the message title.
     */
    title: {
      fontFamily: 'Bold',
      fontSize: Math.round(themSpace * TITLE_MULTIPLIER),
    },
    /**
     * @property {object} icon
     * @description Styles for the message icon.
     */
    icon: {
      width: iconSize,
      height: iconSize,
      fontSize: iconSize,
      userSelect: 'none',
      color: textColor
    }
  });
};

/**
 * @module @flexnative/messages/utilities
 * @description This module provides utility functions for the Message component.
 */

/**
 * @file utilities.ts
 * @description Utility functions used in the Message component.
 */

import { ColorValue } from "react-native";
import { FillMode, Type } from "./props";
import { WHITE_COLOR } from "./constants";
import { Color, FontSize, Sizes, Spaces } from "@flexnative/theme-context";
import { IconName } from "@flexnative/icons";

/**
 * @function getThemeSpaceKey
 * @description Returns the theme space key based on the provided size.
 * @param {Sizes} [size='medium'] - The size of the message box.
 * @returns {Spaces} The theme space key.
 */
export function getThemeSpaceKey(size?: Sizes): Spaces
{
  switch (size) {
    case 'small':
      return 'sm';
    
    case 'medium':
      return 'md';
      
    case 'large':
      return 'lg';
  
    default:
      return 'md';
  }
}

/**
 * @function getThemeFontSizeKey
 * @description Returns the theme font size key based on the provided size.
 * @param {Sizes} [size='medium'] - The size of the message box.
 * @returns {FontSize} The theme font size key.
 */
export function getThemeFontSizeKey(size?: Sizes): FontSize
{
  switch (size) {
    case 'small':
      return 'sm';
    
    case 'medium':
      return 'md';
      
    case 'large':
      return 'lg';
  
    default:
      return 'md';
  }
}

/**
 * @function getThemeColorKey
 * @description Returns the theme color key based on the provided message type.
 * @param {Type} type - The type of the message.
 * @returns {string} The theme color key.
 */
export function getThemeColorKey(type: Type): string
{
  switch (type) {
    case 'info':
      return 'info';
      
    case 'warning':
        return 'warning';

    case 'warning':
        return 'warning';
      
    case 'error':
      return 'error';
      
    case 'success':
      return 'success';
  
    default:
      return 'secondary';
  }
}

/**
 * @function getIconSize
 * @description Returns the icon size based on the provided message size.
 * @param {Sizes} size - The size of the message box.
 * @returns {FontSize} The icon size.
 */
export function getIconSize(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'md';
    case 'medium':
      return 'lg';
    case 'large':
      return 'xxl'
    default:
      return size;
  }
}

/**
 * @function getIcon
 * @description Returns the icon name based on the provided icon and message type.
 * @param {keyof IconName | null} icon - The custom icon name or null.
 * @param {Type} messageType - The type of the message.
 * @returns {keyof IconName} The icon name.
 */
export function getIcon(icon: keyof IconName | null, messageType: Type): keyof IconName
{
  if(icon !== undefined)
    return icon!;
  
  switch (messageType) {
    case 'info':
      return 'info-circle';
    case "warning":
      return 'warning-circle';
    case "error":
      return 'close-circle';
    case "success":
      return 'check-circle';
    case "default":
      return 'info-circle';
  }
}

/**
 * @module @flexnative/messages/index
 * @description This module exports the Message component.
 */

/**
 * @file index.tsx
 * @description Main file for the Message component.
 */

import React from "react";
import { Text, View } from "react-native";
import { useThemeState } from "@flexnative/theme-context";
import Icon from "@flexnative/icons";

import { MessageBoxProps } from "./props";
import createStyles from "./styles";
import { getIcon } from "./utilities";

/**
 * @function Message
 * @description A customizable Message component for displaying various types of messages.
 * @param {MessageBoxProps} props - The properties for the Message component.
 * @returns {JSX.Element} The Message component.
 */
const Message: React.FC<MessageBoxProps> = ({
  radius = "medium",
  borderWidth = "none",
  fill = "ghost",
  size = "medium",
  type = "default",
  icon = undefined,
  title,
  children,
  text,
  style,
  ...rest
}) => {
  const theme = useThemeState();

  const styles = createStyles(
    {
      radius,
      borderWidth,
      fill,
      size,
      type
    },
    theme
  );

  const hasIcon = Boolean(icon !== null);

  return (
    <View style={[
      styles.container,
      { flexDirection: hasIcon ? 'row' : 'column' },
      style
      ]} {...rest}>
      {
        hasIcon ?
          <>
            <Icon name={getIcon(icon!, type)} style={styles.icon} />
            <View style={styles.messageContainer}>
              {title && <Text style={[styles.text, styles.title]}>{title}</Text>}
              <Text style={styles.text}>{text}</Text>
            </View>
          </>
          : (children ?? 
            <View style={styles.messageContainer}>
              { title && <Text style={[styles.text, styles.title]}>{title}</Text> }
            <Text style={styles.text}>{text}</Text>
          </View>)
        }
    </View>
  );
};

export default Message;
