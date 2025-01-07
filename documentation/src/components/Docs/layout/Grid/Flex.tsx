/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 19:31:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-06 20:02:17
 * @ Description: Examples of `Block` component with different `flex´ values.
 */

import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block' style={{ flexDirection: 'row' }}>
        <Block backgroundColor='#16a085' flex={0.5}>
          <Text style={styles.text}>flex: 0.5</Text>
        </Block>
        <Block backgroundColor='#FFC300' flex={2}>
          <Text style={styles.text}>flex: 2</Text>
          </Block>
        <Block backgroundColor='#FF5733' flex={1.5}>
          <Text style={styles.text}>flex: 1.5</Text>
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