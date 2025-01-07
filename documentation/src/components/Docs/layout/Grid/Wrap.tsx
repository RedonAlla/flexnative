/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 19:31:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-06 20:03:03
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
          <Block backgroundColor='#16a085' row wrap='nowrap' style={styles.block}>
            <Text style={styles.text}>nowrap</Text>
            <Text style={styles.text}>nowrap</Text>
            <Text style={styles.text}>nowrap</Text>
            <Text style={styles.text}>nowrap</Text>
            <Text style={styles.text}>nowrap</Text>
            <Text style={styles.text}>nowrap</Text>
            <Text style={styles.text}>nowrap</Text>
            <Text style={styles.text}>nowrap</Text>
            <Text style={styles.text}>nowrap</Text>
            <Text style={styles.text}>nowrap</Text>
            </Block>
          <Block backgroundColor='#FFC300' row wrap='wrap' style={styles.block}>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
            <Text style={styles.text}>wrap</Text>
          </Block>
          <Block backgroundColor='#FF5733' row wrap='wrap-reverse' style={styles.block}>
            <Text style={styles.text}>wrap-reverse: 1</Text>
            <Text style={styles.text}>wrap-reverse: 2</Text>
            <Text style={styles.text}>wrap-reverse: 3</Text>
            <Text style={styles.text}>wrap-reverse: 4</Text>
            <Text style={styles.text}>wrap-reverse: 5</Text>
            <Text style={styles.text}>wrap-reverse: 6</Text>
            <Text style={styles.text}>wrap-reverse: 7</Text>
            <Text style={styles.text}>wrap-reverse: 8</Text>
            <Text style={styles.text}>wrap-reverse: 9</Text>
            <Text style={styles.text}>wrap-reverse: 10</Text>
            <Text style={styles.text}>wrap-reverse: 11</Text>
            <Text style={styles.text}>wrap-reverse: 12</Text>
            <Text style={styles.text}>wrap-reverse: 13</Text>
            <Text style={styles.text}>wrap-reverse: 14</Text>
          </Block>
        </Block>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    padding: 12
  },
  text: {
    padding: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff'
  },
});