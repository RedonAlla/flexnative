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
            <NumericTextBox material label='Sizes' placeholder='small' size='small' />
            <NumericTextBox material label='Sizes' placeholder='large' size='large' />
          </View>

          <View style={styles.column}>
            <NumericTextBox material label='Sizes' placeholder='default' size='default' />
            <NumericTextBox material label='Sizes' placeholder='medium' size='medium' />
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
    height: 181,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});