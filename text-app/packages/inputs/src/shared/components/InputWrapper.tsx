/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-01 19:35:30
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-11 18:57:27
 * @ Description: Wraps input components and displays helper text and character count.
 */

import React from 'react';

import { View, Text, TextStyle } from 'react-native';
import { baseStyles } from '../input.styles';


type Props = {
  children: React.ReactNode;
  style: TextStyle;
  disabled?: boolean;
  helperText?: string;
  maxLength?: number;
  currentLength?: number;
}

/**
 * Wraps input components and displays helper text and character count.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The input component to be wrapped.
 * @param {string} [props.helperText] - Optional helper text to display below the input.
 * @param {number} [props.maxLength] - Optional maximum length for the input.
 */
const InputWrapper = (props: Props) => {
  const { children, helperText, maxLength, currentLength, disabled, style } = props;
  return (
    <View style={[baseStyles.wrapper, disabled && baseStyles.disabled]}>
      { children }
      {
        Boolean(helperText || maxLength) &&
          <View style={baseStyles.helperTextContainer}>
            { helperText && <Text style={[baseStyles.helpText, style]}>{helperText}</Text> }
            { maxLength && <Text style={[baseStyles.helpText, style]}>{`${currentLength} / ${maxLength}`}</Text> }
          </View>
      }
    </View>
  );
}

export default InputWrapper;