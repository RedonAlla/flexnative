/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: TextBox input field.
 */

import React from "react";
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
  TextStyle
} from "react-native";

import ThemeContext from "@flexnative/theme-context";

import { BaseInputProps } from "./input.props";
import { createStyles } from "./input.styles";
import { getStyle } from "./input.utilities";
import InputContainer from './components/input-container';
import InputIcon from './components/input-icon';
import FalsyComponent from "./components/falsy-component";
import HelperText from "./components/input-helper-text";

/**
 * Defines a TypeScript type alias `State`, which is used to represent the current state of a component. 
 * It contains two properties:
 */
type State = {
  /**
   * A boolean indicating whether the component (e.g., an input field) is currently focused.
   */
  isFocused: boolean;

  /**
   * A number that may represent the current length of the value in the component, if applicable.
   * This could be used for inputs where measuring the length is relevant, such as text inputs or text areas.
   */
  currentLength?: number;
}

/**
 * Defines a TextBox component, extending React.PureComponent,
 * which is optimized for performance by implementing a shallow prop and state comparison.
 * 
 * It uses generics to type props as BaseInputProps and state as State.
 */
export default class TextBox extends React.PureComponent<BaseInputProps, State> {
  static defaultProps = {
    size: 'default',
    type: 'outlined',
    radius: 'medium',
    borderWidth: 'hairline',
  }

  constructor(props: BaseInputProps) {
    super(props);

    this.state = {
      isFocused: false,
      currentLength: 0
    }
    
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  /**
   * Handles blur event, sets focus state, and triggers a parent's onBlur callback if not disabled.
   * @param {NativeSyntheticEvent<TextInputFocusEventData>} e 
   */
  private handleBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    if(!this.props.disabled)
      this.setState({isFocused: false});

    this.props.onBlur?.(e);
  }

  /**
   * Handles focus event and updates focus state. It also calls a parent's onFocus callback.
   * @param {NativeSyntheticEvent<TextInputFocusEventData>} e 
   */
  public handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if(!this.props.disabled)
      this.setState({isFocused: true});

    this.props.onFocus?.(e);
  };

  /**
   * Updates the text length state and triggers a parent's onChangeText callback.
   * @param {string} text 
   */
  private handleChangeText = (text: string) => {
    this.setState({currentLength: text.length});

    this.props.onChangeText?.(text);
  };

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

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
      //focusedBorders,
      material,
      label,
      labelStyle,
      helperText,
      prefix,
      prefixStyle,
      prefixSeparator,
      suffix,
      suffixStyle,
      suffixSeparator,

      cursorColor,
      readOnly,
      maxLength,
      selectionColor,
      placeholderTextColor,
      style,
      ...restProps
    } = this.props;

    if (material && (label === null || label === undefined))
      throw new Error(`for type material Label it is required.`) ;

    const styles = createStyles(
      {
        type: type!,
        color: color!,
        size: size!,
        radius: radius!,
        isError: isError!,
        borderWidth: borderWidth,
        disabled: disabled,
        readOnly: readOnly,
        borderColor: borderColor,
        activeBorderColor: activeBorderColor,
        backgroundColor: backgroundColor,
        activeBackgroundColor: activeBackgroundColor,
        //focusedBorders: focusedBorders,
        material,
        theme: this.context.state,
      }
    );
    
    return (
      <View style={[styles.wrapper, !material ? {flex: 1} : undefined]}>
        <FalsyComponent
          shouldRender={Boolean(label && !material)}
          style={[styles.label, getStyle<TextStyle>(labelStyle, this.state.isFocused)]}
          component={<Text>{label}</Text>}
        />

        <View style={[
          styles.container,
          this.state.isFocused ? styles.containerFocus : styles.containerNotFocus
        ]}>
          <InputIcon
            icon={prefix}
            iconStyle={[
              styles.icon,
              prefixSeparator ? styles.prefixSeparator : undefined,
              getStyle<ViewStyle | TextStyle>(prefixStyle, this.state.isFocused)]}
            />

          <InputContainer material={material} label={label} labelStyle={[styles.label, getStyle<TextStyle>(labelStyle, this.state.isFocused)]}>
            <TextInput
              style={[styles.input, style]}
              maxLength={maxLength}
              readOnly={readOnly || disabled}
              cursorColor={cursorColor || this.context.state.colors.primary}
              selectionColor={selectionColor || this.context.state.colors.primary}
              placeholderTextColor={placeholderTextColor || this.context.state.colors.border}
              {...restProps}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              onChangeText={this.handleChangeText}
            />
          </InputContainer>
          
          <InputIcon
            icon={suffix}
            iconStyle={[
              styles.icon,
              suffixSeparator ? styles.suffixSeparator : undefined,
              getStyle<ViewStyle | TextStyle>(suffixStyle, this.state.isFocused)
            ]}
          />
        </View>

        {/* <HelperText
          helperText={helperText}
          maxLength={maxLength}
          currentLength={this.state.currentLength}
          containerStyle={styles.helpTextContainer}
          helpTextStyle={[styles.text, styles.helpText]}
          txtCounterStyle={[styles.text, styles.txtCounter]}
        /> */}
      </View>
    );
  }
}