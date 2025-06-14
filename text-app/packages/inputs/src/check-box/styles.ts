/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: This file defines the styles for the CheckBox component.
 */

import { ColorValue, StyleSheet } from 'react-native';

import { BaseColors, BaseTheme } from '@flexnative/theme-context';

import { BaseCheckBoxProps } from './props';
import { GAP_MULTIPLIER } from '../input.constants';
import { getBoxShadowWidth, getFontSizeKey, getIconColor, getLineHeightKey, getThemeSpaceKey } from './utilities';

type ThemeColorKey = keyof BaseColors;

/**
 * Creates a StyleSheet object for styling the CheckBox component.
 *
 * @param {BaseCheckBoxProps} props - The properties passed to the CheckBox component.
 * @param {BaseTheme<BaseColors>} theme - The application's theme object.
 * @returns {StyleSheet} A StyleSheet object containing the styles for the CheckBox.
 */
export const createStyles = (props: BaseCheckBoxProps, theme: BaseTheme<BaseColors>) => {
  const spaces = theme.spaces[getThemeSpaceKey(props.size!)];
  const fontSize = theme.fontSize[getFontSizeKey(props.size!)];
  const lineHeight = theme.fontSize[getLineHeightKey(props.size!)];
  const themeColor = theme.colors[props.color as ThemeColorKey] ?? props.color as ColorValue;
  const iconColor = getIconColor(theme.isDark, props.color!, themeColor, props.type!, theme.colors.black);

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: Math.round(spaces * GAP_MULTIPLIER),
    },
    checkBox: {
      overflow: 'hidden',
      width: lineHeight,
      height: lineHeight,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borders?.radius![props?.radius!] ?? props.radius,
      borderWidth: theme.borders?.width![props.borderWidth!] ?? props.borderWidth,
    },
    checkBoxPressed: {
      boxShadow: props.pressedBoxShadow ?? `0 0 0px ${getBoxShadowWidth(props.size!)} ${String(theme.colors[`${props.color as ThemeColorKey}SubtleActive` as ThemeColorKey])}`
    },
    typeDefault: {
      backgroundColor: props.backgroundColor ?? 'transparent',
      borderColor: props.borderColor ?? theme.colors.border,
    },
    typeDefaultChecked: {
      backgroundColor: props.backgroundColor ?? themeColor,
      borderColor: themeColor,
    },
    typeGhost: {
      backgroundColor: props.backgroundColor ?? theme.colors[`${props.color as ThemeColorKey}Subtle` as ThemeColorKey],
      borderColor: props.borderColor ?? 'transparent',
    },
    typeGhostChecked: {
      backgroundColor: props.checkedBackgroundColor ?? theme.colors[`${props.color as ThemeColorKey}SubtleHover` as ThemeColorKey],
      borderColor: props.checkedBorderColor ?? 'transparent',
    },
    typeSolid: {
      backgroundColor: props.backgroundColor ?? theme.colors.border,
      borderColor: props.borderColor ?? 'transparent',
    },
    typeSolidChecked: {
      backgroundColor: props.checkedBackgroundColor ?? themeColor,
      borderColor: props.checkedBorderColor ?? props.borderColor ?? themeColor,
    },
    typeOutlined: {
      backgroundColor: props.backgroundColor ?? 'transparent',
      borderColor: props.borderColor ?? themeColor,
    },
    typeOutlinedChecked: {
      backgroundColor: props.checkedBorderColor ?? 'transparent',
      borderColor: props.checkedBorderColor ?? themeColor,
    },
    icon: {
      userSelect: 'none',
      textAlign: 'center',
      fontFamily: 'Icons',
      fontWeight: 'bold',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: lineHeight,
      height: lineHeight,
      fontSize: fontSize,
      color: iconColor,
    },
    label: {
      userSelect: 'none',
      fontFamily: 'Regular',
      lineHeight: lineHeight,
      fontSize: fontSize,
      color: theme.colors.text,
    },
  });
}