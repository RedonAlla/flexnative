/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-11-17 20:20:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-20 22:56:05
 * @ Description: Icon component for rendering text on button.
 */

import React from "react";
import { ITextProps } from "../props";
import { ColorValue, StyleProp, Text, TextStyle } from "react-native";

/**
 * Props for the Text component on Button.
 *
 * @typedef {Object} TextProps
 * @property {boolean} pressed - Indicates whether the text is in a pressed state.
 * @property {StyleProp<TextStyle>} style - The style to be applied to the text.
 * @property {string | ITextProps} [text] - The text content or additional text properties.
 */
type TextProps = {
  pressed: boolean;
  style: StyleProp<TextStyle>;
  text?: string | ITextProps;
}

/**
 * A React PureComponent that renders a text element.
 * 
 * @extends {React.PureComponent<TextProps>}
 * 
 * @remarks
 * This component checks if the `text` prop is provided. If not, it returns null.
 * If the `text` prop is provided, it destructures the `value`, `color`, `activeColor`, `style`, and other text properties from it.
 * It then renders a `Text` component with the combined styles and text properties.
 * 
 * @example
 * ```tsx
 * <ButtonText text={{ value: "Click me", color: "blue", activeColor: "red" }} pressed={true} />
 * ```
 * 
 * @param {TextProps} props - The properties for the component.
 * @param {boolean} props.pressed - Indicates if the button is pressed.
 * @param {string | ITextProps} props.text - The text to display or an object containing text properties.
 * @param {object} props.style - Additional styles for the text component.
 * 
 * @returns {JSX.Element | null} The rendered text component or null if no text is provided.
 */
export default class extends React.PureComponent<TextProps> {
  public render() {
    if(!Boolean(this.props.text))
      return null;

    const { value, color, activeColor, style, ...textProps } = (this.props.text as ITextProps) || {};

    return (
      <Text style={[
        this.props.style,
        style,
        setTextColor(this.props.pressed, color, activeColor),
      ]} {...textProps}>{value ?? (this.props.text as string)}</Text>
    );
  }
}

/**
 * Sets the text color based on the pressed state and provided colors.
 *
 * @param pressed - A boolean indicating whether the button is pressed.
 * @param color - The default color value for the text.
 * @param activeColor - The color value for the text when the button is pressed.
 * @returns An object containing the color value or undefined if no color is provided.
 */
function setTextColor(pressed: boolean, color?: ColorValue, activeColor?: ColorValue): { color: ColorValue } | undefined {
  if(pressed && activeColor)
    return { color: activeColor };

  return color ? { color } : undefined;
}