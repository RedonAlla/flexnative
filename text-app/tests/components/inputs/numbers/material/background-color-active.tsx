import React from "react";
import { View, StyleSheet } from "react-native";

import { NumericTextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Active Background Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox label='Active Background Color' placeholder='crimson' activeBackgroundColor='crimson' material />
            <NumericTextBox label='Active Background Color' placeholder='rgb(237, 20, 61)' activeBackgroundColor='rgb(237, 20, 61)' material />
          </View>
          <View style={styles.column}>
            <NumericTextBox label='Active Background Color' placeholder='rgba(237, 20, 61, 1)' activeBackgroundColor='rgba(237, 20, 61, 1)' material />
            <NumericTextBox label='Active Background Color' placeholder='#ed143d' activeBackgroundColor='#ed143d' material />
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
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});