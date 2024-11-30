/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: HelperText component to render on Input Component.
 */

import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import FalsyComponent from "./falsy-component";

/**
 * Type definition for HelperText component props.
 */
type Props = {
  /**
   * Optional helper text to be displayed.
   */
  helperText?: string;

  /**
   * Maximum length of the input text.
   */
  maxLength?: number;

  /**
   * Current length of the input text.
   */
  currentLength?: number;

  /**
   * Style for the container.
   */
  containerStyle: StyleProp<ViewStyle>;

  /**
   * Style for the helper text.
   */
  helpTextStyle: StyleProp<TextStyle>;

  /**
   * Style for the text counter.
   */
  txtCounterStyle: StyleProp<TextStyle>;
}

/**
 * HelperText component that displays helper text and a text counter.
 * It extends React.PureComponent to optimize performance by implementing a shallow prop and state comparison.
 * 
 * @class HelperText
 * @extends {React.PureComponent<Props>}
 */
export default class HelperText extends React.PureComponent<Props> {
  public render() {
    const {
      helperText,
      maxLength,
      currentLength,
      containerStyle,
      helpTextStyle,
      txtCounterStyle
    } = this.props;

    if(!Boolean(helperText || maxLength))
      return null;

    return (
      <View style={containerStyle}>
        
        <FalsyComponent
          shouldRender={Boolean(helperText)}
          style={helpTextStyle}
          component={<Text>{helperText}</Text>}
        />

        <FalsyComponent
          shouldRender={Boolean(maxLength)}
          style={txtCounterStyle}
          component={<Text>{`${currentLength} / ${maxLength}`}</Text>}
        />
        
      </View>
    );
  }
}