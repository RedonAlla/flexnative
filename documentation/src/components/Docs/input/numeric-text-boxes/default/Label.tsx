/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:35:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 22:35:48
 * @ Description: Examples of NumericTextBox component with labels.
 */

import React from 'react';
import { StyleSheet, Text, Alert, Platform } from "react-native";
import Icon from '@flexnative/icons';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox placeholder='Input with text label' label="Label" />
        <NumericTextBox placeholder='Input with custom element as label' label={<Label />} />
      </div>
    );
  }
}

function Label() {
  const openAlert = () =>
    Platform.OS === 'web'
      ? alert('Custom Element as label')
      : Alert.alert('Alert Title', 'Custom Element as label', [
          {text: 'OK'},
        ]);
    
  return <Text style={styles.label}>
    <Icon name="avatar" onPress={openAlert} /> Custom Element Label
  </Text>;
}

const styles = StyleSheet.create({
  label: {
    color: 'crimson'
  },
  row: {
    columnGap: 16,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  column: {
    flex: 1,
    rowGap: 16,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});