import React from "react";
import { View, StyleSheet } from "react-native";

import { TextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Active Background Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox placeholder='crimson' activeBackgroundColor='crimson' />
            <TextBox placeholder='rgb(237, 20, 61)' activeBackgroundColor='rgb(237, 20, 61)' />
          </View>
          <View style={styles.column}>
            <TextBox placeholder='rgba(237, 20, 61, 1)' activeBackgroundColor='rgba(237, 20, 61, 1)' />
            <TextBox placeholder='#ed143d' activeBackgroundColor='#ed143d' />
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