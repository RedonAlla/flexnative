import React from "react";
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Pressable,
  ColorValue
} from "react-native";

import ThemeContext from "@flexnative/theme-context";
import Icon from "@flexnative/icons";

import { NumberTextBoxProps } from "./input.props";
import { createStyles } from "./input.styles";
import { getStyle } from "./input.utilities";
import InputContainer from './components/input-container';
import Adornment from './components/input-adornment';
import FalsyComponent from "./components/falsy-component";
import { DARK_OVERLAY, LIGHT_OVERLAY } from "./input.constants";


type State = {
  isFocused: boolean;
  currentLength?: number;
  value?: string;
}

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
        //focusedBorders: focusedBorders,
        material,
        theme: {
          colors: this.context.colors,
          isDark: this.context.colorScheme === 'dark'
        }
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
          { paddingRight: Boolean(actions && radius === 'full') ? styles.container.paddingVertical : undefined },
          this.state.isFocused ? styles.containerFocus : styles.containerNotFocus
        ]}>
          <Adornment
            adornment={prefix}
            adornmentStyle={[
              styles.icon,
              prefixSeparator ? styles.prefixSeparator : undefined,
              getStyle<ViewStyle | TextStyle>(prefixStyle, this.state.isFocused)
            ]}
          />

          <InputContainer material={material} label={label} labelStyle={[styles.label, getStyle<TextStyle>(labelStyle, this.state.isFocused)]}>
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
          
          <Adornment
            adornment={suffix}
            adornmentStyle={[
              styles.icon,
              { textAlign: 'end' },
              suffixSeparator ? styles.suffixSeparator : undefined,
              getStyle<ViewStyle | TextStyle>(suffixStyle, this.state.isFocused)
            ]}
          />
          <ActionContainer
            showActions={actions}
            textColor={this.context.colors.text}
            bgColor={this.context.colors.placeholder}
            borderColor={this.context.colors.border}
            disabled={Boolean(disabled || readOnly)}
            isDark={this.context.colorScheme ==='dark'}
            width={material ? Number(styles.icon.width!) : Number(styles.icon.width!) * 1.3}
            fontSize={Number(styles.icon?.width) * 0.25}
            borderRadius={Number(styles.container.borderRadius!) / 1.2}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
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


type ActionProp = {
  disabled: boolean;
  isDark: boolean;
  fontSize: number;
  textColor: ColorValue;
  icon: 'caret-up' | 'caret-down';
  action: () => void;
}

class Action extends React.PureComponent<ActionProp, {}> {
  public render() {
    const { disabled, isDark, fontSize, textColor, icon, action } = this.props;

    return (
      <Pressable onPress={action} disabled={disabled} style={({pressed}) => [
        {
          backgroundColor: pressed ? isDark ? LIGHT_OVERLAY : DARK_OVERLAY : 'transparent',
        },
        styles.button,
      ]}>
        <Icon name={icon} size={fontSize} style={[styles.icon, {paddingRight: fontSize * 1.8, color: textColor}]} />
      </Pressable>
    );
  }
}

type ActionContainerProp = {
  disabled: boolean;
  isDark: boolean;
  showActions: boolean;
  textColor: ColorValue;
  bgColor: ColorValue;
  width: number;
  fontSize: number;
  borderRadius: number;
  borderColor: ColorValue;
  onIncrement: () => void;
  onDecrement: () => void;
}

class ActionContainer extends React.PureComponent<ActionContainerProp, {}> {
  public render() {
    const { isDark, textColor, bgColor, borderColor, fontSize, width, borderRadius, showActions, disabled, onIncrement, onDecrement } = this.props;

    if(!showActions)
      return null;

    return (
      <View style={[
        styles.actionsContainer,
        {
          width: width,
          backgroundColor: bgColor,
          borderTopRightRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
          opacity: disabled ? 0.4 : 1
        }
      ]}>
        <Action isDark={isDark} fontSize={fontSize} textColor={textColor} icon='caret-up' disabled={disabled} action={onIncrement}/>
        <View style={{width: '100%', height: 1, backgroundColor: borderColor}}/>
        <Action isDark={isDark} fontSize={fontSize}  textColor={textColor} icon='caret-down' disabled={disabled} action={onDecrement}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionsContainer: {
    display: 'flex',
    height: '100%',
    overflow: "hidden",
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  icon: {
    textAlign: 'center',
    verticalAlign: 'middle',
  }
})