/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: Interface defines the properties for a CheckList component.
 * It allows for single or multiple selections of items, supports custom styling options, and provides callbacks for handling changes in selection.
 * The interface is generic, enabling it to work with various types of selected values.
 */

import { ReactElement, SyntheticEvent } from "react";
import { ColorValue, NativeSyntheticEvent, StyleProp, TextStyle, ViewProps } from "react-native";

import { BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";

import { CheckProps, CheckboxEvent } from "../check-box/props";
import { InputType } from "../shared/input.props";


export interface BaseCheckBoxListProps {
  /**
   * Input type.
   * 
   * To have appearance for ghost with custom color you should use hex colors.
   * @default 'default'
  */
  type?: InputType;

  /** Color by theme or a custom color according `react-native` ColorValue.
   * @default 'default'
  */
  color?: Color;

  /**
   * Input Sizes
   * @default 'normal'
  */
  size?: Sizes;
  
  /** Input border radius.
  * @default 'medium'
  */
  radius?: BorderRadius;

  /** Optional input borders width.
   * @default 'hairline'
  */
  borderWidth?: BorderWidth;

  /** Borders color color according `react-native` ColorValue. */
  borderColor?: ColorValue;

  /** Background color for according `react-native` ColorValue. */
  backgroundColor?: ColorValue;
}

/**
 * Interface defines the properties for a CheckList component. 
 * It allows for single or multiple selections of items, supports custom styling options,
 * and provides callbacks for handling changes in selection. The interface is generic, 
 * enabling it to work with various types of selected values.
 */
export interface CheckListProps<T> extends BaseCheckBoxListProps, ViewProps {
  /**
   * @template T representing selected value from the available list.
  */
  value?: T | Array<T>;
  
  /**
   * @template T representing available options for selection.
   * If the value is an object, it should be an array of objects with a valueField.
   * If the value is a string or number, it should be an array of strings or numbers.
   */
  options?: Array<T>;

  /**
   * Sets the data item field that represents the item value.
   * If the data contains only primitive values, do not define it.
   */
  valueField?: string;
  
  /**
   * Sets the data item field that represents the item text to display.
   * If the data contains only primitive values, do not define it.
   */
  textField?: string;
  
  /**
   * Boolean value for single or multiple selection.
   * @default true
  */
  multipleSelect: boolean;

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
  children?: Array<ReactElement<CheckProps<T>>>;

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