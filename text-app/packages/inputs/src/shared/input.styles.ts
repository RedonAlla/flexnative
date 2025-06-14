/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-01 16:34:08
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-25 21:14:54
 * @ Description: This file contains the style definitions for the input components.
 * It uses React Native's StyleSheet to create style objects for different input states and types.
 * The styles are created dynamically based on the provided props and theme.
 */

import { ColorValue, StyleSheet } from "react-native";
import { BaseColors, BaseTheme, BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";

import { getBoxShadowStyle, getFontSizeKey, getHelperSizeKey, getLabelSizeKey, getLineHeightKey, getThemeSpaceKey } from "./input.utilities";
import { DISABLED_OPACITY, GAP_MULTIPLIER, HORIZONTAL_PADDING_MULTIPLIER } from "../input.constants";
import { InputType } from "./input.props";


/**
 * Type definition for the style properties used to create input styles.
 */
type StyleProps = {
  type: InputType;
  color?: Color;
  size: Sizes;
  radius: BorderRadius;
  isError?: boolean;
  borderWidth?: BorderWidth;
  disabled?: boolean;
  readOnly?: boolean;
  readonly?: boolean;
  borderColor?: ColorValue;
  activeBorderColor?: ColorValue;
  backgroundColor?: ColorValue;
  activeBackgroundColor?: ColorValue;
  pressedBoxShadow?: string;
  withoutPressedBoxShadow?: boolean;
}

/**
 * Create dhe base style for input components.
 */
export const baseStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  disabled: {
    opacity: DISABLED_OPACITY
  },
  helperTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  helpText: {
    fontStyle: 'italic',
    marginLeft: 'auto',
  },
});

/**
 * Creates styles for the default input look.
 * @param props - The style properties.
 * @param theme - The base theme.
 * @returns The StyleSheet object containing the styles.
 */
export const createDefaultStyles = (props: StyleProps, theme: BaseTheme<any>) => {
  props.color = props.isError ? 'error' : props.color;
  const colorKeySubtleActive = `${props.color as string}SubtleActive` as keyof BaseColors;
  const colorKeyActive = `${props.color as string}Active` as keyof BaseColors;
  const space = theme.spaces[getThemeSpaceKey(props.size)];
  const fontSize = theme.fontSize[getFontSizeKey(props.size)];
  const lineHeight = theme.fontSize[getLineHeightKey(props.size)];
  const themeColor = theme.colors[props.color as keyof BaseColors] ?? props.color;
  const borderWidth = theme.borders?.width![props.borderWidth!] ?? props.borderWidth;
  const borderColor = props.borderColor ?? themeColor;

  return StyleSheet.create({
    container: {
      borderWidth,
      borderColor,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      paddingVertical: space,
      paddingHorizontal: space * HORIZONTAL_PADDING_MULTIPLIER,
      gap: Math.round(space * GAP_MULTIPLIER),
      borderRadius: theme.borders?.radius![props.radius] ?? props.radius,
    },
    containerFocused: {
      boxShadow: getBoxShadowStyle(props.type, props.size, theme.colors, colorKeySubtleActive, props.withoutPressedBoxShadow, props.pressedBoxShadow), 
      backgroundColor: props.activeBackgroundColor ?? 'transparent',
      borderColor: props.activeBorderColor ?? theme.colors[colorKeyActive] ?? theme.colors.defaultActive,
    },
    underlined: {
      borderRadius: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
    },
    input: {
      flex: 1,
      padding: 0,
      fontFamily: 'Regular',
      backgroundColor: 'transparent',
      fontSize: fontSize,
      height: lineHeight,
      outlineWidth: 0,
      textAlignVertical: "center",
    },
    icon: {
      width: lineHeight,
      height: lineHeight,
      fontSize: lineHeight,
      color: theme.colors.secondary,
    },
    iconFocused: {
      color: theme.colors.text
    },
    label: {
      fontFamily: 'Regular',
      color: theme.colors.text,
      fontSize: theme.fontSize[getLabelSizeKey(props.size)],
      height: lineHeight,
    },
    helpText: {
      height: lineHeight,
      color: theme.colors.text,
      fontSize: theme.fontSize[getHelperSizeKey(props.size)],
    },
    separator: {
      width: borderWidth,
      backgroundColor: borderColor,
    }
  })
}

/**
 * Creates styles for the material input look.
 * @param props - The style properties.
 * @param theme - The base theme.
 * @returns The StyleSheet object containing the styles.
 */
