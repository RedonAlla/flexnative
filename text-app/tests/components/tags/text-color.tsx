import React from "react";
import { StyleSheet } from "react-native";

import Tag from "../../../packages/ra-tags/src/tag";
import DemoBlock from "../../../components/icons/DemoBlock";;

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Text Color' contentStyle={styles.block}>
        <Tag text='crimson' textColor='crimson'/>
        <Tag text='#ed143d' textColor='#ed143d'/>
        <Tag text='rgb(237, 20, 61)' textColor='rgb(237, 20, 61)'/>
        <Tag text='rgba(237, 20, 61, 0.5)' textColor='rgba(237, 20, 61, 0.5)'/>
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