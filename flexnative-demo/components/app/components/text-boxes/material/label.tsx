import React from "react";
import { View, StyleSheet, Text, Alert, Platform } from "react-native";

import Icon from '@flexnative/icons';
import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Label'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox material placeholder='Input with text label' label="Label" />
          </View>
          <View style={styles.column}>
            <TextBox material placeholder='Input with custom element as label' label={<Label />} />
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