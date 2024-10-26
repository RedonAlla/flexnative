import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';

import { GAP } from "./constants";
import DemoBlock from "../../DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes' contentStyle={styles.block}>
        <Badge text="10" size="small">
          <Button text="small"/>
        </Badge>
        <Badge text='10' size="default">
          <Button text="default"/>
        </Badge>
        <Badge text='10' size="medium">
          <Button text="medium"/>
        </Badge>
        <Badge text='10' size="large">
          <Button text="large"/>
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
  },
  view: {
    backgroundColor: 'transparent',
  }
});