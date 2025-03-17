/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-17 23:24:40
 * @ Description: Styles applied in to Button component.
 */

import { ColorValue, StyleSheet } from 'react-native';

import { getBoxShadowWidth, getIconSize, getTextColor, getTextColorPressed } from './utilities';
import { BaseButtonProps, ButtonType } from './props';
import { HORIZONTAL_PADDING_MULTIPLIER, DISABLED_OPACITY, WHITE_COLOR, GAP_MULTIPLIER } from './constants';
import { BaseTheme } from '@flexnative/theme-context';


/**
 * Creates a stylesheet for button's components with customizable styles.
 *
 * @param props - The properties to customize the styles.
 * @param props.isLink - Determines if the text should be styled as a link.
 * @param props.fontSize - The font size for the text and icon.
 * @param props.overlayColor - The background color for the overlay.
 *
 * @returns A StyleSheet object containing the styles for overlay, text, and icon.
 */
export default function createStyles(props: BaseButtonProps, theme: BaseTheme<any>)
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

/**
 * Returns the text color for a button based on its pressed state and type.
 *
 * @param pressed - A boolean indicating whether the button is pressed.
 * @param type - The type of the button.
 * @returns An object containing the color value if the button is pressed and of type 'inverse', otherwise undefined.
 */
export function pressedTextColor(pressed: boolean, type: ButtonType): { color: ColorValue} | undefined {
  if (pressed && type === 'inverse')
    return { color: WHITE_COLOR };
  
  return undefined;
}