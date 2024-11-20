import React from "react";
import { View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import DemoBlock from "../../../components/icons/DemoBlock";
import { GAP } from "../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <View style={styles.row}>
          <View style={styles.column}>
            <Button text='none (default)' color='primary' type='text' borderWidth='none'  />
            <Button text='hairline' color='primary' type='text' borderWidth='hairline'   borderColor='crimson' />
            <Button text='thin' color='primary' type='text' borderWidth='thin' />
            <Button text='3' color='primary' type='text' borderWidth={3}/>
          </View>
          <View style={styles.column}>
            <Button text='thin' color='primary' type='text' borderWidth='thin' />
            <Button text='base' color='primary' type='text' borderWidth='base' />
            <Button text='thick' color='primary' type='text' borderWidth='thick' />
            <Button text='5' color='primary' type='text' borderWidth={5} />
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