import React from "react";
import { View, StyleSheet } from "react-native";

import { NumericTextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox material label='Border Radius' placeholder='none' radius='none'/>
            <NumericTextBox material label='Border Radius' placeholder='medium' radius='medium'/>
            <NumericTextBox material label='Border Radius' placeholder='full radius' radius='full'/>
          </View>
          
          <View style={styles.column}>
            <NumericTextBox material label='Border Radius' placeholder='small' radius='small'/>
            <NumericTextBox material label='Border Radius' placeholder='large' radius='large' />
            <NumericTextBox material label='Border Radius' placeholder='12' radius={12} />
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
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  }
});