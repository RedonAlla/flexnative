import React from "react";
import { View, StyleSheet } from "react-native";

import { NumericTextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Actions'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox placeholder='With actions' />
          </View>
          <View style={styles.column}>
            <NumericTextBox placeholder='Without actions' actions={false} />
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
    marginBottom: GAP,
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