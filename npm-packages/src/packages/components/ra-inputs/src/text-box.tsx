import React from "react";
import { View, Text, TextInput, NativeSyntheticEvent, TextInputFocusEventData, ViewStyle, TextStyle } from "react-native";

import ThemeContext from "@flexnative/theme-context";

import { BaseInputProps } from "./input.props";
import { createStyles } from "./input.styles";
import { getStyle } from "./input.utilities";
import InputContainer from './components/input-container';
import Adornment from './components/input-adornment';
import FalsyComponent from "./components/falsy-component";


type State = {
  isFocused: boolean;
  currentLength?: number;
}

export default class extends React.PureComponent<BaseInputProps, State> {
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
        //focusedBorders: focusedBorders,
        material,
        theme: this.context.colors
      }
    );
    
    return (
      <View style={styles.wrapper}>
        <FalsyComponent
          shouldRender={Boolean(label && !material)}
          style={[styles.label, getStyle<TextStyle>(labelStyle, this.state.isFocused)]}
          component={<Text>{label}</Text>}
        />

        <View style={[
          styles.container,
          this.state.isFocused ? styles.containerFocus : styles.containerNotFocus
        ]}>
          <Adornment
            adornment={prefix}
            adornmentStyle={[
              styles.icon,
              prefixSeparator ? styles.prefixSeparator : undefined,
              getStyle<ViewStyle | TextStyle>(prefixStyle, this.state.isFocused)]}
            />

          <InputContainer material={material} label={label} labelStyle={[styles.label, getStyle<TextStyle>(labelStyle, this.state.isFocused)]}>
            <TextInput
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              onChangeText={this.handleChangeText}
              style={[styles.input, style]}
              maxLength={maxLength}
              readOnly={readOnly || disabled}
              cursorColor={cursorColor || this.context.colors.primary}
              selectionColor={selectionColor || this.context.colors.primary}
              placeholderTextColor={placeholderTextColor || this.context.colors.border}
              {...restProps}
            />
          </InputContainer>
          
          <Adornment
            adornment={suffix}
            adornmentStyle={[
              styles.icon,
              { textAlign: 'end' },
              suffixSeparator ? styles.suffixSeparator : undefined,
              getStyle<ViewStyle | TextStyle>(suffixStyle, this.state.isFocused)
            ]}
          />
        </View>

        {Boolean(helperText || maxLength) && (
          <View style={styles.helpTextContainer}>
            {Boolean(helperText) && (
              <Text style={[styles.text, styles.helpText]}>{helperText}</Text>
            )}
            {Boolean(maxLength) && (
              <Text style={[styles.text, styles.txtCounter]}>{`${this.state.currentLength} / ${maxLength}`}</Text>
            )}
          </View>
        )}
      </View>
    );
  }
}