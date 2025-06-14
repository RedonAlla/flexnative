/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-10 19:04:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-11 18:35:43
 * @ Description: This file defines the properties for the `NumberTextBox` component.
 */

import { BaseInputProps } from "../shared/input.props";

/**
 * Interface defining the properties for a NumericTextBox component.
 * It extends from {@link BaseInputProps}, thereby inheriting all its properties.
 * 
 * @interface TextBoxProps
 * @extends {BaseInputProps}
 */
export interface NumberTextBoxProps extends BaseInputProps {
  /**
   * A boolean indicating whether increment/decrement buttons should be displayed.
   * 
   * @default true
  */
  actions?: boolean;

  /**
   * A number specifying the increment/decrement step value.
   * 
   * @default 1
   */
  step?: number;
}