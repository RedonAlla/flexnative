import React from "react";
import { StyleProp, TextStyle, View, Text } from "react-native";

import FalsyComponent from "./falsy-component";
import { materialStyle } from "../input.styles";


type InputContainerProps = {
  material?: boolean;
  children: React.ReactNode;
  label?: string | React.ReactElement;
  labelStyle?: StyleProp<TextStyle>;
}

export default class InputContainer extends React.PureComponent<InputContainerProps, {}> {
  static displayName = 'InputContainer';

  public render() {
    const {material, label, labelStyle, children } = this.props;

    /**
     * Optimize by returning early if material is falsy.
     */
    if (!material) {
      return children;
    }

    /**
     * Memoize styles if they are costly to compute.
     */
    const styles = materialStyle();
      
    return (
      <View style={styles.container}>
        <FalsyComponent style={labelStyle} component={<Text>{label}</Text>} />
        { children }
      </View>
    );
  }
}