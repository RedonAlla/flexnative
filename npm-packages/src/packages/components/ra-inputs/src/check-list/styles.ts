/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: This code defines a function `createStyles` that generates a set of styles for a component based on the provided `StyleProps`. It utilizes theme properties such as font size, colors, and border radius to create responsive and consistent styles. The function returns a StyleSheet object containing styles for various elements like the container, label, and help text, adjusting properties based on the input props.
 */

import { ColorValue, StyleSheet } from 'react-native';

import { BaseTheme, BorderRadius, BorderWidth, Color, Sizes } from '@flexnative/theme-context';

import { InputType } from '../input.props';
import { getBorders } from '../input.utilities';
import { PADDING_HORIZONTAL_MULTIPLIER, PADDING_VERTICAL_MULTIPLIER, TEXT_HELPER_MULTIPLIER } from '../input.constants';


/**
 * This TypeScript code defines a type named `StyleProps` which is used to specify the properties for styling components. 
 * It includes various attributes such as `type`, `color`, `size`, `radius`, and optional properties like `borderWidth`, 
 * `disabled`, `borderColor`, `backgroundColor`, `material`, `direction`, and `theme`. 
 *
 * This type can be useful for ensuring consistent styling across different components in a TypeScript-based application.
 */
type StyleProps = {
  /**
   * Specifies the appearance style of the input component.
   */
  type: InputType;

  /**
   * Determines the color theme of the input, which can be a predefined theme color or a custom value.
   */
  color: Color;

  /**
   * Defines the size of the input component, affecting dimensions such as height and width.
   */
  size: Sizes;

  /**
   * Sets the border radius for the input, influencing how rounded the corners are.
   */
  radius: BorderRadius;

  /**
   * (Optional) Determines the width of the input's border.
   */
  borderWidth?: BorderWidth;

  /**
   * (Optional) A boolean indicating whether the input is disabled, meaning it cannot be interacted with by the user.
   */
  disabled?: boolean;

  /**
   * (Optional) Specifies the color of the border using `react-native` ColorValue definitions.
   */
  borderColor?: ColorValue;

  /**
   * (Optional) Sets the background color of the input using `react-native` ColorValue definitions.
   */
  backgroundColor?: ColorValue;

  /**
   * (Optional) Indicates whether to apply Material design characteristics to the input.
   */
  material?: boolean;

  /**
   * (Optional) Specifies the layout direction of elements within the input, either in a 'row' or 'column'.
   */
  direction?: 'row' | 'column';

  /**
   * The base theme object used for styling, which contains theme-related properties and values.
   */
  theme: BaseTheme<any>;
}

/**
 * This code defines a function `createStyles` that generates a set of styles for a component based on the provided `StyleProps`.
 * It utilizes theme properties such as font size, colors, and border radius to create responsive and consistent styles.
 * The function returns a StyleSheet object containing styles for various elements like the container, label, and help text, adjusting properties based on the input props.
 * @param {StyleProps} props - `StyleProps` which is used to specify the properties for styling components.
 * @returns {StyleSheet} StyleSheet object containing styles for various elements like the container, label, and help text, adjusting properties based on the input props.
 */
export const createStyles = (props: StyleProps) => {
  const fontSize = props.theme.fontSize[props.size!] ?? props.theme.fontSize.default;
  const themeColor = props.theme.colors[props.color] ?? props.color;
  const paddingVertical = PADDING_VERTICAL_MULTIPLIER * fontSize;
  const paddingHorizontal = PADDING_HORIZONTAL_MULTIPLIER * fontSize;
  const borderRadius = props.theme.borderRadius[props.radius] ?? props.radius;
  
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
    },
    default: {
      backgroundColor: 'transparent',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: paddingVertical,
      columnGap: paddingVertical,
      padding: paddingVertical,
      borderColor: props.borderColor ?? themeColor,
      backgroundColor: props.backgroundColor ?? 'transparent',
      borderRadius: props.type === 'underlined' ? 0 : borderRadius,
      paddingHorizontal:
        props.type === 'underlined'
        ? 0
        : (props.radius === 'full' && props.material)
          ? 2 * paddingHorizontal
          : paddingHorizontal,
      ...getBorders(props.type, props.theme.borderWidth[props.borderWidth!] ?? props.borderWidth),
    },
    listContainer: {
      display: 'flex',
      flexDirection: props.direction,
      rowGap: paddingVertical,
      columnGap: 2 * paddingVertical,
      backgroundColor: 'transparent'
    },
    label: {
      fontFamily: 'Regular',
      color: props.theme.colors.text,
      marginBottom: 0.8 * paddingVertical,
      fontSize: props.material ? TEXT_HELPER_MULTIPLIER * fontSize : fontSize,
    },
    helpText: {
      fontStyle: 'italic',
      marginTop: 0.25 * fontSize,
      paddingHorizontal: borderRadius,
      color: props.theme.colors.text,
      fontSize: TEXT_HELPER_MULTIPLIER * fontSize,
    },
  });
}