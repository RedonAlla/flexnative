import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING, TAB_NAV_HEIGHT } from '@/constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
import {
  DemoNumericTextBoxColors,
  DemoNumericTextBoxBorderColor,
  DemoNumericTextBoxBorderActiveColor,
  DemoNumericTextBoxBorderWidth,
  DemoNumericTextBoxBorderRadius,
  DemoTextBackgroundColor,
  DemoTextActiveBackgroundColor,
  DemoNumericTextBoxType,
  DemoNumericTextBoxSize,
  DemoNumericTextBoxReadOnly,
  DemoNumericTextBoxDisabled,
  DemoNumericTextBoxLabel,
  DemoNumericTextBoxLabelStyle,
  DemoNumericTextBoxHelperText,
  DemoNumericTextBoxMaxLength,
  DemoNumericTextBoxPrefix,
  DemoNumericTextBoxPrefixStyle,
  DemoNumericTextBoxSuffix,
  DemoNumericTextBoxSuffixStyle,
  DemoNumericTextBoxAdornmentsSeparator,
  DemoNumericTextBoxActions,
  DemoNumericTextBoxSteps,
} from '@/components/app/components/number-text-boxes/default';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoNumericTextBoxActions />
        <DemoNumericTextBoxSteps />
        <DemoNumericTextBoxColors />
        <DemoNumericTextBoxBorderColor />
        <DemoNumericTextBoxBorderActiveColor />
        <DemoNumericTextBoxBorderWidth />
        <DemoNumericTextBoxBorderRadius />
        <DemoTextBackgroundColor />
        <DemoTextActiveBackgroundColor />
        <DemoNumericTextBoxType />
        <DemoNumericTextBoxSize />
        <DemoNumericTextBoxReadOnly />
        <DemoNumericTextBoxDisabled />
        <DemoNumericTextBoxLabel />
        <DemoNumericTextBoxLabelStyle />
        <DemoNumericTextBoxHelperText />
        <DemoNumericTextBoxMaxLength />
        <DemoNumericTextBoxPrefix />
        <DemoNumericTextBoxPrefixStyle />
        <DemoNumericTextBoxSuffix />
        <DemoNumericTextBoxSuffixStyle />
        <DemoNumericTextBoxAdornmentsSeparator />
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