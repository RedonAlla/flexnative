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


type ActionProps = {
  disabled: boolean;
  icon: 'caret-up' | 'caret-down';
  action: () => void;
  buttonStyle: ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  iconStyle: StyleProp<TextStyle>;
}

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

type ContainerProp = {
  isMaterial: boolean;
  disabled: boolean;
  showActions: boolean;
  size: Sizes;
  borderRadius: BorderRadius;
  theme: BaseTheme<any>;
}

type ActionContainerProp = {
  onIncrement: () => void;
  onDecrement: () => void;
} & ContainerProp;

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

export function applyActionStyle(overlay: ColorValue, defaultStyle?: StyleProp<ViewStyle>) {
  return (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    return [
      defaultStyle,
      { backgroundColor: state.pressed ? overlay : 'transparent' }
    ]
  }
}