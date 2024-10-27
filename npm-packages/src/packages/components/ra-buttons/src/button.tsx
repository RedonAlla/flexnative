import React from "react";
import { Text, View, Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";

import Icon, { IconName, Spinner } from "@flexnative/icons";
import ThemeContext from "@flexnative/theme-context";

import { IButtonProps, ITextProps, IconProps } from "./props";
import createStyles, { applyStyle, styleColor } from "./styles";
import FalsyComponent from "./falsy-component";


export default class extends React.PureComponent<IButtonProps, {}> {
  static defaultProps = {
    radius: 'medium',
    loading: false,
    size: 'default',
    color: 'default',
    type: 'default',
    borderWidth: 'hairline',
  }

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  
  public render() {
    const {
      size,
      radius,
      borderWidth,
      loading,
      disabled,
      activeColor,
      color,
      type,
      text,
      iconLeft,
      iconRight,
      borderColor,
      activeBorderColor,
      children,
      style,
      renderLoading,
      ...restProps
    } = this.props;
    const isDisabled = Boolean(loading || disabled);
    const isDark = Boolean(this.context.colorScheme === 'dark');

    const { value: textValue, color: textColor, activeColor: textActiveColor, style: textStyle, ...textProps } = (text as ITextProps) || {};
    const { color: leftIconColor, activeColor: leftIconActiveColor, style: leftIconStyle } = (iconLeft as IconProps) || {};
    const { color: rightIconColor, activeColor: rightIconActiveColor, style: rightIconStyle } = (iconRight as IconProps) || {};

    const styles = createStyles(
      { 
        type,
        size,
        color,
        textColor,
        textActiveColor
      },
      {
        colors: this.context.colors,
        isDark: isDark
      });
      
    return (
      <Pressable
        role='button'
        disabled={isDisabled}
        {...restProps}
        style={applyStyle({
          type,
          color,
          size,
          radius,
          hasText: !!text,
          borderWidth,
          disabled: isDisabled,
          activeColor,
          borderColor,
          activeBorderColor,
          theme: {
            colors: this.context.colors,
            isDark: isDark
          }
        }, style as StyleProp<ViewStyle>
        )}
      >
        {({ pressed }) => (
          <ButtonWrapper
            isLoading={loading}
            renderChildren={children}
            loading={
              <FalsyComponent
                shouldRender={loading}
                fallback={renderLoading}
                style={[styles.icon, styles.spinnerColor]}
                component={Boolean(renderLoading) ? undefined : <Spinner name="spinner" />}
              />
            }
            overlay={<FalsyComponent shouldRender={pressed && !Boolean(activeColor)} style={styles.overlay} component={<View />} />}
          >
            <ButtonIcon icon={iconLeft!} shouldRender={Boolean(iconLeft)}
              style={[
                styles.icon,
                pressed ? styleColor(styles.textActiveColor.color!, leftIconActiveColor) : styleColor(styles.textColor.color!, leftIconColor),
                leftIconStyle
              ]}
            />
            <FalsyComponent
              shouldRender={Boolean(text)}
              style={[styles.text, pressed ? styles.textActiveColor : styles.textColor, textStyle]}
              component={<Text {...textProps}>{textValue ?? (text as string)}</Text>}
            />
            <ButtonIcon icon={iconRight!} shouldRender={Boolean(iconRight)}
              style={[
                styles.icon,
                pressed ? styleColor(styles.textActiveColor.color!, rightIconActiveColor) : styleColor(styles.textColor.color!, rightIconColor),
                rightIconStyle
              ]}
            />
          </ButtonWrapper> 
        )}
      </Pressable>
    )
  }
}

type ButtonIconProps = {
  shouldRender: boolean;
  icon: keyof IconName | IconProps | React.ReactElement;
  style: StyleProp<TextStyle>;
};

class ButtonIcon extends React.PureComponent<ButtonIconProps> {
  public render() {
    const { icon, shouldRender, style } = this.props;
    if(!shouldRender)
      return null;

    const { name: iconName, ...iconProps } = (icon as IconProps) || {};

    return (
      <FalsyComponent
        shouldRender={shouldRender}
        style={style}
        fallback={icon as React.ReactElement}
        component={React.isValidElement(icon) ? undefined : <Icon name={iconName ?? (icon as keyof IconName)} {...iconProps} /> }
      />
    );
  }
}

type ButtonWrapperProps = {
  isLoading?: boolean;
  renderChildren?: React.ReactNode;
  overlay: React.ReactElement;
  children: React.ReactNode;
  loading?: React.ReactElement;
}

class ButtonWrapper extends React.Component<ButtonWrapperProps> {
  public render() {
    const hasChildren = !!this.props.renderChildren;
    return (
      <React.Fragment>
        {this.props.overlay}
        {
          this.props.isLoading
            ? this.props.loading
            :  hasChildren
              ? this.props.renderChildren
              : this.props.children
        }
      </React.Fragment>
    )
  }
}