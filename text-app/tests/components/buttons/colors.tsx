import React from "react";
import { View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import DemoBlock from "../../../components/icons/DemoBlock";
import { GAP } from "../../../constants/sizes";



export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color'>
        <View style={styles.row}>
          <View style={styles.column}>
              <Button text='primary' color='primary'/>
              <Button text='dark' color='dark'/>
              <Button text='info' color='info'/>
              <Button text='warning' color='warning' />
              <Button text='default' color='default'/>
              <Button text='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
          </View>

          <View style={styles.column}>
              <Button text='secondary' color='secondary'/>
              <Button text='light' color='light'/>
              <Button text='success' color='success'/>
              <Button text='error' color='error'/>
              <Button text='crimson' color='crimson'/>
              <Button text='#ed143d' color='#ed143d'/>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={{flex: 1, paddingTop: GAP}}>
            <Button text='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
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