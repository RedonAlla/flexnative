import React from "react";
import { Alert, Platform } from "react-native";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import Icon from "@flexnative/icons";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Prefix'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
          <TextBox material label='Prefix' placeholder='Input with icon prefix' prefix="star" />
          <TextBox material label='Prefix' placeholder='Input with custom element as prefix' prefix={<Prefix />} />

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