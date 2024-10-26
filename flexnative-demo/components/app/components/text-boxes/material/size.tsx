import React from "react";
import { View, StyleSheet } from "react-native";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox material label='Sizes' placeholder='small' size='small' />
            <TextBox material label='Sizes' placeholder='large' size='large' />
          </View>

          <View style={styles.column}>
            <TextBox material label='Sizes' placeholder='default' size='default' />
            <TextBox material label='Sizes' placeholder='medium' size='medium' />
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
    height: 181,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});