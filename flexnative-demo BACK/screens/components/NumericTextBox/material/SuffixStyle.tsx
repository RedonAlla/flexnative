import React from "react";
import { StyleSheet, ColorValue, StyleProp, TextStyle } from "react-native";

import { StateCallbackType, NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Suffix style'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
          <NumericTextBox material label='Label' placeholder='Style with StyleProp<TextStyle>' suffix="star" suffixStyle={styles.suffix} />
          <NumericTextBox material label='Label' placeholder='Style with function' suffix="star" suffixStyle={suffixStyle('rgb(35, 189, 224)', 'crimson')} />

        </Block>
      </DemoBlock>
    );
  }
}


const suffixStyle = (defaultColor: ColorValue, activeColor: ColorValue) => {
  return (state: StateCallbackType): StyleProp<TextStyle> => {
    return [
      {
        color: state.focused ? activeColor : defaultColor
      }
    ]
  }
} 

const styles = StyleSheet.create({
  suffix: {
    color: 'crimson'
  }
});