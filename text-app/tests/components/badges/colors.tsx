import React from "react";

import { Button, StyleSheet } from "react-native";
import Badge from '@flexnative/badges';

import { GAP } from "../../../constants/sizes";
import DemoBlock from "../../../components/icons/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color' contentStyle={styles.block}>
        <Badge text="10" color='primary'>
          <Button title="primary" />
        </Badge>
        <Badge text='10' color='secondary'>
          <Button title="secondary"/>
        </Badge>
        <Badge text='10' color='success'>
          <Button title="success"/>
        </Badge>
        <Badge text='10' color='info'>
          <Button title="info"/>
        </Badge>
        <Badge text='10' color='warning'>
          <Button title="warning"/>
        </Badge>
        <Badge text='10' color='error'>
          <Button title="error"/>
        </Badge>
        <Badge text='10' color='default'>
          <Button title="default"/>
        </Badge>
        <Badge text='10' color='dark'>
          <Button title="dark"/>
        </Badge>
        <Badge text='10' color='light'>
          <Button title="light"/>
        </Badge>
        <Badge text='10' color='crimson'>
          <Button title="crimson"/>
        </Badge>
        <Badge text='10' color='#ed143d'>
          <Button title="ed143d"/>
        </Badge>
        <Badge text='10' color='rgb(237, 20, 61)'>
          <Button title="rgb(237, 20, 61)"/>
        </Badge>
        <Badge text='10' color='rgba(237, 20, 61, 0.5)'>
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