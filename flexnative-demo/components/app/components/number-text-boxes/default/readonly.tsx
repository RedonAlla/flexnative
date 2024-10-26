import React from "react";
import { View, StyleSheet } from "react-native";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Read Only'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox placeholder='outlined' type='outlined' readOnly />
          </View>
          <View style={styles.column}>
            <NumericTextBox placeholder='underlined' type='underlined' readOnly />
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