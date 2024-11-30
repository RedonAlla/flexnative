/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: Component for Wrapper Input Component. It renders also the label for material design style.
 */

import React from "react";
import { StyleProp, TextStyle, View, Text } from "react-native";

import FalsyComponent from "./falsy-component";
import { materialStyle } from "../input.styles";


/**
 * Type definition for InputContainer component props.
 */
type InputContainerProps = {
  /**
   * Determines if the material design style should be applied.
   */
  material?: boolean;

  /**
   * The children elements to be rendered inside the container.
   */
  children: React.ReactNode;

  /**
   * The label to be displayed. It can be a string or a React element.
   */
  label?: string | React.ReactElement;

  /**
   * Style to be applied to the label.
   */
  labelStyle?: StyleProp<TextStyle>;
}

/**
 * InputContainer component that conditionally applies material design styles.
 * It extends React.PureComponent to optimize performance by implementing a shallow prop and state comparison.
 * 
 * @class InputContainer
 * @extends {React.PureComponent<InputContainerProps, {}>}
 */
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
    
    const styles = materialStyle();
      
    return (
      <View style={styles.container}>
        <FalsyComponent style={labelStyle} component={<Text>{label}</Text>} />
        { children }
      </View>
    );
  }
}