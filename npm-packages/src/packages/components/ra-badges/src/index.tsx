/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-10-26 00:35:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 12:58:07
 * @ Description: Tag Component.
 */

import React from "react";
import { Text, View } from "react-native";

import ThemeContext from "@flexnative/theme-context";

import BadgedProps from "./props";
import createStyles from './styles';

export default class extends React.PureComponent<BadgedProps, {}> {
  static defaultProps = {
    radius: 'full',
    size: 'default',
    type: 'default',
    color: 'default',
    borderWidth: 'none',
    position: 'top-right'
  }

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  
  public render() {
    const {
      text,
      type,
      size,
      color,
      textColor,
      backgroundColor,
      radius,
      borderWidth,
      borderColor,
      position,
      style,
      children,
      ...resProps
    } = this.props;

    const styles = createStyles({
      type: type!,
      color: color,
      size: size!,
      radius: radius,
      position: position!,
      textColor: textColor,
      borderWidth: borderWidth,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      theme: {
        colors: this.context.colors,
        isLight: this.context.colorScheme === 'light'
      }
    });
    
    return (
      <View style={[styles.container]}>
        { children }
        <Text style={[styles.text, style]} {...resProps}>{text}</Text>
      </View>
    );
  }
}