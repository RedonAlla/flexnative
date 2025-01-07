/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 19:31:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-05 21:12:29
 * @ Description: Examples of `Block` component with justifyContent.
 */

import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Block>
          <Block justifyContent="flex-start" backgroundColor='#16a085' style={styles.block}>
            <Text style={styles.text}>flex-start</Text>
          </Block>
          
          <Block justifyContent='flex-end' backgroundColor='#FFC300' style={styles.block}>
            <Text style={styles.text}>flex-end</Text>
          </Block>

          <Block justifyContent='center' backgroundColor='#FF5733' style={styles.block}>
            <Text style={styles.text}>center</Text>
          </Block>

          <Block justifyContent='space-around' backgroundColor='#C70039' style={styles.block}>
            <Text style={styles.text}>space-around</Text>
            <Text style={styles.text}>space-around</Text>
          </Block>

          <Block justifyContent='space-between' backgroundColor='#9b59b6' style={styles.block}>
            <Text style={styles.text}>space-between</Text>
            <Text style={styles.text}>space-between</Text>
          </Block>

          <Block justifyContent='space-evenly' backgroundColor='#2980b9' style={styles.block}>
            <Text style={styles.text}>space-evenly</Text>
            <Text style={styles.text}>space-evenly</Text>
          </Block>
        </Block>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  },
  block: {
    height: 100,
  }
});