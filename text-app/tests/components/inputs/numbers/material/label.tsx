import React from "react";
import { View, StyleSheet, Text, Alert, Platform } from "react-native";

import Icon from '@flexnative/icons';
import { NumericTextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Label'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox material placeholder='Input with text label' label="Label" />
          </View>
          <View style={styles.column}>
            <NumericTextBox material placeholder='Input with custom element as label' label={<Label />} />
          </View>
        </View>
      </DemoBlock>
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
    Custom Element Label <Icon name="avatar" onPress={openAlert} />
  </Text>;
}

const styles = StyleSheet.create({
  label: {
    color: 'crimson'
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
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});