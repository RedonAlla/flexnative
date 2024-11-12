import React from "react";
import { Button, StyleSheet } from "react-native";

import Badge from '@flexnative/badges';

import DemoBlock from "../../../components/icons/DemoBlock";
import { GAP } from "../../../constants/sizes";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Background Color' contentStyle={styles.block}>
        <Badge text='10' backgroundColor='crimson'>
          <Button title="crimson"/>
        </Badge>
        <Badge text='10' backgroundColor='#ed143d'>
          <Button title="#ed143d"/>
        </Badge>
        <Badge text='10' backgroundColor='rgb(237, 20, 61)'>
          <Button title="rgb(237, 20, 61)"/>
        </Badge>
        <Badge text='10' backgroundColor='rgba(237, 20, 61, 0.5)'>
          <Button title="rgba(237, 20, 61, 0.5)"/>
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