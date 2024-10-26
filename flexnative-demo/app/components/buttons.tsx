import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING } from '@/constants/sizes';
import {
  DemoButtonType,
  DemoButtonColor,
  DemoButtonColorActive,
  DemoButtonBorderColor,
  DemoButtonBorderColorActive,
  DemoButtonBorderRadius,
  DemoButtonBorderWidth,
  DemoButtonDisabled,
  DemoButtonIcons,
  DemoButtonLoading,
  DemoButtonSize,
  DemoButtonText,
  DemoButtonStylingWithStyleSheet,
  DemoButtonCustomLoader,
  DemoButtonChildren
} from '@/components/app/components/buttons';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoButtonColor />
        <DemoButtonColorActive />
        <DemoButtonType />
        <DemoButtonBorderColor />
        <DemoButtonBorderColorActive />
        <DemoButtonBorderRadius />
        <DemoButtonBorderWidth />
        <DemoButtonDisabled />
        <DemoButtonLoading />
        <DemoButtonCustomLoader />
        <DemoButtonIcons />
        <DemoButtonSize />
        <DemoButtonText />
        <DemoButtonChildren />
        <DemoButtonStylingWithStyleSheet />
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