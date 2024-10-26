import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING, TAB_NAV_HEIGHT } from '@/constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
import {
  DemoTextBoxColors,
  DemoTextBoxBorderColor,
  DemoTextBoxBorderActiveColor,
  DemoTextBoxBorderWidth,
  DemoTextBoxBorderRadius,
  DemoTextBackgroundColor,
  DemoTextActiveBackgroundColor,
  DemoTextBoxType,
  DemoTextBoxSize,
  DemoTextBoxReadOnly,
  DemoTextBoxDisabled,
  DemoTextBoxLabel,
  DemoTextBoxLabelStyle,
  DemoTextBoxHelperText,
  DemoTextBoxMaxLength,
  DemoTextBoxPrefix,
  DemoTextBoxPrefixStyle,
  DemoTextBoxSuffix,
  DemoTextBoxSuffixStyle,
  DemoTextBoxAdornmentsSeparator,
} from '@/components/app/components/text-boxes/material';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoTextBoxColors />
        <DemoTextBoxBorderColor />
        <DemoTextBoxBorderActiveColor />
        <DemoTextBoxBorderWidth />
        <DemoTextBoxBorderRadius />
        <DemoTextBackgroundColor />
        <DemoTextActiveBackgroundColor />
        <DemoTextBoxType />
        <DemoTextBoxSize />
        <DemoTextBoxReadOnly />
        <DemoTextBoxDisabled />
        <DemoTextBoxLabel />
        <DemoTextBoxLabelStyle />
        <DemoTextBoxHelperText />
        <DemoTextBoxMaxLength />
        <DemoTextBoxPrefix />
        <DemoTextBoxPrefixStyle />
        <DemoTextBoxSuffix />
        <DemoTextBoxSuffixStyle />
        <DemoTextBoxAdornmentsSeparator />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginHorizontal: "auto",
    paddingTop: HEADER_HEIGHT,
    paddingBottom: TAB_NAV_HEIGHT,
    paddingHorizontal: PADDING,
    backgroundColor: 'transparent',
    maxWidth: WEB_MAX_SCREEN_WIDTH,
  },
});