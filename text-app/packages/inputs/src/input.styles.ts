/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: It creates dynamic styles for input components using the StyleSheet API from React Native. The styles are generated based on properties provided to the createStyles function, allowing for customizable appearance and behavior.
 */

import { ColorValue, StyleSheet } from "react-native";
import { BaseTheme, BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";
import { InputType } from "./shared/input.props";


/**
 * Defines the properties for styling a container element, specifically used for input components.
 */
type ContainerProps = {
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
   * Set theme color using provided color or fallback to the specified prop color.
   */
  const themeColor = props.color === undefined
    ? props.theme.colors.border
    : props.theme.colors[props.color!] ?? props.color;

  /**
   * Use specified background color or default to transparent.
   */
  const backgroundColor = props.backgroundColor ?? 'transparent';

  /**
   * Decide focus border color based on readonly status and other conditions.
   */
  const focusBorderColor = props.readOnly
    ? props.borderColor ?? themeColor
    : props.activeBorderColor ?? props.theme.colors.primary;
  
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    input: {
      flex: 1,
      outlineWidth: 0,
      paddingHorizontal: 0,
      paddingBottom: 0,
      //@ts-ignore
      minWidth: 'inherit',
      outlineStyle: undefined,
      fontFamily: 'Regular',
      backgroundColor: 'transparent',
      color: props.theme.colors.text,
      alignVertical: 'center'
    },
    icon: {
      height: '100%',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: props.isError ? props.theme.colors.error : props.theme.colors.text,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerFocus: {
      backgroundColor: props.activeBackgroundColor ?? backgroundColor,
      borderColor: props.isError ? props.theme.colors.error : focusBorderColor,
    },
    containerNotFocus: {
      borderColor: props.isError
        ? props.theme.colors.error
        : props.disabled ? 'transparent' : props.borderColor || themeColor,
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
      color: props.isError ? props.theme.colors.error : props.theme.colors.text,
    },
    helpTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      justifyContent: 'space-between',
    },
    helpText: {
      fontStyle: 'italic',
    },
    txtCounter: {
      fontStyle: 'italic',
      marginLeft: 'auto',
    },
    prefixSeparator: {
      textAlign: 'left',
      borderRightColor: props.theme.colors.border,
    },
    suffixSeparator: {
      textAlign: 'right',
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