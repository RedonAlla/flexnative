/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-06 20:05:47
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-06-14 23:16:09
 * @ Description: This file defines the `TextBoxInline` component, a variation of the text input field.
 * It extends the `BaseInput` component and provides an inline layout where the label and input appear on the same line.
 * The component supports various customization options, including styling, icons, and helper text.
 */


import React from "react";
import { View, TextInput } from "react-native";

import { createInlineStyles } from "../shared/input.styles";
import VerticalSeparator from "../shared/components/VerticalSeparator";
import BaseInput from "../shared/components/BaseInput";
import InputWrapper from "../shared/components/InputWrapper";
import { TextBoxProps } from "./TextBox.props";
import Label from "../shared/components/Label";
import Adornment from "../shared/components/Adornment";


/**
 * Renders a text input field with an inline layout.
 * The label and input are displayed on the same line, and it supports various styling options.
 * 
 * @class TextBoxInline
 * @extends {BaseInput<TextBoxProps>}
*/
export default class TextBoxInline extends BaseInput<TextBoxProps> {
  public render() {
    const {
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
      look,
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
    const styles = createInlineStyles({
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
      pressedBoxShadow,
      withoutPressedBoxShadow,
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
      <View style={[
        styles.container,
        isFocused && styles.containerFocused,
        type === 'underlined' && styles.underlined,
      ]}>
        <Adornment adornment={prefix} style={[styles.icon, isFocused && styles.iconFocused]} adornmentStyle={prefixStyle} isFocused />
        { (prefix && prefixSeparator) && <VerticalSeparator style={styles.separator } /> }

        <Label label={label} style={styles.label} labelStyle={labelStyle} isFocused />
        
        <TextInput
          style={[ styles.input, style ]}
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

        { (suffix && suffixSeparator) && <VerticalSeparator style={styles.separator } /> }
        <Adornment adornment={suffix} style={[styles.icon, isFocused && styles.iconFocused]} adornmentStyle={suffixStyle} isFocused />
        
      </View>
      </InputWrapper>
    );
  }
}