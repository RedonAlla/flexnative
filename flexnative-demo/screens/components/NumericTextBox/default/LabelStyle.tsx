import React from "react";
import { StyleSheet, ColorValue, StyleProp, TextStyle } from "react-native";

import { StateCallbackType, NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Label Style'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
        <NumericTextBox placeholder='Style with StyleProp<TextStyle>' label="Label" labelStyle={styles.label} />
        <NumericTextBox placeholder='Style with function' label="Label" labelStyle={labelStyles('rgb(35, 189, 224)', 'crimson')} />

        </Block>
      </DemoBlock>
    );
  }
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
  }
});