/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: It creates dynamic styles for input components using the StyleSheet API from React Native. The styles are generated based on properties provided to the createStyles function, allowing for customizable appearance and behavior.
 */

import { ColorValue, StyleSheet } from "react-native";
import { BaseTheme, BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";

import { InputType } from "./input.props";
import { getBorders } from "./input.utilities";

import {
  ICON_MULTIPLIER,
  ICON_SEPARATOR_WIDTH,
  MAT_ICON_MULTIPLIER,
  PADDING_HORIZONTAL_MULTIPLIER,
  PADDING_VERTICAL_MULTIPLIER,
  TEXT_HELPER_MARGIN_TOP_MULTIPLIER,
  TEXT_HELPER_MULTIPLIER
} from "./input.constants";

/**
 * Defines the properties for styling a container element, specifically used for input components.
 */
type ContainerProps = {
  type: InputType;
  color: Color;
  size: Sizes;
  radius: BorderRadius;
  borderWidth?: BorderWidth;
  disabled?: boolean;
  readOnly?: boolean;
  readonly?: boolean;
  borderColor?: ColorValue;
  activeBorderColor?: ColorValue;
  backgroundColor?: ColorValue;
  activeBackgroundColor?: ColorValue;
  material?: boolean;
  theme: BaseTheme<any>;
}

/**
 * Generates a set of styles for a Input components.
 * This function takes ContainerProps as input and utilizes various properties to determine the appearance of several elements within the container component. Here's a breakdown of what each part of the code does:
 * @param {ContainerProps} props - Input UI props.
 * @returns - Set of styles for a Input components.
 */
export function createStyles(props: ContainerProps) {
  /**
   * Determine font size based on props size or use default if not provided.
   */
  const fontSize = props.theme.fontSize[props.size] ?? props.theme.fontSize.default;

  /**
   * Set theme color using provided color or fallback to the specified prop color.
   */
  const themeColor = props.theme.colors[props.color] ?? props.color;

  /**
   * Use specified background color or default to transparent.
   */
  const backgroundColor = props.backgroundColor ?? 'transparent';

  /**
   * Calculate vertical padding as a multiplier of the font size.
   */
  const paddingVertical = PADDING_VERTICAL_MULTIPLIER * fontSize;

  /**
   * Calculate horizontal padding similarly
   */
  const paddingHorizontal = PADDING_HORIZONTAL_MULTIPLIER * fontSize;

  /**
   * Determine border radius from theme settings or use directly from props.
   */
  const borderRadius = props.theme.borderRadius[props.radius] ?? props.radius;

  /**
   * Compute icon size differently for material design versus default.
   */
  const iconSize =
    props.material
      ? fontSize * MAT_ICON_MULTIPLIER
      : fontSize * ICON_MULTIPLIER;

  /**
   * Decide focus border color based on readonly status and other conditions.
   */
  const focusBorderColor = props.readOnly
    ? props.borderColor ?? themeColor
    : props.activeBorderColor ?? props.theme.colors.primary;
  
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    input: {
      flex: 1,
      outlineWidth: 0,
      //@ts-ignore
      minWidth: 'inherit',
      outlineStyle: "none",
      fontSize: fontSize,
      fontFamily: 'Regular',
      backgroundColor: 'transparent',
      color: props.theme.colors.text,
      alignVertical: 'center'
    },
    icon: {
      width: iconSize,
      height: '100%',
      fontSize: iconSize,
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: paddingVertical,
      borderColor: props.borderColor || themeColor,
      paddingVertical: paddingVertical,
      borderRadius: props.type === 'underlined' ? 0 : borderRadius,
      paddingHorizontal: props.type === 'underlined'
        ? 0
        : (props.radius === 'full' && props.material)
          ? 2 * paddingHorizontal
          : paddingHorizontal,
      ...getBorders(props.type, props.theme.borderWidth[props.borderWidth!] ?? props.borderWidth),
    },
    containerFocus: {
      backgroundColor: props.activeBackgroundColor ?? backgroundColor,
      borderColor: focusBorderColor,
    },
    containerNotFocus: {
      borderColor: props.disabled ? 'transparent' : props.borderColor || themeColor,
      backgroundColor:
        props.disabled
          ? props.theme.colors.default
          : backgroundColor
    },
    text: {
      fontFamily: 'Regular',
      color: props.theme.colors.text,
    },
    label: {
      fontFamily: 'Regular',
      color: props.theme.colors.text,
      marginBottom: TEXT_HELPER_MARGIN_TOP_MULTIPLIER * paddingVertical,
      fontSize: props.material ? TEXT_HELPER_MULTIPLIER * fontSize : fontSize,
    },
    helpTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      justifyContent: 'space-between',
      marginTop: TEXT_HELPER_MARGIN_TOP_MULTIPLIER * fontSize,
      paddingHorizontal: borderRadius,
    },
    helpText: {
      fontStyle: 'italic',
      fontSize: TEXT_HELPER_MULTIPLIER * fontSize,
    },
    txtCounter: {
      fontStyle: 'italic',
      marginLeft: 'auto',
      fontSize: TEXT_HELPER_MULTIPLIER * fontSize,
    },
    prefixSeparator: {
      textAlign: 'left',
      width: paddingVertical + iconSize,
      borderRightWidth: ICON_SEPARATOR_WIDTH,
      borderRightColor: props.theme.colors.border,
    },
    suffixSeparator: {
      textAlign: 'right',
      width: paddingVertical + iconSize,
      borderLeftWidth: ICON_SEPARATOR_WIDTH,
      borderLeftColor: props.theme.colors.border,
    }
  });
}

export function materialStyle() {
  return StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
  });
};