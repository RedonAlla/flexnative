import React from "react";
import { View, StyleSheet } from "react-native";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Background Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox placeholder='crimson' backgroundColor='crimson' />
            <TextBox placeholder='rgb(237, 20, 61)' backgroundColor='rgb(237, 20, 61)' />
          </View>
          <View style={styles.column}>
            <TextBox placeholder='rgba(237, 20, 61, 1)' backgroundColor='rgba(237, 20, 61, 1)' />
            <TextBox placeholder='#ed143d' backgroundColor='#ed143d' />
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