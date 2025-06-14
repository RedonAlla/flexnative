/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-17 22:55:53
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-11 19:10:12
 * @ Description: The file defines the core interface, BaseInputProps, for input components within a React Native UI library. This interface standardizes the properties that can be passed to these input components, ensuring consistency and predictability in their behavior and appearance. It also includes supporting types like InputType to constrain input styles and StateCallbackType for managing focus state. By centralizing these definitions, the file promotes code reusability and simplifies the development of various input field variations (e.g., text inputs, number inputs) within the library.
 */

import { ColorValue, StyleProp, TextStyle, TextInputProps, ViewStyle } from 'react-native';
import { IconName } from '@flexnative/icons';
import { BorderRadius, BorderWidth, Color, Sizes } from '@flexnative/theme-context';

/**
 * Interface defining the structure of the state callback object.
 * It is used to describe focused state information.
 */
export interface StateCallbackType {
  /**
   * Property indicating whether an element is currently focused.
   * The 'readonly' modifier ensures that this property cannot be modified after its initial assignment.
  */
  readonly focused: boolean;
}

/**
 * Type alias defining possible input styles for a UI component.
 * It restricts input style values to either 'outlined' or 'underlined'.
 */
export type InputType = 'outlined' | 'underlined';

/**
 * Interface defining the properties for a base input component, extending {@link TextInputProps}.
 */
export interface BaseInputProps extends TextInputProps {
  /**
   * Specifies the input type, which determines the appearance style.
   * To have appearance for ghost with custom color you should use hex colors.
   * 
   * @default 'outlined'
  */
  type?: InputType;

  /**
   * Specifies the look of the input.
   *  - `default` Default look as standard input. With label outside input box if present.
   *  - `material` Input box with material design look.
   *  - `inline` Input box when the label and input are inline.
   * 
   * @default 'default'
  */
  look?: 'default' | 'material' | 'inline'

  /**
   * Defines the size of the input field.
   * @default 'normal'
  */
  size?: Sizes;

  /** Sets the border radius of the input
   * 
  * @default 'medium'
  */
  radius?: BorderRadius;
  
  /**
   * Adds a shadow effect to the button, when the button it is pressed.
   * For more details read the {@link https://reactnative.dev/docs/view-style-props#boxshadow documentation}. 
   */
  pressedBoxShadow?: string;

  /**
   * Boolean value indicating wether to show or not {@link pressedBoxShadow}.
   * 
   * @default false
   */
  withoutPressedBoxShadow?: boolean;

  /** Indicates if the input has an error state.
  * @default false
  */
  isError?: boolean;

  /**
   * Optional property to specify the width of the input borders.
   * @default 'hairline'
  */
  borderWidth?: BorderWidth;

  /** 
   * Color of the border as per `react-native` ColorValue standards. 
   */
  borderColor?: ColorValue;

  /** 
   * Color of the border when the input is in an active state, based on `react-native` ColorValue.
   */
  activeBorderColor?: ColorValue;

  /**
   * Indicator if input it is disabled or not.
  */
  disabled?: boolean;
  
  /** 
   * Input text color, can be from theme or a custom color according `react-native` ColorValue.
   * 
   * @default 'default'
   */
  color?: Color;

  /** 
   * Background color for the input based on `react-native` ColorValue.
   */
  backgroundColor?: ColorValue;

  /** 
   * Background color for the input in an active state as per `react-native` ColorValue.
   */
  activeBackgroundColor?: ColorValue;

  /**
   * Provides helper text relating to the input.
  */
  helperText?: string;

  /**
   * Label text or element to display with the input.
  */
  label?: string | React.ReactElement;

  /**
   * Either text styles or a function that receives a boolean reflecting whether
   * the component is currently active and returns text styles.
   */
  labelStyle?:
    | StyleProp<TextStyle>
    | ((state: StateCallbackType) => StyleProp<TextStyle>)
    | undefined;

  /**
   * Allows you to add icon form `@flexnative/icons` package or any custom items as prefix adornments.
  */
  prefix?: keyof IconName | React.ReactElement;

  /**
   * If true a separator border it is show on prefix element.
   * @default false
  */
  prefixSeparator?: boolean;

  /**
   * Custom style for for prefix component.
   * Either view styles or a function that receives a boolean reflecting whether
   * the component is currently active and returns view styles.
   */
  prefixStyle?:
    | StyleProp<ViewStyle | TextStyle>
    | ((state: StateCallbackType) => StyleProp<ViewStyle | TextStyle>)
    | undefined;

  /**
   * Allows you to add icon form `@flexnative/icons` package or any custom items as suffix adornments.
  */
  suffix?: keyof IconName | React.ReactElement;

  /**
   * If true a separator border it is show on suffix element.
   * @default false
  */
  suffixSeparator?: boolean;

  /**
   * Custom style for for suffix component.
   * Either view styles or a function that receives a boolean reflecting whether
   * the component is currently active and returns view styles.
   */
  suffixStyle?:
    | StyleProp<ViewStyle | TextStyle>
    | ((state: StateCallbackType) => StyleProp<ViewStyle | TextStyle>)
    | undefined;
}