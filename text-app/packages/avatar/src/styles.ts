/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-12 22:46:05
 * @ Description: Defines the styling functions for the `Avatar` and `AvatarGroup` components.
 *              This module provides functions to generate style objects based on the provided props and theme.
 */

import { ColorValue, StyleSheet } from 'react-native';
import { BaseTheme, BorderRadius, BorderWidth, Sizes } from '@flexnative/theme-context';

import { FillMode } from './props';
import { AVATAR_SIZES } from './constants';
import { getBackgroundColor, getTextColor } from './utilities';


/**
 * Properties used to style an individual `Avatar` component.
 * 
 * @typedef {Object} AvatarItemStyleProps
 * */
type AvatarItemStyleProps = {
  /**
   * Size of the avatar.
   */
  size: Sizes;
  
  /**
   * Color of the avatar.
   */
  color: ColorValue;

  /**
   * Border radius of the avatar.
   */
  radius: BorderRadius;

  /**
   * The fill mode of the avatar.
   */
  fillMode: FillMode;

  /**
   * Width of the border around the avatar.
   */
  borderWidth?: BorderWidth;

  /**
   * Color of the border around the avatar.
   */
  borderColor?: ColorValue;

  /**
   * Background color of the avatar.
   */
  backgroundColor?: ColorValue;

  /**
   * Text color of the avatar.
   */
  textColor?: ColorValue;

  /**
   * Icon color of the avatar.
   */
  iconColor?: ColorValue;
}

/**
 * Properties used to style an `AvatarGroup` component.
 * @typedef {Object} AvatarGroupStyleProps
 */
type AvatarGroupStyleProps = {
  /**
   * Padding between items in the avatar group.
   */
  itemPadding: number;

  /**
   * Width of the border around each item in the avatar group.
   * Optional.
   */
  itemBorderWidth: number;

  /**
   * Color of the border around each item in the avatar group.
   * Optional.
   */
  itemBorderColor?: ColorValue;
}

/**
 * Generates a `StyleSheet` object for an `Avatar` component based on the provided props and theme.
 * 
 * @function applyStyle
 * @param {AvatarItemStyleProps} props - The properties used to style the avatar.
 * @param {BaseTheme<any>} theme - The current theme object.
 * @returns {StyleSheet.NamedStyles<any>} A `StyleSheet` object containing the styles for the avatar.
 *
 * @example
 * ```typescript
 * const theme = useThemeState();
 * const styles = applyStyle({ size: 'medium', color: 'primary', radius: 'medium', fillMode: 'solid' }, theme);
 * ```
 */
export default function applyStyle(props: AvatarItemStyleProps, theme: BaseTheme<any>): StyleSheet.NamedStyles<any> {
  const size = AVATAR_SIZES[props.size] ?? props.size;
  const themeColor = theme.colors[props.color] ?? props.color!
  
  return StyleSheet.create({
    container: {
      width: size,
      height: size,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.backgroundColor ?? getBackgroundColor(props.fillMode, themeColor, theme.colors[`${props.color as string}Subtle`]),
      borderColor: props.borderColor || props.color,
      borderRadius: theme.borders.radius![props.radius] ?? props.radius,
      borderWidth: theme.borders.width![props.borderWidth!] ?? props.borderWidth,
      borderStyle: 'solid'
    },
    text: {
      fontFamily: 'Medium',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: props.textColor ?? getTextColor(theme.isDark, props.color, themeColor, props.fillMode, theme.colors.black),
      fontSize: size
    },
    icon: {
      fontFamily: 'Icons',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: props.iconColor ?? getTextColor(theme.isDark, props.color, themeColor, props.fillMode, theme.colors.black),
      fontSize: size / 2
    },
  });
}

/**
 * Generates a `StyleSheet` object for an `AvatarGroup` component based on the provided props.
 * 
 * @function applyGroupStyle
 * @param {AvatarGroupStyleProps} props - The properties used to style the avatar group.
 * @returns {StyleSheet.NamedStyles<any>} A `StyleSheet` object containing the styles for the avatar group.
 *
 * @example
 * ```typescript
 * const styles = applyGroupStyle({ itemPadding: 8, itemBorderWidth: 2, itemBorderColor: 'primary' });
 * ```
 */
export function applyGroupStyle(props: AvatarGroupStyleProps) {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      marginStart: props.itemPadding
    },
    item: {
      borderRadius: 50,
      marginStart: -1 * props.itemPadding,
      borderColor: props.itemBorderColor,
      borderWidth: props.itemBorderWidth,
    }
  });
}