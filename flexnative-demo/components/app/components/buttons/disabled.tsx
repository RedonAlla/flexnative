import React from "react";
import { View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "../../constants";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Disabled'>
        <View style={styles.row}>
          <View style={styles.column}>
            <Button text='text' color='primary' type='text' disabled />
            <Button text='ghost' color='primary' type='ghost' disabled />
          </View>
          <View style={styles.column}>
            <Button text='link' color='primary' type='link' disabled />
            <Button text='inverse' color='primary' type='inverse' disabled />
          </View>
        </View>
        <View style={[styles.row, {marginTop: GAP}]}>
          <View style={{flex: 1}}>
            <Button text='default' color='primary' disabled />
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