import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';

import { GAP } from "./constants";
import DemoBlock from "../../DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Width' contentStyle={styles.block}>
        <Badge text='10' type='ghost' color='primary' borderWidth='none'>
          <Button text="none (default)"/>
        </Badge>
        <Badge text='10' type='ghost' color='primary' borderWidth='hairline'>
          <Button text="hairline"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth='thin'>
          <Button text="thin"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth='base'>
          <Button text="base"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth='thick'>
          <Button text="thick"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth={2}>
          <Button text="2"/>
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