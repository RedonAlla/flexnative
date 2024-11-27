/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-17 22:55:53
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-27 22:18:17
 * @ Description:
 */

import { ColorValue, StyleProp, TextStyle, TextInputProps, ViewStyle } from 'react-native';
import { IconName } from '@flexnative/icons';
import { BorderRadius, BorderWidth, Color, Sizes } from '@flexnative/theme-context';

export interface StateCallbackType {
  readonly focused: boolean;
}

export type InputType = 'outlined' | 'underlined';


export interface BaseInputProps extends TextInputProps {
  /**
   * Input type.
   * 
   * To have appearance for ghost with custom color you should use hex colors.
   * @default 'outlined'
  */
  type: InputType;

  /**
   * Input Sizes
   * @default 'normal'
  */
  size: Sizes;

  /** Input border radius.
  * @default 'medium'
  */
  radius: BorderRadius;

  /** Optional input borders width.
   * @default 'hairline'
  */
  borderWidth: BorderWidth;

  /** Borders color color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /** Border color for active state according `react-native` ColorValue. */
  activeBorderColor?: ColorValue;

  /**
   * Indicator if input it is disabled or not.
  */
  disabled?: boolean;

  /**
   * Indicator if outline borders should be shown or not on focus.
   * To have appearance for ghost with custom color you should use hex colors.
  */
  //focusedBorders?: boolean;
  
  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color?: Color;

  /** Background color for according `react-native` ColorValue. */
  backgroundColor?: ColorValue;

  /** Background color for active state according `react-native` ColorValue. */
  activeBackgroundColor?: ColorValue;

  /**
   * Indicator if input should looks like Material input. 
   * @default false
   */
  material?: boolean;

  /**
   * Helper text about input.
  */
  helperText?: string;

  /**
   * Label to display on input.
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

export interface TextBoxProps extends BaseInputProps {};