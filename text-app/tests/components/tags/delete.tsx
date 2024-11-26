import React from "react";
import { Alert, StyleSheet, View } from "react-native";

import Tag from "../../../packages/ra-tags/src/tag";
import DemoBlock from "../../../components/icons/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
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
      <DemoBlock title='On Delete'>
        <Tag color='primary' size='small' text='small' onDelete={this.openAlert} />
        <Tag color='primary' size='default' text='default' onDelete={this.openAlert} />
        <Tag color='primary' size='medium' text='medium' onDelete={this.openAlert} />
        <Tag color='primary' size='large'text='large' onDelete={this.openAlert} />
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 12,
    fontFamily: 'Bold',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  }
});