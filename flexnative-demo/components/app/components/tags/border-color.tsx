import React from "react";
import { StyleSheet } from "react-native";

import Tag from '@flexnative/tags';
import DemoBlock from "@/components/app/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Color' contentStyle={styles.block}>
        <Tag color='primary' borderWidth='thin' type='ghost' text='crimson' borderColor='crimson'/>
        <Tag color='primary' borderWidth='thin' type='ghost' text='#ed143d' borderColor='#ed143d'/>
        <Tag color='primary' borderWidth='thin' type='ghost' text='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)'/>
        <Tag color='primary' borderWidth='thin' type='ghost' text='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)'/>
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