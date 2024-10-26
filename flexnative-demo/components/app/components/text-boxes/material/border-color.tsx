import React from "react";
import { View, StyleSheet } from "react-native";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox material label='Border Color' placeholder='crimson' borderColor='crimson' />
            <TextBox material label='Border Color' placeholder='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)' />
          </View>
          <View style={styles.column}>
            <TextBox material label='Border Color' placeholder='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)' />
            <TextBox material label='Border Color' placeholder='#ed143d' borderColor='#ed143d' />
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