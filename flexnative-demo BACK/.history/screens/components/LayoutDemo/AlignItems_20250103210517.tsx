import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Align Items'>
        <Block justifyContent='center' style={blockStyle('#16a085')}>
          <Text style={styles.text}>center</Text>
        </Block>
        
        <Block justifyContent='flex-end' style={blockStyle('#FFC300')}>
          <Text style={styles.text}>flex-end</Text>
        </Block>

        <Block justifyContent='center' style={blockStyle('#FF5733')}>
          <Text style={styles.text}>center</Text>
        </Block>

        <Block justifyContent='space-around' style={blockStyle('#C70039')}>
          <Text style={styles.text}>space-around</Text>
          <Text style={styles.text}>space-around</Text>
        </Block>

        <Block justifyContent='space-between' style={blockStyle('#9b59b6')}>
          <Text style={styles.text}>space-between</Text>
          <Text style={styles.text}>space-between</Text>
        </Block>

        <Block alignItems='baseline' style={blockStyle('#2980b9')}>
          <Text style={styles.text}>baseline</Text>
          <Text style={styles.text}>baseline</Text>
        </Block>

        <Block alignItems='stretch' style={blockStyle('#229954')}>
          <Text style={styles.text}>stretch</Text>
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