import React from "react";
import { View, StyleSheet } from "react-native";

import { NumericTextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Active Border Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox label='Active Border Color' activeBorderColor='crimson' placeholder='crimson' material />
            <NumericTextBox label='Active Border Color' activeBorderColor='rgb(237, 20, 61)' placeholder='rgb(237, 20, 61)' material />
          </View>
          <View style={styles.column}>
            <NumericTextBox label='Active Border Color' activeBorderColor='rgb(237, 20, 61)' placeholder='rgb(237, 20, 61)' material />
            <NumericTextBox label='Active Border Color' activeBorderColor='#ed143d' placeholder='#ed143d' material />
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