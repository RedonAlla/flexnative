import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';

import { GAP } from "./constants";
import DemoBlock from "../../DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Types' contentStyle={styles.block}>
        <Badge text='10' type='default' color='primary'>
          <Button text="default"/>
        </Badge>
        <Badge text='10' type='ghost' color='primary'>
          <Button text="ghost"/>
        </Badge>
        <Badge text='10' type='text' color='primary'>
          <Button text="text"/>
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