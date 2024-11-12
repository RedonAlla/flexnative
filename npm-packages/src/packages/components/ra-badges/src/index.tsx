/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-10-26 00:35:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-12 21:26:15
 * @ Description: Tag Component.
 */

import React from "react";
import { Text, View } from "react-native";

import ThemeContext from "@flexnative/theme-context";

import BadgedProps from "./props";
import createStyles from './styles';
import { getBackgroundColor, getTextColor } from "./utilities";

/**
 * A React PureComponent that renders a badge with customizable properties.
 * 
 * @remarks
 * This component uses the `ThemeContext` to apply theme-based styles.
 * 
 * @defaultProps
 * - `radius`: 'full'
 * - `size`: 'default'
 * - `type`: 'default'
 * - `color`: 'default'
 * - `borderWidth`: 'none'
 * - `position`: 'top-right'
 * 
 * @contextType ThemeContext
 * 
 * @prop {string} text - The text to display inside the badge.
 * @prop {string} type - The type of the badge.
 * @prop {string} size - The size of the badge.
 * @prop {string} color - The color of the badge.
 * @prop {string} textColor - The color of the text inside the badge.
 * @prop {string} backgroundColor - The background color of the badge.
 * @prop {string} radius - The border radius of the badge.
 * @prop {string} borderWidth - The width of the badge border.
 * @prop {string} borderColor - The color of the badge border.
 * @prop {string} position - The position of the badge.
 * @prop {React.CSSProperties} style - Additional styles for the badge text.
 * @prop {React.ReactNode} children - The child elements to render inside the badge.
 * @prop {object} resProps - Additional properties to pass to the Text component.
 * 
 * @returns {JSX.Element} The rendered badge component.
 */
export default class extends React.PureComponent<BadgedProps, {}> {
  static defaultProps = {
    radius: 'full',
    size: 'medium',
    type: 'solid',
    color: 'default',
    borderWidth: 'none',
    position: 'top-right'
  }

  /**
   * Specifies the context type that this component subscribes to.
   * This property is used to consume the nearest current value of the ThemeContext.
   * 
   * @type {React.ContextType<typeof ThemeContext>}
   */
  static contextType = ThemeContext;

  /**
   * Declares a context variable of the type inferred from the ThemeContext.
   * This is used to provide type safety and autocompletion for the context value.
   */
  declare context: React.ContextType<typeof ThemeContext>;
  
  public render() {
    const {
      text,
      type,
      size,
      color,
      textColor,
      radius,
      borderWidth,
      borderColor,
      position,
      style,
      children,
      ...resProps
    } = this.props;

    const styles = createStyles({
      baseSize: this.context.metrics.baseSize,
      fontSize: this.context.fontSize[size!],
      borderRadius: this.context.borderRadius[radius!] ?? radius,
      position: position ?? 'top-right',
      textColor: getTextColor(color, (textColor ?? this.context.colors[color]) ?? color, type!, this.context.colors.black, this.context.scheme === 'light'),
      borderWidth: this.context.borderWidth[borderWidth!] ?? borderWidth,
      borderColor: borderColor ?? this.context.colors[color] ?? color,
      backgroundColor: getBackgroundColor(this.context.colors[color] ?? color, this.context.metrics.ghostOpacity, type)
    });
    
    return (
      <View style={[styles.container]}>
        { children }
        <Text style={[styles.text, style]} {...resProps}>{text}</Text>
      </View>
    );
  }
}