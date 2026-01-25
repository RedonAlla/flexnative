import React from "react";
import { Alert, Platform } from "react-native";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  constructor(props: {}) {
    super(props);
    this.openAlert = this.openAlert.bind(this);
  }

  openAlert = () =>
    Platform.OS === 'web'
      ? alert('Text onPress...')
      : Alert.alert('Alert Title', 'Text onPress...', [
          {text: 'OK'},
        ]);

  public render() {
    return (
      <DemoBlock title='Text Props'>
        <Badge text='10' color='primary' onPress={this.openAlert} allowFontScaling={true}>
          <Button text="default"/>
        </Badge>
      </DemoBlock>
    );
  }
}