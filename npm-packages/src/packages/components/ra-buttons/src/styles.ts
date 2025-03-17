/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-18 00:14:46
 * @ Description: This module provides the `createStyles` function, which is responsible for generating the styles for the `Button` component.
 *              It utilizes the theme context and various utility functions to create a dynamic stylesheet that adapts to different button types, sizes, and states.
 */

import { StyleSheet } from 'react-native';
import { BaseTheme } from '@flexnative/theme-context';

import { getBoxShadowWidth, getIconSize, getTextColor, getTextColorPressed } from './utilities';
import { BaseButtonProps } from './props';
import { HORIZONTAL_PADDING_MULTIPLIER, DISABLED_OPACITY, GAP_MULTIPLIER } from './constants';


/**
 * Creates a StyleSheet object containing the styles for the `Button` component.
 * It dynamically generates styles based on the provided properties and the theme context.
 * @param {BaseButtonProps} props - The properties to customize the button's styles, including size, type, color, radius, etc.
 * @param {BaseTheme<any>} theme - The current theme context, providing colors, font sizes, spacing, and border configurations.
 * @returns {StyleSheet.NamedStyles<any>} A StyleSheet object containing the styles for the button.
 * @example
 * ```typescript
 * const theme = useThemeContext();
 * const styles = createStyles({ size: 'medium', color: 'primary', type: 'default' }, theme.state);
 * // Use the styles in your Button component: <Pressable style={styles.container}>...</Pressable>
 * ```
 */
export default function createStyles(props: BaseButtonProps, theme: BaseTheme<any>): StyleSheet.NamedStyles<any>
{
  const iconSize = theme.fontSize[getIconSize(props.size)];
  const themeColor = theme.colors[props.color] ?? props.color;
  const textColor = getTextColor(theme.isDark, props.color, themeColor, props.type, theme.colors.black);
  const boxShadow = props.pressedBoxShadow ?? `0 0 0px ${getBoxShadowWidth(props.size)} ${theme.colors[`${props.color as string}SubtleActive`]}`;

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      justifyContent: 'center',
      borderRadius: theme.borders?.radius![props?.radius!] ?? props.radius,
      borderWidth: theme.borders?.width![props.borderWidth!] ?? props.borderWidth,
    },
    block: {
      alignSelf: "stretch"
    },
    sizeSmall: {
      gap: Math.round(theme.spaces.xxs * GAP_MULTIPLIER),
      paddingVertical: theme.spaces.xxs,
      paddingHorizontal: theme.spaces.xxs * HORIZONTAL_PADDING_MULTIPLIER,
    },
    sizeMedium: {
      gap: Math.round(theme.spaces.xs * GAP_MULTIPLIER),
      paddingVertical: theme.spaces.xs,
      paddingHorizontal: theme.spaces.xs * HORIZONTAL_PADDING_MULTIPLIER,
    },
    sizeLarge: {
      gap: Math.round(theme.spaces.sm * GAP_MULTIPLIER),
      paddingVertical: theme.spaces.sm,
      paddingHorizontal: theme.spaces.sm * HORIZONTAL_PADDING_MULTIPLIER,
    },
    typeDefault: {
      backgroundColor: themeColor,
      borderColor: props.borderColor ?? themeColor,
    },
    typeDefaultPressed: {
      boxShadow,
      backgroundColor: props.activeColor ?? theme.colors[`${props.color as string}Active`],
      borderColor: props.activeBorderColor ?? props.borderColor ?? themeColor,
    },
    typeGhost: {
      backgroundColor: theme.colors[`${props.color as string}Subtle`],
      borderColor: props.borderColor ?? 'transparent',
    },
    typeGhostPressed: {
      boxShadow,
      backgroundColor: props.activeColor ?? theme.colors[`${props.color as string}SubtleHover`],
      borderColor: props.activeBorderColor ?? 'transparent',
    },
    typeInverse: {
      backgroundColor: 'transparent',
      borderColor: props.borderColor ?? 'transparent',
    },
    typeInversePressed: {
      boxShadow,
      backgroundColor: props.activeColor ?? themeColor,
      borderColor: props.activeBorderColor ?? props.borderColor ?? themeColor,
    },
    typeText: {
      backgroundColor: 'transparent',
      borderColor: props.borderColor ?? 'transparent',
    },
    typeTextPressed: {
      borderColor: props.activeBorderColor ?? 'transparent',
      backgroundColor: props.activeColor ?? theme.colors[`${props.color as string}SubtleHover`],
    },
    typeLink: {
      backgroundColor: 'transparent',
      borderColor: props.borderColor ?? 'transparent',
    },
    typeLinkPressed: {
      backgroundColor: props.activeBorderColor ?? 'transparent',
      borderColor: props.activeBorderColor ?? 'transparent',
    },
    buttonDisabled: {
      opacity: DISABLED_OPACITY,
    },
    text: {
      alignSelf: "stretch",
      marginTop: "auto",
      marginBottom: "auto",
      textAlign: 'center',
      userSelect: 'none',
      fontFamily: 'Regular',
      textDecorationLine: props.type === 'link' ? 'underline' : 'none',
    },
    textColor: {
      color: textColor
    },
    textColorPressed: {
      color: props.type !== 'inverse'
        ? textColor
        : getTextColorPressed(theme.isDark, props.color, textColor, theme.colors.black)
    },
    textSmall: {
      lineHeight: theme.fontSize.md,
      fontSize: theme.fontSize.sm
    },
    textMedium: {
      lineHeight: theme.fontSize.lg,
      fontSize: theme.fontSize.md
    },
    textLarge: {
      lineHeight: theme.fontSize.xxl,
      fontSize: theme.fontSize.lg
    },
    icon: {
      alignSelf: "stretch",
      marginTop: "auto",
      marginBottom: "auto",
      textAlign: 'center',
      userSelect: 'none',
      width: iconSize,
      height: iconSize,
      fontSize: iconSize
    },
    iconSmall: {
      fontSize: iconSize
    },
  })
}