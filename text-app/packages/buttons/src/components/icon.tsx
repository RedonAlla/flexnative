/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-11-19 22:48:12
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-19 23:49:15
 * @ Description: Icon component for rendering an icon on button.
 */

import React from "react";
import { ColorValue, StyleProp, TextStyle } from "react-native";
import Icon, { IconName } from "@flexnative/icons";

import { IconProps } from "../props";


/**
 * Props for the Icon component.
 * 
 * @property {boolean} pressed - Indicates whether the icon is pressed.
 * @property {StyleProp<TextStyle>} style - The style to be applied to the icon.
 * @property {keyof IconName | IconProps | React.ReactElement} [icon] - The icon to be displayed. It can be a key of IconName, IconProps, or a React element.
 */
type Props = {
  pressed: boolean;
  style: StyleProp<TextStyle>;
  icon?: keyof IconName | IconProps | React.ReactElement;
}

/**
 * A React PureComponent that renders an icon based on the provided props.
 * 
 * @extends {React.PureComponent<Props>}
 * 
 * @remarks
 * This component checks if the `icon` prop is provided and valid. If the `icon` prop is not provided,
 * it returns `null`. If the `icon` prop is a valid React element, it returns the element directly.
 * Otherwise, it extracts the `name`, `color`, `activeColor`, `style`, and other remaining properties
 * from the `icon` prop and renders an `Icon` component with these properties.
 * 
 * @param {Props} props - The properties passed to the component.
 * 
 * @returns {React.ReactNode | null} The rendered icon or `null` if no valid icon is provided.
 * 
 * @example
 * ```tsx
 * <IconComponent icon={{ name: 'home', color: 'blue', activeColor: 'red' }} />
 * ```
 */
export default class extends React.PureComponent<Props> {
  public render() {
    if(!Boolean(this.props.icon))
      return null;

    if(React.isValidElement(this.props.icon))
      return this.props.icon;

    const { name, color, activeColor, style, ...rest } = (this.props.icon as IconProps) || {};

    return (
      <Icon
        name={name ?? (this.props.icon)}
        style={[
          this.props.style,
          style,
          setIconColor(this.props.pressed, color, activeColor),
        ]}
        {...rest}
      />
    );
  }
}

/**
 * Sets the icon color based on the pressed state and provided colors.
 *
 * @param {boolean} pressed - Indicates whether the icon is pressed.
 * @param {ColorValue} [color] - The default color of the icon.
 * @param {ColorValue} [activeColor] - The color of the icon when it is pressed.
 * @returns {{ color: ColorValue } | undefined} - An object containing the color value or undefined if no color is provided.
 */
function setIconColor(pressed: boolean, color?: ColorValue, activeColor?: ColorValue): { color: ColorValue } | undefined {
  if(pressed && activeColor)
    return { color: activeColor };

  return color ? { color } : undefined;
}