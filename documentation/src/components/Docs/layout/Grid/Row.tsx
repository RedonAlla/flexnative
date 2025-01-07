/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 19:31:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-05 20:15:19
 * @ Description: Examples of `Block` component with different `row values.
 */

import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Block row>
          <Block backgroundColor='#16a085'>
            <Text style={styles.text}>Block 1. col 1</Text>
          </Block>
          
          <Block backgroundColor='#FFC300'>
            <Text style={styles.text}>Block 1. col 2</Text>
          </Block>
        </Block>

        <Block>
          <Block backgroundColor='#FF5733'>
            <Text style={styles.text}>Block 2. row 1</Text>
          </Block>

          <Block backgroundColor='#C70039'>
            <Text style={styles.text}>Block 2. row 2</Text>
          </Block>
        </Block>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: '#fff'
  }
});