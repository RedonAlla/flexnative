import React from "react";
import { Button, StyleSheet } from "react-native";;
import Badge from '@flexnative/badges';

import { GAP } from "../../../constants/sizes";
import DemoBlock from "../../../components/icons/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Radius' contentStyle={styles.block}>
        <Badge text='10' color='primary' radius='none' >
          <Button title="none"/>
        </Badge>
        <Badge text='10' color='primary' radius='small' >
          <Button title="small"/>
        </Badge>
        <Badge text='10' color='primary' radius='medium' >
          <Button title="medium (default)"/>
        </Badge>
        <Badge text='10' color='primary' radius='large' >
          <Button title="large"/>
        </Badge>
        <Badge text='10' color='primary' radius='full' >
          <Button title="full"/>
        </Badge>
        <Badge text='10' color='primary' radius={5} >
          <Button title="5"/>
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