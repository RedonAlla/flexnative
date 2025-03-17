/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-17 23:25:45
 * @ Description: Button component.
 */

import React from "react";
import { Text, Pressable, StyleProp, ViewStyle } from "react-native";


import { Spinner } from "@flexnative/icons";
import ThemeContext from "@flexnative/theme-context";

import { IButtonProps } from "./props";
import createStyles from "./styles";
import { getStyle } from "./utilities";
import BtnIcon from "./icon";


export default class extends React.PureComponent<IButtonProps, {}> {
  /**
   * Default properties for the Button component.
   * 
   * @property {string} radius - The border radius of the button. Default is 'medium'.
   * @property {boolean} loading - Indicates if the button is in a loading state. Default is false.
   * @property {string} size - The size of the button. Default is 'default'.
   * @property {string} color - The color of the button. Default is 'default'.
   * @property {string} type - The type of the button. Default is 'default'.
   * @property {string} borderWidth - The width of the button's border. Default is 'hairline'.
   */
  static defaultProps = {
    radius: 'medium',
    loading: false,
    size: 'medium',
    color: 'default',
    type: 'default',
    borderWidth: 'hairline',
  }

  /**
   * Specifies the context type that this component subscribes to.
   * This property is used to consume the `ThemeContext` within the component.
   * 
   * @type {React.Context<ThemeContextType>}
   */
  static contextType = ThemeContext;
  /**
   * Declares the context type for the button component using the ThemeContext.
   * This context provides theming information to the component.
   */
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
      textStyle,
      icon,
      iconStyle,
      iconRight,
      borderColor,
      activeBorderColor,
      block,
      pressedBoxShadow,
      children,
      style,
      renderLoading,
      ...restProps
    } = this.props;

    const isDisabled = Boolean(loading || disabled);
    const styles = createStyles(
      { 
        size,
        radius,
        borderWidth,
        loading: isDisabled,
        activeColor,
        color,
        type,
        borderColor,
        activeBorderColor,
        pressedBoxShadow
      },
      this.context.state
    );
      
    return (
      <Pressable
        role='button'
        disabled={isDisabled}
        {...restProps}
        style={({pressed}) => [
          styles.container,
          isDisabled && styles.buttonDisabled,
          block && styles.block,
          type === 'default' && (pressed ? styles.typeDefaultPressed : styles.typeDefault),
          type === 'ghost' && (pressed ? styles.typeGhostPressed : styles.typeGhost),
          type === 'inverse' && (pressed ? styles.typeInversePressed : styles.typeInverse),
          type === 'text' && (pressed ? styles.typeTextPressed : styles.typeText),
          type === 'link' && (pressed ? styles.typeLinkPressed : styles.typeLink),
          size === 'medium' && styles.sizeMedium,
          size === 'small' && styles.sizeSmall,
          size === 'large' && styles.sizeLarge,
          style as StyleProp<ViewStyle>
        ]}
      >
        {({ pressed }) => (
          <>            
            {
              Boolean(children)
                ? loading ? (renderLoading ?? <Spinner name="spinner" style={[styles.text, styles.textColor, styles.icon]} />) : children
                :
              <>
                { (!iconRight) &&
                    <BtnIcon icon={icon}
                    loading={loading}
                    renderLoading={renderLoading}
                    style={[
                        styles.icon,
                        styles.textColor,
                        pressed && styles.textColorPressed,
                        getStyle(iconStyle, pressed),
                      ]} />
                }
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  style={[
                    styles.text,
                    styles.textColor,
                    size === 'medium' && styles.textMedium,
                    size === 'small' && styles.textSmall,
                    size === 'large' && styles.textLarge,
                    pressed && styles.textColorPressed,
                    getStyle(textStyle, pressed),
                  ]} >
                    { text }
                </Text>
                { (iconRight) &&
                    <BtnIcon icon={icon}
                    loading={loading}
                    renderLoading={renderLoading}
                    style={[
                        styles.icon,
                        styles.textColor,
                        pressed && styles.textColorPressed,
                        getStyle(iconStyle, pressed),
                      ]} />
                }
              </>
            }
          </>
        )}
      </Pressable>
    )
  }
}