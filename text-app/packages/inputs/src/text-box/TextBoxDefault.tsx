/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: The `TextBoxDefault` component renders a text input field with optional label, prefix, and suffix elements.
 *                It supports various styling options, including different types, sizes, border radii, and error states.
 *                The component extends `BaseInput` for common input functionalities and uses `InputWrapper` to manage helper text and input length constraints.
 */

import React from "react";
import { View, TextInput } from "react-native";

import { createDefaultStyles } from "../shared/input.styles";
import VerticalSeparator from "../shared/components/VerticalSeparator";
import BaseInput from "../shared/components/BaseInput";
import InputWrapper from "../shared/components/InputWrapper";
import { TextBoxProps } from "./TextBox.props";
import Label from "../shared/components/Label";
import Adornment from "../shared/components/Adornment";


/**
 * The `TextBoxDefault` component renders a text input field with optional label, prefix, and suffix elements.
 * It supports various styling options, including different types, sizes, border radii, and error states.
 * The component extends `BaseInput` for common input functionalities and uses `InputWrapper` to manage helper text and input length constraints.
 *
 * `TextBoxDefault` is a class component that extends {@link BaseInput}.
 * @extends {BaseInput}
 * 
 *  @example
 * // Basic usage:
 * <TextBoxDefault placeholder="Enter text here" />
 *
 * // With a label and prefix icon:
 * <TextBoxDefault label="Username" prefix="user" />
 *
 * // With custom styling and error state:
 * <TextBoxDefault
 *   label="Password"
 *   isError={true}
 *   style={{ borderColor: 'red' }}
 * />
 */
export default class TextBoxDefault extends BaseInput<TextBoxProps, {}> {
  public render() {
    const {
      look,
      type,
      size,
      radius,
      isError,
      borderWidth,
      borderColor,
      activeBackgroundColor,
      disabled,
      color,
      backgroundColor,
      activeBorderColor,
      label,
      labelStyle,
      helperText,
      prefix,
      prefixStyle,
      prefixSeparator,
      suffix,
      suffixStyle,
      suffixSeparator,
      pressedBoxShadow,
      withoutPressedBoxShadow,

      cursorColor,
      readOnly,
      maxLength,
      selectionColor,
      placeholderTextColor,
      style,
      ...restProps
    } = this.props;

    const theme = this.getTheme();
    const styles = createDefaultStyles({
      type: type!,
      color: color,
      size: size!,
      radius: radius!,
      isError: isError,
      borderWidth: borderWidth,
      disabled: disabled || false,
      readOnly: readOnly || false,
      borderColor: borderColor,
      activeBorderColor: activeBorderColor,
      backgroundColor: backgroundColor,
      activeBackgroundColor: activeBackgroundColor,
      pressedBoxShadow: pressedBoxShadow
    }, theme);

    const { isFocused } = this.state;
    
    return (
      <InputWrapper
        helperText={helperText}
        maxLength={maxLength}
        currentLength={this.state.currentLength}
        style={styles.helpText}
        disabled={disabled}
      >
        <Label label={label} style={styles.label} labelStyle={labelStyle} isFocused />
        <View style={[
            styles.container,
            isFocused && styles.containerFocused,
            type === 'underlined' && styles.underlined,
          ]}>
          <Adornment adornment={prefix} style={[styles.icon, isFocused && styles.iconFocused]} adornmentStyle={prefixStyle} isFocused />
          { (prefix && prefixSeparator) && <VerticalSeparator style={styles.separator } /> }

          <TextInput
            style={[
              styles.input,
              style
            ]}
            maxLength={maxLength}
            readOnly={readOnly || disabled}
            cursorColor={cursorColor || theme.colors.primary}
            selectionColor={selectionColor || theme.colors.primary}
            placeholderTextColor={placeholderTextColor || theme.colors.border}
            {...restProps}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChangeText={this.handleChangeText}
          />

          { (suffix && suffixSeparator) && <VerticalSeparator style={ styles.separator } /> }
          <Adornment adornment={suffix} style={[styles.icon, isFocused && styles.iconFocused]} adornmentStyle={suffixStyle} isFocused />
        </View>
      </InputWrapper>
    );
  }
}