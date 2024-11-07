/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-07 19:23:22
 * @ Description: Avatar props to change the component behavior.
 */

import { IconName } from "@flexnative/icons";
import { BorderRadius, BorderWidth, Sizes } from "@flexnative/theme-context";
import { ImageProps } from 'expo-image';
import { ColorValue, TextProps, ViewProps } from "react-native";

/**
 * Defines the type of avatar to be displayed.
 * 
 * - 'image': An avatar that displays an image.
 * - 'icon': An avatar that displays an icon.
 * - 'text': An avatar that displays text.
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
 * Properties for the Avatar component.
 * 
 * @interface AvatarProps
 * @extends {ImageProps}
 * @extends {Omit<TextProps, 'style'>}
 * 
 * @property {FillMode} fillMode - Fill Mode. Defaults to 'solid'.
 * @property {BorderRadius} radius - Avatar border radius. Defaults to 'medium'.
 * @property {Sizes} size - Avatar Size. Defaults to 'normal'.
 * @property {Type} type - Avatar type. Defaults to 'image'.
 * @property {ColorValue} [color] - Color by theme or a custom color according to `react-native` ColorValue. Defaults to 'default'.
 * @property {BorderWidth} [borderWidth] - Optional avatar borders width. Defaults to 'none'.
 * @property {ColorValue} [borderColor] - Borders color according to `react-native` ColorValue.
 * @property {ColorValue} [backgroundColor] - Background color according to `react-native` ColorValue.
 * @property {string} [text] - Text to display on avatar for type `Type = 'text'`.
 * @property {ColorValue} [textColor] - Text color according to `react-native` ColorValue. Available for `Type = 'text'`.
 * @property {keyof IconName} [icon] - Name of icon. Icon props for `Avatar Type = 'icon'`.
 * @property {ColorValue} [iconColor] - Icon color according to `react-native` ColorValue. Available for `Type = 'icon'`.
 */
export interface AvatarProps extends ImageProps, Omit<TextProps, 'style'>
{
  /**
   * Fill Mode
   * @default solid
  */
  fillMode: FillMode;

  /** Avatar border radius.
  * @default 'medium'
  */
  radius: BorderRadius;

  /**
   * Avatar Size.
   * @default normal
  */
  size: Sizes;

  /**
   * Avatar type.
   * @default 'image'
  */
  type: Type;
  
  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color?: ColorValue;

  /** Optional avatar borders width.
   * @default 'none'
  */
  borderWidth?: BorderWidth;
  
  /** Borders color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /** Background color according `react-native` ColorValue. */
  backgroundColor?: ColorValue;

  /**
   * Text to display on avatar for type `Type = 'text'`
   */
  text?: string;

  /**
   * Text color according `react-native` ColorValue.
   * Available for `Type = 'text'`
  */
  textColor?: ColorValue;

  /**
   * Name of icon.
   * Icon props for `Avatar Type = 'icon'`
   */
  icon?: keyof IconName

  /**
   * Icon color according `react-native` ColorValue.
   * Available for `Type = 'icon'`
  */
  iconColor?: ColorValue;
};

/**
 * Properties for the AvatarGroup component.
 * 
 * @extends ViewProps
 * 
 * @property {'asc' | 'desc'} sortIndex - The sorting order of the avatars.
 * 
 * @property {number} [itemPadding=13] - Padding between avatar items.
 * 
 * @property {BorderWidth} [itemBorderWidth='thick'] - Optional avatar borders width.
 * 
 * @property {ColorValue} [itemBorderColor='theme.colors.card'] - Borders color according to `react-native` ColorValue.
 * 
 * @property {Array<React.ReactElement<AvatarProps>>} children - Array of Avatar components.
 */
export interface AvatarGroupProps extends ViewProps {
  sortIndex: 'asc' | 'desc';

  /**
   * Padding between avatar items.
   * @default '13'
   */
  itemPadding?: number;
  
  /** Optional avatar borders width.
   * @default 'thick'
  */
  itemBorderWidth?: BorderWidth;
  
  /** Borders color according `react-native` ColorValue.
   * @default 'theme.colors.card'
  */
  itemBorderColor?: ColorValue;

  children: Array<React.ReactElement<AvatarProps>>;
}