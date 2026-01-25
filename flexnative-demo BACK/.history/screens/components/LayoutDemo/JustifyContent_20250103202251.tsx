import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Justify Content'>
          <Block justifyContent="flex-start" style={blockStyle('#16a085')}>
            <Text style={styles.text}>flex-start</Text>
          </Block>
          
          <Block justifyContent='flex-end' style={blockStyle('#FFC300')}>
            <Text style={styles.text}>flex-end</Text>
          </Block>

          <Block justifyContent='center' style={blockStyle('#FF5733')}>
            <Text style={styles.text}>Block 2. row 1</Text>
          </Block>

          <Block justifyContent='space-around' style={blockStyle('#C70039')}>
            <Text style={styles.text}>Block 2. row 2</Text>
            <Text style={styles.text}>Block 2. row 2</Text>
          </Block>

          <Block justifyContent='space-between' style={blockStyle('#C70039')}>
            <Text style={styles.text}>Block 2. row 2</Text>
            <Text style={styles.text}>Block 2. row 2</Text>
          </Block>

          <Block justifyContent='space-evenly' style={blockStyle('#C70039')}>
            <Text style={styles.text}>Block 2. row 2</Text>
            <Text style={styles.text}>Block 2. row 2</Text>
          </Block>
      </DemoBlock>
    );
  }
}

const blockStyle = (backgroundColor: ColorValue) => {
  return {
    flex: 1,
    padding: DEMO_COMPONENT_GAP,
    with: 20,
    height: 20,
    backgroundColor
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});