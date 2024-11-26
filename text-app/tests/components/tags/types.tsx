import React from "react";
import { StyleSheet } from "react-native";

import Tag from "../../../packages/ra-tags/src/tag";
import DemoBlock from "../../../components/icons/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Types' contentStyle={styles.block}>
        <Tag color='primary' text='default' type='default' />
        <Tag color='primary' text='ghost' type='ghost' />
        <Tag color='primary' text='text' type='text' />
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