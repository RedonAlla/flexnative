/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-11 12:56:44
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-07-12 17:09:53
 * @ Description: The NumericTextBox component provides a versatile numeric input field with a range of styling options to fit various design needs. It allows users to input numeric values and offers features like increment/decrement buttons for easy value adjustment.
 */

import React from "react";
import { View, TextInput } from "react-native";

import { createMaterialStyles } from "../shared/input.styles";
import VerticalSeparator from "../shared/components/VerticalSeparator";
import InputWrapper from "../shared/components/InputWrapper";
import BaseNumericTextBox from "./BaseNumericTextBox";
import Label from "../shared/components/Label";
import Actions from "./Actions";
import Adornment from "../shared/components/Adornment";


/**
 * The NumericTextBox component provides a versatile numeric input field with a range of styling options to fit various design needs.
 * It allows users to input numeric values and offers features like increment/decrement buttons for easy value adjustment.
 * 
 * @component
 * @extends {BaseNumericTextBox}
 */
export default class NumericTextBoxMaterial extends BaseNumericTextBox {
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
      actions,
      step,

      cursorColor,
      readOnly,
      maxLength,
      selectionColor,
      placeholderTextColor,
      style,
      ...restProps
    } = this.props;

    if (label === null || label === undefined)
      throw new Error(`for type material Label it is required.`) ;

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
          
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput
              style={[ styles.input, style ]}
              maxLength={maxLength}
              readOnly={readOnly || disabled}
              cursorColor={cursorColor || theme.colors.primary}
              selectionColor={selectionColor || theme.colors.primary}
              placeholderTextColor={placeholderTextColor || theme.colors.border}
              inputMode='numeric'
              {...restProps}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChangeText={this.handleChangeText}
              value={this.state.value}
            />

            {actions && (
              <Actions
                disabled={Boolean(readOnly || disabled)}
                activeColor={theme.colors.defaultHover}
                //size={styles.input.height}
                size={styles.input.fontSize}
                radius={styles.wrapper.borderRadius}
                onDecrement={this.handleDecrement}
                onIncrement={this.handleIncrement}
              />
            )}
            </View>
          </View>

          { (suffix && suffixSeparator) && <VerticalSeparator style={styles.separator } /> }
          <Adornment adornment={suffix} style={[styles.icon, isFocused && styles.iconFocused]} adornmentStyle={suffixStyle} isFocused />

        </View>
      </InputWrapper>
    );
  }
}