import React from "react";
import { Pressable, Text, TextStyle, View } from "react-native";

import ThemeContext from "@flexnative/theme-context";
import Icon from "@flexnative/icons";

import { CheckProps } from "./props";
import { createStyles } from "./styles";
import FalsyComponent from "../components/falsy-component";
import { getStyle } from "../input.utilities";


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
        size: size || 'default',
        radius: radius || 'medium',
        borderWidth: borderWidth || 'hairline',
        disabled: disabled,
        borderColor: borderColor,
        checkedBorderColor: checkedBorderColor!,
        backgroundColor: backgroundColor,
        checkedBackgroundColor: checkedBackgroundColor,
        theme: {
          colors: this.context.colors,
          isDark: this.context.colorScheme === 'dark'
        }
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
          style={[styles.checkContainer, Boolean(value) ? styles.checkBoxChecked : styles.checkBoxUnChecked]}
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