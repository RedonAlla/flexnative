import React from "react";
import { StyleSheet } from "react-native";

import Tag from '@flexnative/tags';
import DemoBlock from "@/components/app/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Radius' contentStyle={styles.block}>
        <Tag color='primary' text='none' radius='none' />
        <Tag color='primary' text='small' radius='small' />
        <Tag color='primary' text='medium (default)' radius='medium' />
        <Tag color='primary' text='large' radius='large' />
        <Tag color='primary' text='full' radius='full' />
        <Tag color='primary' text='5' radius={5} />
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