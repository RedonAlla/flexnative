/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-04-13 18:17:38
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-07-12 17:07:49
 * @ Description: The NumericTextBox component provides a numeric input field with various styling options. It supports different looks (default, material, inline), increment/decrement buttons, and customizable properties.
 */

import React from 'react';
import NumericTextBoxDefault from './NumericTextBoxDefault';
import { NumberTextBoxProps } from './NumericTextBox.props';
import NumericTextBoxMaterial from './NumericTextBoxMaterial';
import NumericTextBoxInline from './NumericTextBoxInline';


const COMPONENTS = {
  default: NumericTextBoxDefault,
  material: NumericTextBoxMaterial,
  inline: NumericTextBoxInline
}

/**
 * The NumericTextBox component provides a numeric input field with various styling options. It supports different looks (default, material, inline), increment/decrement buttons, and customizable properties.
 *
 * @component
 * @param {NumberTextBoxProps} props - The properties for configuring the NumericTextBox.
 * @returns {React.ReactElement} A React element representing the NumericTextBox.
 *
 * @example
 * // Example usage:
 * <NumericTextBox
 *   look="material"
 *   label="Enter a number"
 *   onChangeText={(text) => console.log(text)}
 *   actions={true}
 *   step={2}
 * />
 */
const NumericTextBox = (props: NumberTextBoxProps): React.ReactElement => {
  const Component = COMPONENTS[props.look || 'default'] || NumericTextBoxDefault;
  return <Component {...props} />;
};

export default NumericTextBox;