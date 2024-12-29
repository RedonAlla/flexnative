/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-14 17:09:49
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-21 22:23:18
 * @ Description: 
 */

import React from "react";
import {
  ColorValue,
  Text,
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  StyleProp,
  ViewStyle
} from "react-native";
import { IconName, icons } from "@flexnative/icons";
import { HEADER_ACTION_SIZE, HEADER_ACTION_SIZE_ICON_SIZE } from "@/constants/layout";


/**
 * Interface defining the properties for a header button component.
 */
interface HeaderButtonProps {
  /**
   * The key representing the icon to be displayed, derived from `IconName`.
   */
  icon: keyof IconName;

  /**
   * The color to be used for the icon.
   */
  iconColor: ColorValue;

  /**
   * Optional background color for the button.
   */
  backgroundColor?: ColorValue;

  /**
   * The color overlay applied when the button is pressed
   */
  overlayColor: ColorValue;
  
  /**
   * Function invoked when the button is clicked.
   */
  onClick(): void;
}

/**
 * Action component that renders a pressable button with an icon.
 * Uses React.PureComponent for performance optimization.
 */
export default class Action extends React.PureComponent<HeaderButtonProps> {
  public render() {
    return (
      <Pressable
        style={buttonStyle(this.props.backgroundColor!, this.props.overlayColor)}
        onPressIn={this.props.onClick}
      >
        <Text style={[iconStyle.icon, {color: this.props.iconColor}]} >
          {icons[this.props.icon]}
        </Text>
      </Pressable>
    )
  }
}

/**
 * Function returning a style object for the Pressable component.
 *
 * @param {ColorValue} backgroundColor - The default background color of the button
 * @param {ColorValue} overlayColor - The color applied when the button is pressed
 * @returns Style configuration based on the button state (pressed or not)
 */
function buttonStyle(backgroundColor: ColorValue, overlayColor: ColorValue) {
  return (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    return [
      {
        pointerEvents: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: HEADER_ACTION_SIZE,
        height: HEADER_ACTION_SIZE,
        borderRadius: HEADER_ACTION_SIZE / 2,
        backgroundColor: state.pressed ? overlayColor : backgroundColor
      }
    ]
  }
}

/**
 * Stylesheet defining styles for the icon within the button.
 */
const iconStyle = StyleSheet.create({
  icon: {
    fontFamily: 'Icons',
    userSelect: 'none',
    fontSize: HEADER_ACTION_SIZE_ICON_SIZE
  }
});