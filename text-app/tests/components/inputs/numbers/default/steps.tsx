import React from "react";
import { View, StyleSheet } from "react-native";

import { NumericTextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Steps'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox placeholder='Step 1 (default)' />
            <NumericTextBox placeholder='Step 5' step={5} />
            <NumericTextBox placeholder='Step 10' step={10} />
          </View>
          <View style={styles.column}>
            <NumericTextBox placeholder='Step 50' step={50} />
            <NumericTextBox placeholder='Step 100' step={100} />
            <NumericTextBox placeholder='Step 1000' step={1000} />
          </View>
        </View>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    width: '100%',
    columnGap: GAP,
    flexDirection: "row",
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