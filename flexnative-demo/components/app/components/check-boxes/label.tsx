import React from "react";
import { Text, Alert, Platform, StyleSheet, ColorValue, StyleProp, TextStyle } from "react-native";

import Icon from "@flexnative/icons";

import { Check, StateCallbackType } from "@flexnative/inputs";
import Example, { ExampleContainer } from "./example-container";


const items: Array<boolean> = [
  false,
  false
];

export default class extends Example {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <ExampleContainer title='Label' shouldRender={Boolean(this.state.items.length > 0)}>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} label={<Label />} />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} label='labelStyles' labelStyle={labelStyles('rgb(35, 189, 224)', 'crimson')} />
      </ExampleContainer>
    );
  }
}

function Label() {
  const openAlert = () =>
    Platform.OS === 'web'
      ? alert('Custom Element as label')
      : Alert.alert('Alert Title', 'Custom Element as label', [
          {text: 'OK'},
        ]);
    
  return <Text style={styles.label}>
    Custom Element Label <Icon name="avatar" style={{paddingLeft: 5}} onPress={openAlert} />
  </Text>;
}

const labelStyles = (defaultColor: ColorValue, activeColor: ColorValue) => {
  return (state: StateCallbackType): StyleProp<TextStyle> => {
    return [
      {
        color: state.focused ? activeColor : defaultColor
      }
    ]
  }
} 

const styles = StyleSheet.create({
  label: {
    color: 'crimson'
  },
});