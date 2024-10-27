/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-19 23:50:03
 * @ Description: Styles applied in to Avatar component.
 */

import { ColorValue, StyleSheet } from 'react-native';
import { BaseTheme } from '@flexnative/theme-context';

import { FillMode, BorderWidth, Sizes, Type, AvatarColor, BorderRadius } from "./props";
import { getColor, getSize, getBackgroundColor, getBorderWidth, getBorderRadius, getTextColor } from './utilities';


type AvatarItemStyleProps = {
  size: Sizes;
  type: Type;
  color: AvatarColor;
  fillMode: FillMode;
  radius: BorderRadius;
  borderWidth?: BorderWidth;
  borderColor?: ColorValue;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  iconColor?: ColorValue;
  theme: {
    colors: BaseTheme;
    isDark: boolean;
  }
}

type AvatarGroupStyleProps = {
  itemPadding: number;
  itemBorderWidth?: BorderWidth;
  itemBorderColor?: ColorValue;
  theme: {
    colors: BaseTheme;
  }
}

export default function applyStyle(props: AvatarItemStyleProps) {
  const size = getSize(props.size);
  const color = getColor(props.color, props.theme.colors);
  const textColor = getTextColor(props.color, props.fillMode, !props.theme.isDark, props.theme.colors);

  return StyleSheet.create({
    container: {
      width: size,
      height: size,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.backgroundColor || getBackgroundColor(color, props.fillMode),
      borderColor: props.borderColor || color,
      borderRadius: getBorderRadius(props.radius),
      borderWidth: getBorderWidth(props.borderWidth),
      borderStyle: 'solid'
    },
    text: {
      fontFamily: 'Medium',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: props.textColor || textColor
    },
    icon: {
      fontFamily: 'Icons',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: props.iconColor || textColor,
      fontSize: size / 2
    },
  });
}

export function applyGroupStyle(props: AvatarGroupStyleProps) {
  const color = getColor(props.itemBorderColor!, props.theme.colors);

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
      borderColor: props.itemBorderColor || color,
      borderWidth: getBorderWidth(props.itemBorderWidth),
    }
  });
}