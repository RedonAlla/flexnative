import React from "react";
import { View, StyleSheet } from "react-native";

import { TextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Active Border Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox activeBorderColor='crimson' placeholder='crimson' />
            <TextBox activeBorderColor='rgb(237, 20, 61)' placeholder='rgb(237, 20, 61)' />
          </View>
          <View style={styles.column}>
            <TextBox activeBorderColor='rgb(237, 20, 61)' placeholder='rgb(237, 20, 61)' />
            <TextBox activeBorderColor='#ed143d' placeholder='#ed143d' />
          </View>
        </View>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    columnGap: GAP,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  column: {
    flex: 1,
    rowGap: GAP,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  }
});