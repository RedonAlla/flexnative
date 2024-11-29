import React from "react";
import { View, StyleSheet } from "react-native";

import { NumericTextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox placeholder='small' size='small' />
            <NumericTextBox placeholder='large' size='large' />
          </View>

          <View style={styles.column}>
            <NumericTextBox placeholder='default' size='default' />
            <NumericTextBox placeholder='medium' size='medium' />
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
    height: 122,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});