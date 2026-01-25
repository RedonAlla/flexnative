/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 23:52:10
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-17 00:07:00
 * @ Description: Example use case of `Icon´ component styling with `StyleSheet` from `react native`.
 */

import React from "react";
import { StyleSheet } from 'react-native';

import Icon from "@flexnative/icons";
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Styling with StyleSheet'>
        <Block row justifyContent='space-between' alignItems='center'>
          <Icon name='star' style={styles.icon1} />
          <Icon name='star' style={styles.icon2} />
          <Icon name='star' style={styles.icon3} />
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  icon1: {
    width: 64,
    height: 64,
    fontSize: 64,
  },
  icon2: {
    width: 64,
    height: 64,
    fontSize: 64,
    color: 'rgb(0, 146, 255)'
  },
  icon3: {
    fontSize: 32,
    color: 'crimson',
    backgroundColor: '#FFC436',
    textAlignVertical: 'center',
    width: 68,
    height: 68,
    padding: 15,
    textAlign: 'center',
    borderRadius: 34,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'
  }
});