import React from "react";
import { View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';

import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "../../constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Active Border Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <Button text='crimson' type='text' borderWidth='thick' activeBorderColor='crimson' />
            <Button text='rgb(237, 20, 61)' type='text' borderWidth='thick' activeBorderColor='rgb(237, 20, 61)' />
          </View>
          <View style={styles.column}>
            <Button text='rgba(237, 20, 61, 1)' type='text' borderWidth='thick' activeBorderColor='rgba(237, 20, 61, 1)' />
            <Button text='#ed143d' type='text' borderWidth='thick' activeBorderColor='#ed143d' />
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