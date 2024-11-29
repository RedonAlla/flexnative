import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import FalsyComponent from "./falsy-component";


type Props = {
  helperText?: string;
  maxLength?: number;
  currentLength?: number;
  containerStyle: StyleProp<ViewStyle>;
  helpTextStyle: StyleProp<TextStyle>;
  txtCounterStyle: StyleProp<TextStyle>;
}

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