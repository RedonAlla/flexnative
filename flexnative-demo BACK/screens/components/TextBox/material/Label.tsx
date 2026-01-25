import React from "react";
import { Alert, Platform, Text, StyleSheet } from "react-native";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import Icon from "@flexnative/icons";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Label'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
        <TextBox material placeholder='Input with text label' label="Label" />
        <TextBox material placeholder='Input with custom element as label' label={<Label />} />

        </Block>
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
    <Icon name="avatar" onPress={openAlert} /> Custom Label
  </Text>;
}

const styles = StyleSheet.create({
  label: {
    color: 'crimson'
  }
});