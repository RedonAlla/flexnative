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
            <TextBox placeholder='crimson' borderColor='crimson' />
            <TextBox placeholder='#ed143d' borderColor='#ed143d' />
            <TextBox placeholder='hwb(349 8% 7%)' borderColor='hwb(349 8% 7%)' />
            <TextBox placeholder='rgba(237, 20, 61 / 0.5)' borderColor='rgba(237, 20, 61 / 0.5)' />
          </View>
          <View style={styles.column}>
            <TextBox placeholder='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)' />
            <TextBox placeholder='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)' />
            <TextBox placeholder='hsl(349, 86%, 50%)' borderColor='hsl(349, 86%, 50%)' />
            <TextBox placeholder='hsla(349, 86%, 50% / 0.5)' borderColor='hsla(349, 86%, 50% / 0.5)' />
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