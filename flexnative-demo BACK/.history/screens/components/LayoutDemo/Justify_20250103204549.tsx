import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Justify'>
          <Block justify="flex-start" style={blockStyle('#16a085')}>
            <Text style={styles.text}>flex-start</Text>
          </Block>
          
          <Block justify='flex-end' style={blockStyle('#FFC300')}>
            <Text style={styles.text}>flex-end</Text>
          </Block>

          <Block justify='center' style={blockStyle('#FF5733')}>
            <Text style={styles.text}>center</Text>
          </Block>

          <Block justify='space-around' style={blockStyle('#C70039')}>
            <Text style={styles.text}>space-around</Text>
            <Text style={styles.text}>space-around</Text>
          </Block>

          <Block justify='space-between' style={blockStyle('#9b59b6')}>
            <Text style={styles.text}>space-between</Text>
            <Text style={styles.text}>space-between</Text>
          </Block>

          <Block justify='space-evenly' style={blockStyle('#2980b9 ')}>
            <Text style={styles.text}>space-evenly</Text>
            <Text style={styles.text}>space-evenly</Text>
          </Block>
      </DemoBlock>
    );
  }
}

const blockStyle = (backgroundColor: ColorValue) => {
  return {
    padding: DEMO_COMPONENT_GAP,
    height: 80,
    backgroundColor
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});