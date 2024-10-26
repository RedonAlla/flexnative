import React from "react";
import { View, StyleSheet } from "react-native";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox placeholder='primary' color='primary'/>
            <NumericTextBox placeholder='dark' color='dark'/>
            <NumericTextBox placeholder='info' color='info'/>
            <NumericTextBox placeholder='warning' color='warning' />
            <NumericTextBox placeholder='default' color='default'/>
            <NumericTextBox placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
          </View>

          <View style={styles.column}>
            <NumericTextBox placeholder='secondary' color='secondary'/>
            <NumericTextBox placeholder='light' color='light'/>
            <NumericTextBox placeholder='success' color='success'/>
            <NumericTextBox placeholder='error' color='error'/>
            <NumericTextBox placeholder='crimson' color='crimson'/>
            <NumericTextBox placeholder='#ed143d' color='#ed143d'/>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={{flex: 1, paddingTop: GAP}}>
            <NumericTextBox placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
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