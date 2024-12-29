import React from "react";
import { View } from "react-native";
import { MessageBoxProps } from "./props";

export default class Message extends React.PureComponent<MessageBoxProps> {
  /**
   * Default properties for the message box component.
   * 
   * @property {string} radius - The border radius of the message box. Default is 'medium'.
   * @property {boolean} loading - Indicates if the message box is in a loading state. Default is false.
   * @property {string} size - The size of the message box. Default is 'default'.
   * @property {string} color - The color of the message box. Default is 'default'.
   * @property {string} type - The type of the message box. Default is 'default'.
   * @property {string} borderWidth - The width of the message box's border. Default is 'hairline'.
   */
  static defaultProps = {
    radius: 'medium',
    size: 'default',
    color: 'default',
    type: 'ghost',
    borderWidth: 'hairline',
  }

  public render() {
    return (
      <View>
      </View>
    );
  }
}