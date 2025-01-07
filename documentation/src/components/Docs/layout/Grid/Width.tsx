/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 19:31:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-05 22:33:28
 * @ Description: Examples of `Block` component with different width.
 */

import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Block>
          <Block backgroundColor='#16a085' width={150}>
            <Text style={styles.text}>width: 150</Text>
          </Block>
          <Block backgroundColor='#FFC300' width={200}>
            <Text style={styles.text}>width: 200</Text>
          </Block>
          <Block backgroundColor='#FF5733' width={'50%'}>
            <Text style={styles.text}>width: '50%'</Text>
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