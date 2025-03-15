/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-13 21:19:48
 * @ Description: Button component.
 */

import React from "react";
import { Text, Pressable, StyleProp, ViewStyle, TouchableOpacity } from "react-native";

import { Spinner } from "@flexnative/icons";
import ThemeContext from "@flexnative/theme-context";

import { IButtonProps } from "../props";
import createStyles, { pressedTextColor } from "../styles";
import ButtonText from "./text";
import ButtonIcon from "./icon";
import { WHITE_COLOR } from "../constants";

/**
 * A memoized functional component that renders a button with text and/or icons.
 * 
 * @param {IButtonProps} props - The properties for the button component.
 * @returns {JSX.Element} The rendered button component.
 * 
 * @component
 * @example
 * return (
 *   <Button text={{ value: 'Click Me' }} />
 * )
 * 
 * @remarks
 * This component uses the `ThemeContext` to access theme values and the `Icon` and `Spinner` components for icons and loading animations.
 * 
 * @param {IButtonProps} props - The properties for the button component.
 * @param {string} [props.radius] - The border radius of the button. Default is 'medium'.
 * @param {boolean} [props.loading] - Indicates if the button is in a loading state. Default is false.
 * @param {string} [props.size] - The size of the button. Default is 'default'.
 * @param {string} [props.color] - The color of the button. Default is 'default'.
 * @param {string} [props.type] - The type of the button. Default is 'default'.
 * @param {string} [props.borderWidth] - The width of the button's border. Default is 'hairline'.
 * @param {ITextProps} [props.text] - The text properties for the button.
 * @param {IconProps} [props.iconLeft] - The left icon properties for the button.
 * @param {IconProps} [props.iconRight] - The right icon properties for the button.
 * @param {string} [props.borderColor] - The color of the button's border.
 * @param {string} [props.activeBorderColor] - The color of the button's border when active.
 * @param {string} [props.activeColor] - The color of the button when active.
 * @param {React.ReactNode} [props.children] - The children to be rendered within the button. If set, text and icons will be ignored. 
 * @param {StyleProp<ViewStyle>} [props.style] - Additional styles to be applied to the button. 
 * @param {React.ReactElement} [props.renderLoading] - Custom element to render as a loading indicator component.
 * @param {boolean} [props.disabled] - Set the button as disabled.
 */
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
      icon,
      iconRight,
      borderColor,
      activeBorderColor,
      block,
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
        activeColor, // text
        color,
        type,
        borderColor,
        activeBorderColor
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
              Boolean(children) ? children :
              <>
                {/* <Text numberOfLines={1}
                      adjustsFontSizeToFit
                      style={[
                          this.props.style,
                          style,
                          setTextColor(this.props.pressed, color, activeColor),
                        ]} {...textProps}>
                          {value ?? (this.props.text as string)}
                      </Text> */}
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  style={[
                    styles.text,
                    styles.textColor,
                    size === 'medium' && styles.textMedium,
                    size === 'small' && styles.textSmall,
                    size === 'large' && styles.textLarge,
                    pressed && styles.textColorPressed
                  ]} >
                    { text }
                </Text>
                {/* <ButtonIcon pressed={pressed} icon={iconRight} style={[ styles.text, pressedTextColor(pressed, type) ]} /> */}
              </>
            }
          </>
        )}
      </Pressable>
    )
  }
}