/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-11 21:17:45
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-07-12 17:10:30
 * @ Description: This component renders a adornment for an input field. It can accept a string or a React element as the adornment content.
 *                It also handles styling based on whether the input is focused.
 */

import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { StateCallbackType } from "../input.props";

import { getStyle } from "../input.utilities";
import Icon, { IconName } from "@flexnative/icons";


/**
 * Props for the {@link Adornment} component.
 */
type Props = {
  /**
   * Base style for the adornment. This can be a `ViewStyle` or `TextStyle`.
   */
  style: StyleProp<ViewStyle | TextStyle>;

  /**
   * Indicates whether the associated input is currently focused.
   * This affects the adornment's styling if `adornmentStyle` is a function.
   */
  isFocused: boolean;

  /**
   * The adornment content. Can be a keyof {@link IconName} (for rendering a predefined icon)
   * or a custom React element. If undefined, nothing is rendered.
   */
  adornment?: keyof IconName | React.ReactElement
  
  /**
   * Optional style for the adornment.
   * Can be a static style object (`ViewStyle` or `TextStyle`),
   * a function that returns a style object based on the input's focus state, * or undefined.
   */
  adornmentStyle?:
    | StyleProp<ViewStyle | TextStyle>
    | ((state: StateCallbackType) => StyleProp<ViewStyle | TextStyle>)
    | undefined;
}

/**
 * Adornment Component
 *
 * This component renders an adornment, which can be an icon (specified by name)or a custom React element.
 * It's typically used to display icons or other
 * visual elements at the beginning or end of an input field.
 *
 * The component can dynamically change its style based on the focus state
 * of an associated input field.
 *
 * @param {Props} props - The component props.
 * @returns {React.ReactElement | null} The rendered adornment element, or null if the `adornment` prop is undefined.
 */
const Adornment = ({ adornment, style, adornmentStyle, isFocused }: Props ): React.ReactElement | null => {
  return adornment
    ? (
        React.isValidElement(adornment)
          ? adornment
          : <Icon name={adornment as keyof IconName } style={[
              style,
              getStyle<ViewStyle | TextStyle>(adornmentStyle, isFocused)
            ]} />
      )
    : null;
};

export default Adornment;