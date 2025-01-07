/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 19:31:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-06 20:09:56
 * @ Description: Examples of `Block` component with rowGap.
 */

import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

const DEMO_COMPONENT_GAP = 12;

export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block' style={{ height: 200 }}>
        <Block rowGap={DEMO_COMPONENT_GAP}>
          <Block row rowGap={DEMO_COMPONENT_GAP}>
            <Block backgroundColor='#FFC300'>
              <Text style={styles.text}>Row 1 : Clo 1. flex: 1</Text>
            </Block>
            <Block backgroundColor='#FF5733'>
              <Text style={styles.text}>Row 1 : Clo 2. flex: 2</Text>
            </Block>
          </Block>

          <Block rowGap={DEMO_COMPONENT_GAP}>
            <Block backgroundColor='#C70039'>
              <Text style={styles.text}>Row 2 : Clo 1. flex: 1</Text>
            </Block>
            <Block backgroundColor='#9b59b6'>
              <Text style={styles.text}>Row 2 : Clo 2. flex: 2</Text>
            </Block>
          </Block>
        </Block>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff'
  },
});