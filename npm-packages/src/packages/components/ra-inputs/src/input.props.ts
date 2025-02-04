/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-17 22:55:53
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-04 00:30:27
 * @ Description: Defines interfaces and types commonly used for input components, specifically tailored for a UI library or framework based on React Native. It provides a structured way to define the properties that these components will accept.
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
 * Interface defining the properties for a base input component, extending TextInputProps.
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
   * Defines the size of the input field.
   * @default 'normal'
  */
  size?: Sizes;

  /** Sets the border radius of the input
   * 
  * @default 'medium'
  */
  radius?: BorderRadius;
  

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
   * Indicates if the input should resemble a Material design look.
   * 
   * @default false
   */
  material?: boolean;

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
   * Allows you to add icon form `ra-icon` package or any custom items as prefix adornments.
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
   * Allows you to add icon form `ra-icon` package or any custom items as suffix adornments.
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

export interface NumberTextBoxProps extends BaseInputProps {
  /**
   * Boolean to determinate wether to show or not increment and decrement actions.
   * 
   * @default true
  */
  actions: boolean;

  /**
   * Increments and decrement step.
   * 
   * @default 1
   */
  step: number;
}

/**
 * Interface defining the properties for a TextBox component.
 * It extends from BaseInputProps, thereby inheriting all its properties.
 */
export interface TextBoxProps extends BaseInputProps {};