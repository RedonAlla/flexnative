/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 19:31:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-06 21:04:12
 * @ Description: Examples of `Block` component with backgroundColor.
 */

import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

const DEMO_PADDING = 12;

export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Block>
          <Block row>
            <Block backgroundColor='crimson' padding={DEMO_PADDING}>
              <Text style={styles.text}>crimson</Text>
            </Block>
            
            <Block backgroundColor='#229954' padding={DEMO_PADDING}>
              <Text style={styles.text}>hex: #229954</Text>
            </Block>
          </Block>

          <Block>
            <Block backgroundColor='rgb(255, 195, 0)' padding={DEMO_PADDING}>
              <Text style={styles.text}>RGB: 255, 195, 0</Text>
            </Block>

            <Block backgroundColor='hsl(283, 39%, 53%)' padding={DEMO_PADDING}>
              <Text style={styles.text}>HSL: 283, 39%, 53%</Text>
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