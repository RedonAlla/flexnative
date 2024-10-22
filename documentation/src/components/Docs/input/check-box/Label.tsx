/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-13 00:08:46
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:29:06
 * @ Description: Examples of Check component with custom label element.
 */

import React from "react";
import { Alert, ColorValue, Platform, StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import ExampleContainer from "./ExampleContainer";

// highlight-next-line
import { Check, StateCallbackType } from '@flexnative/inputs';
import Icon from "@flexnative/icons";


const items: Array<boolean> = [
  false,
  false,
  false,
  false,
];

export default class extends ExampleContainer {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: items
    }
  }

  public render() {
    return (
      <div className='example-block'>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} label={<Label />} />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} label='labelStyles' labelStyle={labelStyles('rgb(35, 189, 224)', 'crimson')} />
      </div>
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
    <Icon name="avatar" style={{paddingLeft: 5}} onPress={openAlert} /> Custom Element Label
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