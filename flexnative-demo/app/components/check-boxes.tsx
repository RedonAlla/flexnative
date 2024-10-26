import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING } from '@/constants/sizes';
import {
  DemoCheckValue,
  DemoCheckType,
  DemoCheckSizes,
  DemoCheckRadius,
  DemoCheckColors,
  DemoCheckBorderWidth,
  DemoCheckBorderColor,
  DemoCheckCheckedBorderColor,
  DemoCheckDisabled,
  DemoCheckBackgroundColor,
  DemoCheckCheckedBackgroundColor,
  DemoCheckCheckedLabel,
  DemoCheckCheckedCustomCheckElement,
  DemoCheckRadio
} from '@/components/app/components/check-boxes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoCheckValue />
        <DemoCheckType />
        <DemoCheckSizes />
        <DemoCheckRadius />
        <DemoCheckColors />
        <DemoCheckBorderWidth />
        <DemoCheckBorderColor />
        <DemoCheckCheckedBorderColor />
        <DemoCheckDisabled />
        <DemoCheckBackgroundColor />
        <DemoCheckCheckedBackgroundColor />
        <DemoCheckCheckedLabel />
        <DemoCheckCheckedCustomCheckElement />
        <DemoCheckRadio />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginHorizontal: "auto",
    paddingTop: HEADER_HEIGHT,
    paddingHorizontal: PADDING,
    backgroundColor: 'transparent',
    maxWidth: WEB_MAX_SCREEN_WIDTH,
  }
});