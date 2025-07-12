/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-11 21:17:45
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-07-12 17:11:17
 * @ Description: This component renders a label for an input field. It can accept a string or a React element as the label content.
 *                It also handles styling based on whether the input is focused.
 */

import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { StateCallbackType } from "../input.props";

import { getStyle } from "../input.utilities";


/**
 * Pops for {@link Label} component.
 */
type Props = {
  /**
   * Base style for the label text.
   */
  style: StyleProp<TextStyle>;

  /**
   * Indicates whether the associated input is currently focused.
   * This affects the label's styling if `labelStyle` is a function.
   */
  isFocused?: boolean;

  /**
   * The label content. Can be a string, a React element, or undefined.
   * If undefined, nothing is rendered.
   */
  label?: string | React.ReactElement;

  /**
   * Optional style for the label.
   * Can be a static style object, a function that returns a style object based on the input's focus state, or undefined.
   */
  labelStyle?:
      | StyleProp<TextStyle>
      | ((state: StateCallbackType) => StyleProp<TextStyle>)
      | undefined;
}

/**
 * Label Component
 *
 * This component renders a label for an input field. It can accept a string or a React element as the label content.
 * It also handles styling based on whether the input is focused.
 * 
 * @param {Props} props - The component props.
 * @returns {React.ReactElement | null} The rendered label element, or null if the label is undefined.
 */
const Label = ({ label, style, labelStyle, isFocused }: Props ): React.ReactElement | null => {
  return label
    ? (
        React.isValidElement(label)
          ? label
          : <Text style={[ style, getStyle<TextStyle>(labelStyle, isFocused!) ]}>
              {label}
            </Text>
      )
    : null;
};

export default Label;
