import React from "react";
import { View, StyleSheet, Alert, Platform } from "react-native";

import Icon from '@flexnative/icons';
import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Prefix'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumericTextBox placeholder='Input with icon prefix' prefix="star" />
          </View>
          <View style={styles.column}>
            <NumericTextBox placeholder='Input with custom element as prefix' prefix={<Prefix />} />
          </View>
        </View>
      </DemoBlock>
    );
  }
}

function Prefix() {
  const openAlert = () =>
    Platform.OS === 'web'
      ? alert('Custom Element as prefix')
      : Alert.alert('Alert Title', 'Custom Element as prefix', [
          {text: 'OK'},
        ]);
    
  return <Icon name="avatar" onPress={openAlert} />;
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