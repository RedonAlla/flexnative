import React from "react";
import { View, StyleSheet } from "react-native";

import { TextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../badges/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox material label='Border Width' placeholder='none (default)' borderWidth='none' />
            <TextBox material label='Border Width' placeholder='hairline' borderWidth='hairline' />
            <TextBox material label='Border Width' placeholder='thin' borderWidth='thin' />
          </View>
          <View style={styles.column}>
            <TextBox material label='Border Width' placeholder='base' borderWidth='base' />
            <TextBox material label='Border Width' placeholder='thick' borderWidth='thick' />
            <TextBox material label='Border Width' placeholder='3' borderWidth={3}/>
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