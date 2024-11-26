import React from "react";
import { Button, StyleSheet } from "react-native";;
import Badge from '@flexnative/badges';

import { GAP } from "../../../constants/sizes";
import DemoBlock from "../../../components/icons/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Text Color' contentStyle={styles.block}>
        <Badge text='10' textColor='crimson'>
          <Button title="crimson"/>
        </Badge>
        <Badge text='10' textColor='#ed143d'>
          <Button title="#ed143d"/>
        </Badge>
        <Badge text='10' textColor='rgb(237, 20, 61)'>
          <Button title="rgb(237, 20, 61)"/>
        </Badge>
        <Badge text='10' textColor='rgba(237, 20, 61, 0.5)'>
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