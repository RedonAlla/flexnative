import React from "react";
import { View, StyleSheet } from "react-native";

import { TextBox } from "../../../../../packages/inputs/src";
import { GAP } from "../../../badges/constants";
import DemoBlock from "../../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Background Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox label='Background Color' placeholder='crimson' backgroundColor='crimson' material />
            <TextBox label='Background Color' placeholder='rgb(237, 20, 61)' backgroundColor='rgb(237, 20, 61)' material />
          </View>
          <View style={styles.column}>
            <TextBox label='Background Color' placeholder='rgba(237, 20, 61, 1)' backgroundColor='rgba(237, 20, 61, 1)' material />
            <TextBox label='Background Color' placeholder='#ed143d' backgroundColor='#ed143d' material />
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