import React from "react";
import { Button, StyleSheet } from "react-native";;
import Badge from '@flexnative/badges';

import { GAP } from "../../../constants/sizes";
import DemoBlock from "../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Types' contentStyle={styles.block}>
        <Badge text='10' type='solid' color='primary'>
          <Button title="default"/>
        </Badge>
        <Badge text='10' type='ghost' color='primary'>
          <Button title="ghost"/>
        </Badge>
        <Badge text='10' type='text' color='primary'>
          <Button title="text"/>
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