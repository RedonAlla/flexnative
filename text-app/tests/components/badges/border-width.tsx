import React from "react";

import { Button, StyleSheet } from "react-native";;
import Badge from '@flexnative/badges';

import { GAP } from "../../../constants/sizes";
import DemoBlock from "../../../components/icons/DemoBlock";;

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Width' contentStyle={styles.block}>
        <Badge text='10' type='ghost' color='primary' borderWidth='none'>
          <Button title="none (default)"/>
        </Badge>
        <Badge text='10' type='ghost' color='primary' borderWidth='hairline'>
          <Button title="hairline"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth='thin'>
          <Button title="thin"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth='base'>
          <Button title="base"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth='thick'>
          <Button title="thick"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth={2}>
          <Button title="2"/>
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