import React from "react";
import { Alert, View } from "react-native";

import Tag from '@flexnative/tags';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  constructor(props: {}) {
    super(props);
    this.openAlert = this.openAlert.bind(this);
  }

  openAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    
  public render() {
    return (
      <DemoBlock title='Delete Action'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          
          <View>
            <Tag size='small' text='small' onDelete={this.openAlert} />
          </View>
          <View>
            <Tag text='default' onDelete={this.openAlert} />
          </View>
          <View>
            <Tag size='medium' text='medium' onDelete={this.openAlert} />
          </View>
          <View>
            <Tag size='large'text='large' onDelete={this.openAlert} /> 
          </View>
      
        </Block>
      </DemoBlock>
    );
  }
}