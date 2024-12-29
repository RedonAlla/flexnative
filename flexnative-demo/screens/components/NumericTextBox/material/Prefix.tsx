import React from "react";
import { Alert, Platform } from "react-native";

import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import Icon from "@flexnative/icons";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Prefix'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
          <NumericTextBox material label='Label' placeholder='Input with icon prefix' prefix="star" />
          <NumericTextBox material label='Label' placeholder='Input with custom element as prefix' prefix={<Prefix />} />

        </Block>
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