import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';

import { GAP } from "./constants";
import DemoBlock from "../../DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Color' contentStyle={styles.block}>
        <Badge text='10' type='text' color='primary' borderColor='crimson' borderWidth='hairline'>
          <Button text="crimson"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderColor='#ed143d' borderWidth='hairline'>
          <Button text="#ed143d"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderColor='rgb(237, 20, 61)' borderWidth='hairline'>
          <Button text="rgb(237, 20, 61)"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderColor='rgba(237, 20, 61, 0.5)' borderWidth='hairline'>
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