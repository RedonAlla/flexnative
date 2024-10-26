import React from "react";
import { StyleSheet } from "react-native";

import Tag from '@flexnative/tags';
import DemoBlock from "@/components/app/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border width' contentStyle={styles.block}>
        <Tag color='primary' text='none (default)' type='ghost' borderWidth='none' />
        <Tag color='primary' text='hairline' type='ghost' borderWidth='hairline' />
        <Tag color='primary' text='thin' type='ghost' borderWidth='thin' />
        <Tag color='primary' text='base' type='ghost' borderWidth='base' />
        <Tag color='primary' text='thick' type='ghost' borderWidth='thick' />
        <Tag color='primary' text='2' type='ghost' borderWidth={2} />
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