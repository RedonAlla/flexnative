/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 19:31:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-05 21:33:18
 * @ Description: Examples of `Block` component with alignItems.
 */

import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Block>
          <Block alignItems='center' backgroundColor='#16a085' style={styles.block}>
            <Text style={styles.text}>center</Text>
          </Block>
          
          <Block alignItems='flex-end' backgroundColor='#FFC300' style={styles.block}>
            <Text style={styles.text}>flex-end</Text>
          </Block>

          <Block alignItems='flex-start' backgroundColor='#FF5733' style={styles.block}>
            <Text style={styles.text}>flex-start</Text>
          </Block>

          <Block alignItems='baseline' backgroundColor='#2980b9' style={styles.block}>
            <Text style={styles.text}>baseline</Text>
          </Block>

          <Block alignItems='stretch' backgroundColor='#C70039' style={styles.block}>
            <Text style={styles.text}>stretch</Text>
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
  block: {
    padding: 5,
    height: 100,
  }
});