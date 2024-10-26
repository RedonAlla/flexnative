import React from "react";
import { StyleSheet } from "react-native";

import Tag from '@flexnative/tags';
import DemoBlock from "@/components/app/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color' contentStyle={styles.block}>
        <Tag text='primary' color='primary'/>
        <Tag text='secondary' color='secondary'/>
        <Tag text='success' color='success'/>
        <Tag text='info' color='info'/>
        <Tag text='warning' color='warning' />
        <Tag text='error' color='error'/>
        <Tag text='default' color='default'/>
        <Tag text='dark' color='dark'/>
        <Tag text='light' color='light'/>
        <Tag text='crimson' color='crimson'/>
        <Tag text='#ed143d' color='#ed143d'/>
        <Tag text='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
        <Tag text='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: 10,
    columnGap: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  }
});