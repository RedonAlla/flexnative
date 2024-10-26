import React from "react";
import { View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "../../constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <View style={styles.row}>
          <View style={styles.column}>
            <Button text='small' color='primary' size='small' />
            <Button text='large' color='primary' size='large' />
          </View>

          <View style={styles.column}>
            <Button text='default' color='primary' size='default' />
            <Button text='medium' color='primary' size='medium' />
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