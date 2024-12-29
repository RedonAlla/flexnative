import React from "react";
import { StyleSheet, ColorValue, StyleProp, TextStyle } from "react-native";

import { StateCallbackType, TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Suffix style'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
          <TextBox placeholder='Style with StyleProp<TextStyle>' suffix="star" suffixStyle={styles.suffix} />
          <TextBox placeholder='Style with function' suffix="star" suffixStyle={suffixStyle('rgb(35, 189, 224)', 'crimson')} />

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