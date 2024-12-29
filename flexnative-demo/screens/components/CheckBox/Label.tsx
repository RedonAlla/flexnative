/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-24 00:39:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-24 19:04:58
 * @ Description: This component demonstrates the usage of different labels for a CheckBox component. Each `Check` component is assigned a different label using a custom element and custom label styles.
 */


import React from "react";
import { Alert, ColorValue, Platform, StyleProp, Text, TextStyle, StyleSheet } from "react-native";

import { Check, StateCallbackType } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";
import Icon from "@flexnative/icons";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import ExampleContainer from "./ExampleContainer";


const items: Array<boolean> = [
  false,
  false
];

/**
 * This class extends `ExampleContainer` and represents a component that renders a demo block with checkboxes.
 * 
 * @class
 * @extends ExampleContainer
 * 
 * @method componentDidMount
 * This lifecycle method is called after the component is mounted. It sets the initial state with items.
 * 
 * @method render
 * This method renders the component.
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * The rendered component includes:
 * - A `DemoBlock` with the title 'Label'.
 * - A `Block` that contains two `Check` components:
 *   - The first `Check` component uses the first item from the state and a `Label` component.
 *   - The second `Check` component uses the second item from the state, a string label, and custom label styles.
 * 
 * @example
 * <DemoBlock title='Label'>
 *   <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginTop: DEMO_COMPONENT_GAP}}>
 *     <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} label={<Label />} />
 *     <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} label='labelStyles' labelStyle={labelStyles('rgb(35, 189, 224)', 'crimson')} />
 *   </Block>
 * </DemoBlock>
 */
export default class extends ExampleContainer {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <DemoBlock title='Label'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginTop: DEMO_COMPONENT_GAP}}>

          <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} label={<Label />} />
          <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} label='labelStyles' labelStyle={labelStyles('rgb(35, 189, 224)', 'crimson')} />
      
        </Block>
      </DemoBlock>
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