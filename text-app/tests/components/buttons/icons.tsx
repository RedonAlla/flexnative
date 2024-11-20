import React from "react";
import { View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import DemoBlock from "../../../components/icons/DemoBlock";
import { GAP } from "../../../constants/sizes";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Icons'>
        <View style={styles.row}>
          <View style={styles.column}>

            <View style={styles.icons}>
              <Button color='primary' iconLeft='star' />
              <Button color='primary' radius='full' iconLeft='star' />
            </View>
            
            <Button text='default' color='primary' iconLeft='star' />
            <Button text='Custom colors' color='primary' iconLeft={{name: 'star', color: '#072541', activeColor: '#FFAE10'}} size='large' />
            
          </View>
          <View style={styles.column}>
            
            <View style={styles.icons}>
              <Button color='primary' iconRight='star' />
              <Button color='primary' radius='full' iconRight='star' />
            </View>
              
            <Button text='default' color='primary' iconRight='star' />
            <Button text='Custom colors' color='primary' iconRight={{name: 'star', color: '#072541', activeColor: '#FFAE10'}} size='large' />
              
          </View>
        </View>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
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