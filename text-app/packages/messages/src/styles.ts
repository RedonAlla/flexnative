/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-30 23:57:27
 * @ Description: Styles applied in to Message component.
 */

import { StyleSheet } from 'react-native';
import { BaseTheme } from '@flexnative/theme-context';

import { BaseMessageProps } from './props';
import { getThemeSpaceKey, getThemeColorKey, getIconSize, getThemeFontSizeKey } from './utilities';
import { BORDER_LEFT_WIDTH, TITLE_MULTIPLIER, WHITE_COLOR } from './constants';


/**
 * Creates a stylesheet for Message box components with customizable styles.
 *
 * @param {BaseMessageProps} props - The properties to customize the styles.
 * @param {BaseTheme<any>} theme - The theme from @flexnative/theme-context.
 * @returns A StyleSheet object containing the styles for overlay, text, and icon.
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
    messageContainer: {
      flex: 1,
      gap: themSpace / 2,
      display: 'flex',
      flexDirection: 'column',
    },
    text: {
      fontSize: fontSize,
      fontFamily: 'Regular',
      color: textColor
    },
    title: {
      fontFamily: 'Bold',
      fontSize: Math.round(themSpace * TITLE_MULTIPLIER),
    },
    icon: {
      width: iconSize,
      height: iconSize,
      fontSize: iconSize,
      userSelect: 'none',
      color: textColor
    }
  });
};