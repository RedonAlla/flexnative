import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';

import { GAP } from "./constants";
import DemoBlock from "../../DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Background Color' contentStyle={styles.block}>
        <Badge text='10' backgroundColor='crimson'>
          <Button text="crimson"/>
        </Badge>
        <Badge text='10' backgroundColor='#ed143d'>
          <Button text="#ed143d"/>
        </Badge>
        <Badge text='10' backgroundColor='rgb(237, 20, 61)'>
          <Button text="rgb(237, 20, 61)"/>
        </Badge>
        <Badge text='10' backgroundColor='rgba(237, 20, 61, 0.5)'>
          <Button text="rgba(237, 20, 61, 0.5)"/>
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