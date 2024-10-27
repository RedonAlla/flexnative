/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-19 23:47:23
 * @ Description: Avatar props to change the component behavior.
 */

import { IconName } from "@flexnative/icons";
import { ImageProps } from 'expo-image';
import { ColorValue, TextProps, ViewProps } from "react-native";

export type Type = 'image' | 'icon' | 'text';
export type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'full' | number;
export type BorderWidth = 'none' | 'hairline' | 'thin' | 'base' | 'thick' | number;
export type Sizes = 'small' | 'medium' | 'large' | number;
export type AvatarColor = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | ColorValue;
export type FillMode = 'solid' | 'none' | 'ghost';


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