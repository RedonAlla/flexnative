/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: This file defines the `TextBoxMaterial` component, a variation of the text input field.
 * It extends the `BaseInput` component and provides a material design layout.
 * The component supports various customization options, including styling, icons, and helper text.
 */

import React from "react";
import { View, TextInput } from "react-native";

import { createMaterialStyles } from "../shared/input.styles";
import VerticalSeparator from "../shared/components/VerticalSeparator";
import BaseInput from "../shared/components/BaseInput";
import InputWrapper from "../shared/components/InputWrapper";
import { TextBoxProps } from "./TextBox.props";
import Label from "../shared/components/Label";
import Adornment from "../shared/components/Adornment";


/**
 * Renders a text input field with a material design layout.
 * The label is displayed inside the input field and animates to the top when the field is focused.
 * It supports various styling options.
 * 
 * @extends {BaseInput<TextBoxProps>}
 */
export default class TextBoxMaterial extends BaseInput<TextBoxProps> {
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

    if (label === null || label === undefined)
      throw new Error(`for type material Label it is required.`);

    const theme = this.getTheme();
    const styles = createMaterialStyles({
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
        styles.wrapper,
        isFocused && styles.wrapperFocused,
        type === 'underlined' && styles.underlined,
      ]}>
        <Adornment adornment={prefix} style={[styles.icon, isFocused && styles.iconFocused]} adornmentStyle={prefixStyle} isFocused />
        { (prefix && prefixSeparator) && <VerticalSeparator style={styles.separator } /> }
        <View style={styles.container }>
          
          <Label label={label} style={styles.label} labelStyle={labelStyle} isFocused />
          
          <TextInput
            style={[ styles.input, style ]}
            maxLength={maxLength}
            readOnly={readOnly || disabled}
            cursorColor={cursorColor || theme.colors.primary}
            selectionColor={selectionColor || theme.colors.primary}
            placeholderTextColor={placeholderTextColor || theme.colors.border}
            {...restProps}
            textAlignVertical="bottom"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChangeText={this.handleChangeText}
          />
        </View>

        { (suffix && suffixSeparator) && <VerticalSeparator style={styles.separator } /> }
        <Adornment adornment={suffix} style={[styles.icon, isFocused && styles.iconFocused]} adornmentStyle={suffixStyle} isFocused />

      </View>
      </InputWrapper>
    );
  }
}