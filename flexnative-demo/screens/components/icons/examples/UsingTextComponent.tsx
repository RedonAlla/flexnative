/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 23:55:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-17 00:06:22
 * @ Description: Example use case of `Icon´ component using `Text` component from `react native`.
 */

import React from "react";
import { StyleSheet, Text } from 'react-native';

import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Using Text component'>
        <Block row justifyContent='space-between' alignItems='center'>
          <Text style={[styles.icon1, styles.textIcon]}>{'\ue90e'}</Text>
          <Text style={[styles.icon2, styles.textIcon]}>{'\ue90d'}</Text>
          <Text style={[styles.icon3, styles.textIcon]}>{'\ue91e'}</Text>
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  icon1: {
    fontSize: 64,
  },
  icon2: {
    fontSize: 64,
    color: 'rgb(0, 146, 255)'
  },
  icon3: {
    fontSize: 32,
    color: 'crimson',
    backgroundColor: '#FFC436',
    verticalAlign: 'middle',
    width: 68,
    height: 68,
    padding: 15,
    textAlign: 'center',
    borderRadius: 34,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'
  },
  textIcon: {
    userSelect: 'none',
    fontFamily: 'Icons'
  }
});