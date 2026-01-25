import React from "react";
import { Alert } from "react-native";

import Tag from '@flexnative/tags';

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
      <DemoBlock title='Text Props'>
        <Tag color='primary' text='TextProps' textProps={{onPress: this.openAlert, allowFontScaling: true}} />
      </DemoBlock>
    );
  }
}