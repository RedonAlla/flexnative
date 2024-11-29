import React from "react";
import { View, StyleSheet } from "react-native";


import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";
import { TextBox } from "../../../../../packages/inputs/src";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Adornments Separator'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox placeholder='Prefix Separator' prefix="avatar" prefixSeparator />
          </View>
          <View style={styles.column}>
            <TextBox placeholder='Suffix Separator' suffix="avatar" suffixSeparator />
          </View>
        </View>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: 'crimson'
  },
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