export const createMaterialStyles = (props: StyleProps, theme: BaseTheme<any>) => {
  props.color = props.isError ? 'error' : props.color;
  const colorKeySubtleActive = `${props.color as string}SubtleActive` as keyof BaseColors;
  const colorKeyActive = `${props.color as string}Active` as keyof BaseColors;
  const space = theme.spaces[getThemeSpaceKey(props.size)];
  const fontSize = theme.fontSize[getFontSizeKey(props.size)];
  const lineHeight = theme.fontSize[getLineHeightKey(props.size)];
  const themeColor = theme.colors[props.color as keyof BaseColors] ?? props.color;
  const iconSize = Math.round((lineHeight * 1.8) + (space * 0.5));
  const borderWidth = theme.borders?.width![props.borderWidth!] ?? props.borderWidth;
  const borderColor = props.borderColor ?? themeColor;
  const labelFontSize = theme.fontSize[getHelperSizeKey(props.size)];

  return StyleSheet.create({
    wrapper: {
      borderWidth,
      borderColor,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      gap: space,
      paddingVertical: space,
      paddingHorizontal: space * HORIZONTAL_PADDING_MULTIPLIER,
      borderRadius: theme.borders?.radius![props.radius] ?? props.radius,
    },
    wrapperFocused: {
      boxShadow: getBoxShadowStyle(props.type, props.size, theme.colors, colorKeySubtleActive, props.withoutPressedBoxShadow, props.pressedBoxShadow), 
      backgroundColor: props.activeBackgroundColor ?? 'transparent',
      borderColor: props.activeBorderColor ?? theme.colors[colorKeyActive] ?? theme.colors.defaultActive,
    },
    underlined: {
      borderRadius: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
    },
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
    },
    input: {
      flex: 1,
      padding: 0,
      fontFamily: 'Regular',
      backgroundColor: 'transparent',
      fontSize: fontSize,
      outlineWidth: 0
    },
    icon: {
      textAlign: 'center',
      verticalAlign: 'middle',
      width: iconSize,
      height: iconSize,
      fontSize: iconSize,
      color: theme.colors.secondary,
    },
    iconFocused: {
      color: theme.colors.text
    },
    label: {
      fontFamily: 'Regular',
      color: theme.colors.text,
      fontSize: labelFontSize,
      display: 'flex',
      alignItems: 'baseline',
    },
    helpText: {
      color: theme.colors.text,
      fontSize: labelFontSize,
    },
    separator: {
      width: borderWidth,
      backgroundColor: borderColor,
    }
  })
}

/**
 * Creates styles for the inline input look.
 * @param props - The style properties.
 * @param theme - The base theme.
 * @returns The StyleSheet object containing the styles.
 */
export const createInlineStyles = (props: StyleProps, theme: BaseTheme<any>) => {
  props.color = props.isError ? 'error' : props.color;
  const colorKeySubtleActive = `${props.color as string}SubtleActive` as keyof BaseColors;
  const colorKeyActive = `${props.color as string}Active` as keyof BaseColors;
  const space = theme.spaces[getThemeSpaceKey(props.size)];
  const fontSize = theme.fontSize[getFontSizeKey(props.size)];
  const lineHeight = theme.fontSize[getLineHeightKey(props.size)];
  const themeColor = theme.colors[props.color as keyof BaseColors] ?? props.color;
  const borderWidth = theme.borders?.width![props.borderWidth!] ?? props.borderWidth;
  const borderColor = props.borderColor ?? themeColor;

  return StyleSheet.create({
    container: {
      borderWidth,
      borderColor,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      paddingVertical: space,
      paddingHorizontal: space * HORIZONTAL_PADDING_MULTIPLIER,
      gap: Math.round(space * GAP_MULTIPLIER),
      borderRadius: theme.borders?.radius![props.radius] ?? props.radius,
    },
    containerFocused: {
      boxShadow: getBoxShadowStyle(props.type, props.size, theme.colors, colorKeySubtleActive, props.withoutPressedBoxShadow, props.pressedBoxShadow), 
      backgroundColor: props.activeBackgroundColor ?? 'transparent',
      borderColor: props.activeBorderColor ?? theme.colors[colorKeyActive] ?? theme.colors.defaultActive,
    },
    underlined: {
      borderRadius: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
    },
    input: {
      flex: 1,
      padding: 0,
      outlineWidth: 0,
      fontSize: fontSize,
      height: lineHeight,
      textAlign: 'right',
      fontFamily: 'Regular',
      textAlignVertical: "center",
      backgroundColor: 'transparent',
    },
    icon: {
      width: lineHeight,
      height: lineHeight,
      fontSize: lineHeight,
      color: theme.colors.secondary,
    },
    iconFocused: {
      color: theme.colors.text
    },
    label: {
      fontFamily: 'Regular',
      textAlignVertical: "bottom",
      color: theme.colors.text,
      fontSize: theme.fontSize[getLabelSizeKey(props.size)],
    },
    helpText: {
      color: theme.colors.text,
      fontSize: theme.fontSize[getHelperSizeKey(props.size)],
    },
    separator: {
      width: borderWidth,
      backgroundColor: borderColor,
    }
  })
}