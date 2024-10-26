import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';

import { GAP } from "./constants";
import DemoBlock from "../../DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Radius' contentStyle={styles.block}>
        <Badge text='10' color='primary' radius='none' >
          <Button text="none"/>
        </Badge>
        <Badge text='10' color='primary' radius='small' >
          <Button text="small"/>
        </Badge>
        <Badge text='10' color='primary' radius='medium' >
          <Button text="medium (default)"/>
        </Badge>
        <Badge text='10' color='primary' radius='large' >
          <Button text="large"/>
        </Badge>
        <Badge text='10' color='primary' radius='full' >
          <Button text="full"/>
        </Badge>
        <Badge text='10' color='primary' radius={5} >
          <Button text="5"/>
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