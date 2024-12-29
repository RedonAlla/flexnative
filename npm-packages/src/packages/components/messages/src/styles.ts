/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-24 20:12:20
 * @ Description: Styles applied in to Message component.
 */

import { StyleSheet } from 'react-native';
import { BaseTheme } from '@flexnative/theme-context';

import { BaseMessageProps } from './props';
import { getBackgroundColor, getTextColor } from './utilities';
import { BORDER_LEFT_WIDTH } from './constants';


/**
 * Creates a stylesheet for button's components with customizable styles.
 *
 * @param {BaseMessageProps} props - The properties to customize the styles.
 * @param {BaseTheme<any>} theme - The theme from @flexnative/theme-context.
 * @returns A StyleSheet object containing the styles for overlay, text, and icon.
 */
export default function createStyles(props: BaseMessageProps, theme: BaseTheme<any>)
{
  const themeColor = theme.colors[props.color!] ?? props.color;
  const size = theme.fontSize[props.size!] ?? theme.fontSize.default;
  const paddingVertical = size * theme.metrics.verticalMultiplier;
  const paddingHorizontal = size * theme.metrics.horizontalMultiplier;
  const backgroundColor = getBackgroundColor(themeColor, theme.metrics.ghostOpacity, props.fill!);
  const textColor = getTextColor(theme.scheme === 'light', props.color!, themeColor, props.fill!, theme.colors.black);
  const borderWidth = theme.borderWidth[props.borderWidth!] ?? props.borderWidth;

  return StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      paddingVertical: paddingVertical,
      paddingHorizontal: paddingHorizontal,
      borderTopWidth: borderWidth,
      borderBottomWidth: borderWidth,
      borderRightWidth: borderWidth,
      borderLeftWidth: props.fill === 'solid' ? borderWidth : BORDER_LEFT_WIDTH,
      borderColor: props.borderColor ?? themeColor,
      backgroundColor: backgroundColor,
      borderRadius: theme.borderRadius[props.radius!] ?? props.radius,
    },
    text: {
      fontSize: size,
      fontFamily: 'Regular',
      color: textColor
    }
  });
}