import React from "react";

import { Button, StyleSheet } from "react-native";;
import Badge from '@flexnative/badges';

import { GAP } from "../../../constants/sizes";
import DemoBlock from "../../../components/icons/DemoBlock";;

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Position' contentStyle={styles.block}>
        <Badge text='10' position='top-left'>
          <Button title="top-left"/>
        </Badge>
        <Badge text='10' position='top-right'>
          <Button title="top-right (default)"/>
        </Badge>
        <Badge text='10' position='bottom-left'>
          <Button title="bottom-left"/>
        </Badge>
        <Badge text='10' position='bottom-right'>
          <Button title="bottom-right"/>
        </Badge>
        <Badge text='10' position={{ top: 5, bottom: 8, right: -25 }}>
          <Button title="{ top: 5, bottom: 8, right: -25 }"/>
        </Badge>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: GAP,
    columnGap: GAP,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  }
});