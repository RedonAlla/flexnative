import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Align Content'>
        <Block alignContent='center' style={blockStyle('#16a085')}>
          <Text style={styles.text}>center</Text>
        </Block>
        
        <Block alignContent='flex-end' style={blockStyle('#FFC300')}>
          <Text style={styles.text}>flex-end</Text>
        </Block>

        <Block alignContent='flex-start' style={blockStyle('#FF5733')}>
          <Text style={styles.text}>flex-start</Text>
        </Block>

        <Block alignContent='space-around' style={blockStyle('#2980b9')}>
          <Text style={styles.text}>space-around</Text>
          <Text style={styles.text}>space-around</Text>
        </Block>

        <Block alignContent='stretch' style={blockStyle('#C70039')}>
          <Text style={styles.text}>stretch</Text>
          <Text style={styles.text}>stretch</Text>
        </Block>

        <Block alignContent='space-between' style={blockStyle('#9b59b6')}>
          <Text style={styles.text}>space-between</Text>
          <Text style={styles.text}>space-between</Text>
        </Block>

        <Block alignContent='space-evenly' style={blockStyle('#2980b9')}>
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
    padding: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff'
  }
});