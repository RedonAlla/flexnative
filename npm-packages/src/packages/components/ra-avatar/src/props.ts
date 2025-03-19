/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-19 22:13:08
 * @ Description: Avatar props to change the component behavior.
 */

import { ColorValue, TextProps, ViewProps } from "react-native";
import { ImageProps } from 'expo-image';
import { IconName } from "@flexnative/icons";
import { BorderRadius, BorderWidth, Sizes } from "@flexnative/theme-context";

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

export interface AvatarProps extends ImageProps, Omit<TextProps, 'style' | 'tabIndex'>
{
  /**
   * Fill Mode
   * @default solid
  */
  fillMode?: FillMode;

  /** Avatar border radius.
  * @default 'medium'
  */
  radius?: BorderRadius;

  /**
   * Avatar Size.
   * @default normal
  */
  size?: Sizes;

  /**
   * Avatar type.
   * @default 'image'
  */
  type?: Type;
  
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