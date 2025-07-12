/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-10 19:04:39
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-19 21:01:23
 * @ Description: The NumericTextBox component provides a versatile numeric input field with a range of styling options to fit various design needs. It allows users to input numeric values and offers features like increment/decrement buttons for easy value adjustment.
 */

import React from "react";
import { View, TextInput } from "react-native";

import InputWrapper from "../shared/components/InputWrapper";
import VerticalSeparator from "../shared/components/VerticalSeparator";
import { createDefaultStyles } from "../shared/input.styles";
import BaseNumericTextBox from "./BaseNumericTextBox";
import Actions from "./Actions";
import Label from "../shared/components/Label";
import Adornment from "../shared/components/Adornment";


/**
 * The NumericTextBox component provides a versatile numeric input field with a range of styling options to fit various design needs.
 * It allows users to input numeric values and offers features like increment/decrement buttons for easy value adjustment.
 * 
 * @example
 * // Default look
 * <NumericTextBox onChangeText={(text) => console.log(text)} />
 * 
 * // Material look with label and actions
 * <NumericTextBox
 *   look="material"
 *   label="Enter a number"
 *   onChangeText={(text) => console.log(text)}
 *   actions={true}
 *   step={2}
 * />
 * 
 * // Inline look with prefix icon
 * <NumericTextBox
 *   look="inline"
 *   prefix="dollar-sign"
 *   onChangeText={(text) => console.log(text)}
 * />
 */
export default class NumericTextBoxDefault extends BaseNumericTextBox {
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
              size={styles.icon.width}
              radius={styles.container.borderRadius}
              onDecrement={this.handleDecrement}
              onIncrement={this.handleIncrement}
            />
          )}

          { (suffix && suffixSeparator) && <VerticalSeparator style={ styles.separator } /> }
          <Adornment adornment={suffix} style={[styles.icon, isFocused && styles.iconFocused]} adornmentStyle={suffixStyle} isFocused />
        </View>
      </InputWrapper>
    );
  }
}
