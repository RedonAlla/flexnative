import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Background Color'>
        <Block row>
          <Block backgroundColor='crimson' style={styles.block}>
            <Text style={styles.text}>crimson</Text>
          </Block>
          
          <Block backgroundColor='#229954' style={styles.block}>
            <Text style={styles.text}>hex: #229954</Text>
          </Block>
        </Block>

        <Block>
          <Block backgroundColor='rgb(255, 195, 0)' style={styles.block}>
            <Text style={styles.text}>RGB: 255, 195, 0</Text>
          </Block>

          <Block backgroundColor='hsl(283, 39%, 53%)' style={styles.block}>
            <Text style={styles.text}>HSL: 283, 39%, 53%</Text>
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    padding: 20,
  },
  text: {
    color: '#fff'
  }
});