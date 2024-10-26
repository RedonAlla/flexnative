import React from "react";
import { Text, ColorValue, Pressable, PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle } from "react-native";

import { IconName, icons } from "@flexnative/icons";

import { ACTION_SIZE, ICON_SIZE } from "./constants";


interface HeaderButtonProps {
  icon: keyof IconName;
  iconColor: ColorValue;
  backgroundColor?: ColorValue;
  overlayColor: ColorValue;
  onClick(): void;
}

export default class extends React.PureComponent<HeaderButtonProps, {}> {
  public render() {
    return (
      <Pressable style={buttonStyle(this.props.backgroundColor!, this.props.overlayColor)} onPress={this.props.onClick} >
        <Text style={[iconStyle.icon, {color: this.props.iconColor}]} >
          {icons[this.props.icon]}
        </Text>
      </Pressable>
    )
  }
}

function buttonStyle(backgroundColor: ColorValue, overlayColor: ColorValue) {
  return (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    return [
      {
        pointerEvents: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: ACTION_SIZE,
        height: ACTION_SIZE,
        borderRadius: ACTION_SIZE / 2,
        backgroundColor: state.pressed ? overlayColor : backgroundColor
      }
    ]
  }
}

const iconStyle = StyleSheet.create({
  icon: {
    fontFamily: 'Icons',
    fontSize: ICON_SIZE,
    userSelect: 'none'
  }
});