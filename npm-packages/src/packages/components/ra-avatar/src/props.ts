/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-24 20:50:49
 * @ Description: Defines the properties for the `Avatar` and `AvatarGroup` components.
 */

import { ColorValue, TextProps, ViewProps } from "react-native";
import { ImageProps } from 'expo-image';
import { IconName } from "@flexnative/icons";
import { BorderRadius, BorderWidth, Sizes } from "@flexnative/theme-context";

/**
 * Defines the type of avatar to be displayed.
 * 
 * - `image`: An avatar that displays an image.
 * - `icon`: An avatar that displays an icon.
 * - `text`: An avatar that displays text.
 */
export type Type = 'image' | 'icon' | 'text';

/**
 * Represents the fill mode for an avatar component.
 * 
 * - `solid`: The avatar will have a solid fill.
 * - `none`: The avatar will have no fill.
 * - `ghost`: The avatar will have a ghost fill.
 */
export type FillMode = 'solid' | 'none' | 'ghost';


/**
 * @interface AvatarProps
 * @description Properties for the `Avatar` component.
 * @extends ImageProps
 * @extends Omit<TextProps, 'style' | 'tabIndex'>
 * 
 * @example
 * ```typescript jsx
 * <Avatar type="image" source={{ uri: 'https://example.com/image.jpg' }} />
 * <Avatar type="icon" icon="user" color="primary" />
 * <Avatar type="text" text="RA" textColor="white" backgroundColor="blue" />
 * ```
 */
export interface AvatarProps extends ImageProps, Omit<TextProps, 'style' | 'tabIndex'>
{
  /**
   * The fill mode of the avatar.
   * @default solid
  */
  fillMode?: FillMode;

  /** The border radius of the avatar.
  * @default 'medium'
  */
  radius?: BorderRadius;

  /**
   * The size of the avatar.
   * @default normal
  */
  size?: Sizes;

  /**
   * The type of the avatar.
   * @default 'image'
  */
  type?: Type;
  
  /** The type of the avatar.
   * @default 'default'
  */
  color?: ColorValue;

  /** The border width of the avatar.
   * @default 'none'
  */
  borderWidth?: BorderWidth;
  
  /** The border color of the avatar. */
  borderColor?: ColorValue;

  /** The background color of the avatar. */
  backgroundColor?: ColorValue;

  /**
   * The text to display on the avatar (for `type='text'`).
   */
  text?: string;

  /**
   * The text color of the avatar (for `type='text'`).
  */
  textColor?: ColorValue;

  /**
   * The name of the icon to display (for `type='icon'`).
   */
  icon?: keyof IconName

  /**
   * The color of the icon (for `type='icon'`).
  */
  iconColor?: ColorValue;
};

/**
 * Properties for the AvatarGroup component.
 * @interface AvatarGroupProps
 * @extends ViewProps
 */
export interface AvatarGroupProps extends ViewProps {
  /**
   * The sorting order of the avatars within the group.
   * - `asc` for ascending order,
   * - `desc` for descending order.
   * @default 'asc'
  */
  sortIndex: 'asc' | 'desc';

  /**
   * The padding between each avatar item in the group.
   * @default '13'
   */
  itemPadding?: number;
  
  /** The border width of each avatar item..
   * @default 'thick'
  */
  itemBorderWidth?: BorderWidth;
  
  /** The border color of each avatar item. Defaults to the `card` color from the theme.
   * @default 'theme.state.colors.card'
  */
  itemBorderColor?: ColorValue;

  /**
   * An array of `Avatar` components to be displayed in the group.
   */
  children: Array<React.ReactElement<AvatarProps>>;
}