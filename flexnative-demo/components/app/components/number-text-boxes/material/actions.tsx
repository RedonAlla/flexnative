import React from "react";
import { View, StyleSheet } from "react-native";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";
import Alert from "@/components/app/Alert";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Actions'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox placeholder='With actions' label='With actions' material />
          </View>
          <View style={styles.column}>
            <NumericTextBox placeholder='Without actions' label='Without actions' material actions={false} />
          </View>
        </View>
        <Alert message="As NumericTextBox you can use also the TextBox with property `keyboardType='numeric'`" type="warning"/>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    columnGap: GAP,
    marginBottom: GAP,
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