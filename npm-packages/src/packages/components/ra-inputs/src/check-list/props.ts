import { ReactElement, SyntheticEvent } from "react";
import { ColorValue, NativeSyntheticEvent, StyleProp, TextStyle, ViewProps } from "react-native";

import { BorderRadius, BorderWidth, InputColor, InputType, Sizes } from "../input.props";
import { CheckProps, CheckboxEvent } from "../check/props";


export interface CheckListProps<T> extends ViewProps {
  /**
   * @template T representing selected value from the available list.
  */
  value?: T | Array<T>;

  /**
   * When the selected item is an object, always specify valueField.
   * If you do not set a value for the field, the list will compare the items by reference, which may complicate debugging.
   * For example, the selected value will not be applied, if it does not reference the exact passed data object.
   */
  valueField?: string;

  /**
   * Boolean value for single or multiple selection.
   * @default true
  */
  multipleSelect: boolean;

  /**
   * Input type.
   * 
   * To have appearance for ghost with custom color you should use hex colors.
   * @default 'default'
  */
  type: InputType;

  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color?: InputColor;

  /**
   * Input Sizes
   * @default 'normal'
  */
  size: Sizes;
  
  /** Input border radius.
  * @default 'medium'
  */
  radius: BorderRadius;

  /**
   * Indicator if input it is disabled or not.
  */
  disabled?: boolean;

  /**
   * Check element direction
   * 
   * @default 'column'
   */
  direction: 'row' | 'column';

  /** Optional input borders width.
   * @default 'hairline'
  */
  borderWidth: BorderWidth;

  /** Borders color color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /** Background color for according `react-native` ColorValue. */
  backgroundColor?: ColorValue;

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
   * Text styles.
   */
  labelStyle?: StyleProp<TextStyle>;

  /*
  React element to render custom check boxes.
  */
  children: Array<ReactElement<CheckProps<T>>>;

  /**
  * Callback that is invoked when the user presses the checkbox.
  * @param event A native event containing the checkbox change.
  */
  onChange?: (event: NativeSyntheticEvent<CheckboxEvent<T>> | SyntheticEvent<HTMLInputElement, CheckboxEvent<T>>) => void;
  
  /**
   *@template T.
  * Callback that is invoked when the user presses the checkbox.
  * @param T Value of checkbox.
  */
  onValueChange?: (value: T | Array<T>) => void;
}