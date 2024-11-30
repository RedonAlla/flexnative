/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: Number input box with additional functionalities like incrementing and decrementing the value, handling focus and blur events, and supporting various styles and themes. It is designed to be highly customizable through props.
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

import { NumberTextBoxProps } from "../input.props";
import { createStyles } from "../input.styles";
import { getStyle } from "../input.utilities";
import InputContainer from '../components/input-container';
import InputIcon from '../components/input-icon';
import FalsyComponent from "../components/falsy-component";
import HelperText from "../components/input-helper-text";
import ActionContainer from "./number-actions";

/**
 * Define a type 'State' representing the state structure for a component or application.
 */
type State = {
  /**
   * A boolean indicating whether the element is currently focused.
   */
  isFocused: boolean;

  /**
   * An integer representing the current length of the value, 
   * possibly used to track input length or similar metrics.
   */
  currentLength: number;

  /**
   * A string containing the current value, likely representing input data or content.
   */
  value: string;
}

/**
 * NumericTextBox component.
 * Component extending React.PureComponent,
 * which is optimized for performance by implementing a shallow prop and state comparison.
 * 
 * @class NumericTextBox
 * @extends {React.PureComponent<NumberTextBoxProps>}
 */
export default class extends React.PureComponent<NumberTextBoxProps, State> {
  static defaultProps = {
    size: 'default',
    type: 'outlined',
    radius: 'medium',
    borderWidth: 'hairline',
    actions: true,
    step: 1
  }

  constructor(props: NumberTextBoxProps) {
    super(props);

    this.state = {
      isFocused: false,
      currentLength: 0,
      value: ''
    }
    
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  private handleBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    if(!this.props.disabled)
      this.setState({isFocused: false});

    this.props.onBlur?.(e);
  };

  private handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if(!this.props.disabled)
      this.setState({isFocused: true});

    this.props.onFocus?.(e);
  };

  private handleChangeText = (text: string) => {
    if (+text) {
      this.setState({
        value: text,
        currentLength: text.length
      });
    }
  };

  private handleIncrement = () => {
    const value = +this.state.value! + this.props.step;
    this.setState({value: value.toString()});
  };

  private handleDecrement = () => {
    const value = +this.state.value! - this.props.step;
    this.setState({value: value.toString()});
  };

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  public render() {
    const {
      type,
      size,
      radius,
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

    if (material && (label === null || label === undefined))
      throw new Error(`for type material Label it is required.`) ;

    const styles = createStyles(
      {
        type: type,
        color: color!,
        size: size,
        radius: radius,
        borderWidth: borderWidth,
        disabled: disabled,
        readOnly: readOnly,
        borderColor: borderColor,
        activeBorderColor: activeBorderColor,
        backgroundColor: backgroundColor,
        activeBackgroundColor: activeBackgroundColor,
        material,
        theme: this.context
      }
    );
    
    return (
      <View style={styles.wrapper}>

        <FalsyComponent
          shouldRender={Boolean(label && !material)}
          style={[
            styles.label,
            getStyle<TextStyle>(labelStyle, this.state.isFocused)
          ]}
          component={<Text>{label}</Text>}
        />

        <View style={[
          styles.container,
          { paddingRight: Boolean(actions && radius === 'full') ? styles.container.paddingVertical : undefined },
          this.state.isFocused ? styles.containerFocus : styles.containerNotFocus
        ]}>
          
          <InputIcon
            icon={prefix}
            iconStyle={[
              styles.icon,
              prefixSeparator ? styles.prefixSeparator : undefined,
              getStyle<ViewStyle | TextStyle>(prefixStyle, this.state.isFocused)
            ]}
          />

          <InputContainer
            material={material}
            label={label}
            labelStyle={[styles.label, getStyle<TextStyle>(labelStyle, this.state.isFocused)]}
          >
            <TextInput
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              style={[styles.input, style]}
              maxLength={maxLength}
              readOnly={readOnly || disabled}
              cursorColor={cursorColor || this.context.colors.primary}
              selectionColor={selectionColor || this.context.colors.primary}
              placeholderTextColor={placeholderTextColor || this.context.colors.border}
              inputMode='numeric'
              {...restProps}
              onChangeText={this.handleChangeText}
              value={this.state.value}
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
          <ActionContainer
            isMaterial={material!}
            showActions={actions}
            disabled={Boolean(disabled || readOnly)}
            size={size}
            borderRadius={radius}
            theme={this.context}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </View>

        <HelperText
          helperText={helperText}
          maxLength={maxLength}
          currentLength={this.state.currentLength}
          containerStyle={styles.helpTextContainer}
          helpTextStyle={[styles.text, styles.helpText]}
          txtCounterStyle={[styles.text, styles.txtCounter]}
        />
        
      </View>
    );
  }
}