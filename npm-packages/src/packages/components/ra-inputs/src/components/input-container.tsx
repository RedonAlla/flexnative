import React from "react";
import { StyleProp, TextStyle, View, Text } from "react-native";

import { StateCallbackType } from "../input.props";
import FalsyComponent from "./falsy-component";
import { materialStyle } from "../input.styles";


type InputContainerProps = {
  material?: boolean;
  children: React.ReactNode;
  label?: string | React.ReactElement;
  labelStyle?:
    | StyleProp<TextStyle>
    | ((state: StateCallbackType) => StyleProp<TextStyle>)
    | undefined;
}

export default class extends React.PureComponent<InputContainerProps, {}> {
  public render() {
    const {material, label, labelStyle, children } = this.props;

    if(!Boolean(material))
      return children;

    const styles = materialStyle();
      
    return (
      <View style={styles.container}>
        <FalsyComponent style={labelStyle} component={<Text>{label}</Text>} />
        { children }
      </View>
    );
  }
}