import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Align Items'>
        <Block alignItems='center' style={blockStyle('#16a085')}>
          <Text style={styles.text}>center</Text>
        </Block>
        
        <Block alignItems='flex-end' style={blockStyle('#FFC300')}>
          <Text style={styles.text}>flex-end</Text>
        </Block>

        <Block alignItems='flex-start' style={blockStyle('#FF5733')}>
          <Text style={styles.text}>flex-start</Text>
        </Block>

        <Block alignItems='baseline' style={blockStyle('#2980b9')}>
          <Text style={styles.text}>baseline</Text>
        </Block>

        <Block alignItems='stretch' style={blockStyle('#C70039')}>
          <Text style={styles.text}>stretch</Text>
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
    padding: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff'
  }
});