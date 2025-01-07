/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 19:31:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-06 20:22:29
 * @ Description: Examples of `Block` component with padding.
 */

import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Block>
          <Block backgroundColor='#16a085' padding={5}>
            <Text style={styles.text}>padding: 5</Text>
          </Block>
          <Block backgroundColor='#FFC300' padding={20}>
            <Text style={styles.text}>padding: 20</Text>
          </Block>
          <Block backgroundColor='#FF5733' padding={45}>
            <Text style={styles.text}>padding: 45</Text>
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