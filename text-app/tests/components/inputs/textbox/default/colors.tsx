import React from "react";
import { View, StyleSheet } from "react-native";

import { TextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox placeholder='primary' color='primary'/>
            <TextBox placeholder='dark' color='dark'/>
            <TextBox placeholder='info' color='info'/>
            <TextBox placeholder='warning' color='warning' />
            <TextBox placeholder='default' color='default'/>
            <TextBox placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
            <TextBox placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
            <TextBox placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
          </View>

          <View style={styles.column}>
            <TextBox placeholder='secondary' color='secondary'/>
            <TextBox placeholder='light' color='light'/>
            <TextBox placeholder='success' color='success'/>
            <TextBox placeholder='error' color='error'/>
            <TextBox placeholder='crimson' color='crimson'/>
            <TextBox placeholder='#ed143d' color='#ed143d'/>
            <TextBox placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
            <TextBox placeholder='hsla(349, 86%, 50% / 0.5)' color='hsla(349, 86%, 50% / 0.5)' />
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