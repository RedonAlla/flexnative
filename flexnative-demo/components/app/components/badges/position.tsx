import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';

import { GAP } from "./constants";
import DemoBlock from "../../DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Position' contentStyle={styles.block}>
        <Badge text='10' position='top-left'>
          <Button text="top-left"/>
        </Badge>
        <Badge text='10' position='top-right'>
          <Button text="top-right (default)"/>
        </Badge>
        <Badge text='10' position='bottom-left'>
          <Button text="bottom-left"/>
        </Badge>
        <Badge text='10' position='bottom-right'>
          <Button text="bottom-right"/>
        </Badge>
        <Badge text='10' position={{ top: 5, bottom: 8, right: -25 }}>
          <Button text="{ top: 5, bottom: 8, right: -25 }"/>
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