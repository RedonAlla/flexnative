import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Row'>
        <Block row>
          <Block style={blockStyle('#16a085')}>
            <Text style={styles.text}>Block 1. col 1</Text>
          </Block>
          
          <Block style={blockStyle('#FFC300')}>
            <Text style={styles.text}>Block 1. col 2</Text>
          </Block>
        </Block>

        <Block>
          <Block style={blockStyle('#FF5733')}>
            <Text style={styles.text}>Block 2. row 1</Text>
          </Block>

          <Block style={blockStyle('#C70039')}>
            <Text style={styles.text}>Block 2. row 2</Text>
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}

const blockStyle = (backgroundColor: ColorValue) => {
  return {
    flex: 1,
    padding: 20,
    backgroundColor
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});