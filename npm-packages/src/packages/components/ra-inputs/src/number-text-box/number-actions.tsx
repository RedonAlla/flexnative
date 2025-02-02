/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: Action and ActionContainer components, as well as a helper function for styles.
 */

import React from "react";

import {
  ColorValue,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle
} from "react-native";

import Icon from "@flexnative/icons";
import { BaseTheme, BorderRadius, Sizes } from "@flexnative/theme-context";
import { ACTION_CONTAINER_SIZE_MATERIAL_MULTIPLIER, ACTION_CONTAINER_SIZE_MULTIPLIER } from "../input.constants";

/**
 * Type definition for ActionProps.
 */
type ActionProps = {
  /**
   * Indicates if the action is disabled.
   */
  disabled?: boolean;

  /**
   * Specifies the icon type.
   */
  icon: 'caret-up' | 'caret-down';

  /**
   * Function to be executed on action.
   * @returns void
   */
  action: () => void;

  /**
   * Function that returns the style for the button based on its state.
   */
  buttonStyle: ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);

  /**
   * Style for the icon.
   */
  iconStyle: StyleProp<TextStyle>;
}

/**
 * Action component that renders a pressable button with an icon.
 * Component extending React.PureComponent,
 * which is optimized for performance by implementing a shallow prop and state comparison.
 * 
 * @class Action
 * @extends {React.PureComponent<ActionProps>}
 */
class Action extends React.PureComponent<ActionProps> {
  static displayName = 'NumberTextBox Action';

  public render() {
    const { disabled, buttonStyle, icon, action, iconStyle } = this.props;

    return (
      <Pressable
        onPress={action}
        disabled={disabled}
        style={buttonStyle}
      >
        <Icon name={icon} style={iconStyle} />
      </Pressable>
    )
  }
}

/**
 * Type definition for ContainerProp.
*/
type ContainerProp = {
  /**
   * Indicates if the container uses Material design style.
   */
  isMaterial: boolean;

  /**
   * Indicates if the input is disabled.
   */
  disabled: boolean;

  /**
   * Indicates if actions should be shown in the container.
   */
  showActions: boolean;

  /**
   * Specifies the size of the input component.
   */
  size: Sizes;

  /**
   * Specifies the border radius of the container.
   */
  borderRadius: BorderRadius;

  /**
   * Specifies the theme of the app.
   */
  theme: BaseTheme<any>;
}

/**
 * Define a type 'ActionContainerProp' which combines two callback functions - 
 * onIncrement and onDecrement - with other properties defined in ContainerProp.
 */
type ActionContainerProp = {
  onIncrement: () => void;
  onDecrement: () => void;
} & ContainerProp;

/**
 * ActionContainer component that renders a two button with an icon in NumberTextBox for increment and decrement input value.
 * Component extending React.PureComponent,
 * which is optimized for performance by implementing a shallow prop and state comparison.
 * 
 * @class Action
 * @extends {React.PureComponent<ActionProps>}
 */
export default class ActionContainer extends React.PureComponent<ActionContainerProp> {
  static displayName = 'NumberTextBox ActionContainer';

  public render() {
    const {
      isMaterial,
      size,
      borderRadius,
      showActions,
      disabled,
      theme,
      onIncrement,
      onDecrement
    } = this.props;

    if(!showActions)
      return null;

    const styles = createStyles({
      isMaterial,
      disabled,
      showActions,
      size,
      borderRadius,
      theme
    });

    return (
      <View style={styles.actionsContainer}>
        <Action
          icon='caret-up'
          disabled={disabled}
          iconStyle={styles.icon}
          buttonStyle={applyActionStyle(theme.colors.overlay, [styles.button, styles.buttonSeparator])}
          action={onIncrement}
        />
        <Action
          icon='caret-down'
          disabled={disabled}
          iconStyle={styles.icon}
          buttonStyle={applyActionStyle(theme.colors.overlay, styles.button)}
          action={onDecrement}
        />
      </View>
    );
  }
}

/**
 * Creates styles for the ActionContainer component based on the provided properties.
 * 
 * @param {ContainerProp} props - The properties used to create the styles.
 * @returns {object} The styles object.
 */
function createStyles(props: ContainerProp) {
  const fontSize = props.theme.fontSize[props.size] ?? props.theme.fontSize.default;
  const borderRadius = props.theme.borderRadius[props.borderRadius] ?? props.borderRadius;
  
  const actionsContainerSize =
    props.isMaterial
      ? fontSize * ACTION_CONTAINER_SIZE_MATERIAL_MULTIPLIER
      : fontSize * ACTION_CONTAINER_SIZE_MULTIPLIER;

  return StyleSheet.create({
    button: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonSeparator: {
      borderBottomWidth: 1,
      borderBottomColor: props.theme.colors.border
    },
    actionsContainer: {
      display: 'flex',
      overflow: "hidden",
      flexDirection: 'column',
      backgroundColor: props.theme.colors.placeholder,
      borderTopRightRadius: borderRadius / 2,
      borderBottomRightRadius: borderRadius / 2,
      opacity: props.disabled ? props.theme.metrics.disabledOpacity : 1,
      height: actionsContainerSize,
      width: actionsContainerSize,
    },
    icon: {
      fontSize: fontSize,
      textAlign: 'center',
    }
  });
}

/**
 * Applies styles to the action button based on its state.
 * 
 * @param {ColorValue} overlay - The overlay color to apply when the button is pressed.
 * @param {StyleProp<ViewStyle>} [defaultStyle] - The default style to apply to the button.
 * @returns {function} A function that returns the style for the button based on its state.
 */
export function applyActionStyle(overlay: ColorValue, defaultStyle?: StyleProp<ViewStyle>) {
  return (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    return [
      defaultStyle,
      { backgroundColor: state.pressed ? overlay : 'transparent' }
    ]
  }
}