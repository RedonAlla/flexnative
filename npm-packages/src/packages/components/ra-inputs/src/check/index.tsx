/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: This code defines a generic React component called Check, which represents a checkbox element. Component extending React.PureComponent, which is optimized for performance by implementing a shallow prop and state comparison. The component accepts various props for customization, such as value, type, size, colors, and label. It handles changes via the handleChange method, which triggers an onValueChange callback when the checkbox is pressed. The component renders a Pressable element that toggles between checked and unchecked states, displaying appropriate check and label elements based on the current state.
 */

import React from "react";
import { Pressable, Text, TextStyle, View } from "react-native";

import ThemeContext from "@flexnative/theme-context";
import Icon from "@flexnative/icons";

import { CheckProps } from "./props";
import { createStyles } from "./styles";
import FalsyComponent from "../components/falsy-component";
import { getStyle } from "../input.utilities";


/**
 * This code defines a generic React component called Check, which represents a checkbox element.
 * Component extending React.PureComponent, which is optimized for performance by implementing a shallow prop and state comparison.
 * The component accepts various props for customization, such as value, type, size, colors, and label. 
 * It handles changes via the handleChange method, which triggers an onValueChange callback when the checkbox is pressed. 
 * The component renders a Pressable element that toggles between checked and unchecked states, displaying appropriate check and label elements based on the current state.
 * 
 * @class Check<T>
 * @extends {React.PureComponent<CheckProps<T>>}
 */
export default class Check<T> extends React.PureComponent<CheckProps<T>> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  
  static defaultProps = {
    type: 'inverse',
  }

  constructor(props: CheckProps<T>) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange() {
    this.props.onValueChange?.(this.props.value as T);
  }

  public render(): React.ReactNode {
    const {
      value,
      type,
      size,
      radius,
      borderWidth,
      borderColor,
      checkedBorderColor,
      disabled,
      color,
      backgroundColor,
      checkedBackgroundColor,
      label,
      labelStyle,
      checkElement,
      unCheckElement,
      style,
      ...other
    } = this.props;

    const styles = createStyles(
      {
        type: type || 'inverse',
        color: color || 'primary',
        size: size ?? 'medium',
        radius: radius || 'medium',
        borderWidth: borderWidth || 'hairline',
        disabled: disabled,
        borderColor: borderColor,
        checkedBorderColor: checkedBorderColor!,
        backgroundColor: backgroundColor,
        checkedBackgroundColor: checkedBackgroundColor,
        theme: this.context
      }
    );

    return (
      <Pressable
        {...other}
        role="checkbox"
        disabled={disabled}
        accessibilityState={{ disabled }}
        onPress={this.handleChange}
        style={styles.container}
      >
        <FalsyComponent
          style={[
            styles.checkContainer,
            Boolean(value) ? styles.checkBoxChecked : styles.checkBoxUnChecked
          ]}
          component={
            value
              ? (checkElement as React.ReactElement) ?? <View><Icon name='check' style={styles.checkBox} size={styles.label.fontSize} /></View>
              : (unCheckElement as React.ReactElement) ?? <Text />
          }
        />
        <FalsyComponent
          style={[styles.label, getStyle<TextStyle>(labelStyle, Boolean(value))]}
          component={React.isValidElement(label) ? (label as React.ReactElement) : <Text>{label}</Text>}
        />
      </Pressable>
    );
  }
}