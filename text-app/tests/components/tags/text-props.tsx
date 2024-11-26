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
      <DemoBlock title='Text Props' contentStyle={styles.block}>
        <Tag color='primary' text='TextProps' textProps={{onPress: this.openAlert, allowFontScaling: true}} />
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: 10,
    columnGap: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  }
});