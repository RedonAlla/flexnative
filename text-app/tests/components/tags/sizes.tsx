import React from "react";
import { StyleSheet, View } from "react-native";

import Tag from "../../../packages/ra-tags/src/tag";
import DemoBlock from "../../../components/icons/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Size' contentStyle={styles.block}>
        <View style={styles.view}>
          <Tag color='primary' size='small' text='small' />
        </View>
        <View style={styles.view}>
          <Tag color='primary' size='default' text='default' />
        </View>
        <View style={styles.view}>
          <Tag color='primary' size='medium' text='medium' />
        </View>
        <View style={styles.view}>
          <Tag color='primary' size='large'text='large' />
        </View>
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
  },
  view: {
    backgroundColor: 'transparent',
  }
});