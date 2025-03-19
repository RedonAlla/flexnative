/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-19 22:21:01
 * @ Description: Styles applied in to Avatar component.
 */

import { ColorValue, StyleSheet } from 'react-native';
import { BaseTheme, BorderRadius, BorderWidth, Sizes } from '@flexnative/theme-context';

import { FillMode } from './props';
import { AVATAR_SIZES } from './constants';
import { getBackgroundColor, getTextColor } from './utilities';

type AvatarItemStyleProps = {
  size: Sizes;
  color: ColorValue;
  radius: BorderRadius;
  fillMode: FillMode;
  borderWidth?: BorderWidth;
  borderColor?: ColorValue;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  iconColor?: ColorValue;
}

/**
 * Properties for styling an avatar group component.
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

export default function applyStyle(props: AvatarItemStyleProps, theme: BaseTheme<any>) {
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