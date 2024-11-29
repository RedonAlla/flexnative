import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ThemeContext, { defaultTheme } from '@flexnative/theme-context';

import {
  DemoNumericTextBoxActions,
  DemoNumericTextBoxSteps,
  DemoNumericTextBoxSuffix,
  DemoNumericTextBoxSuffixStyle,
  DemoNumericTextBoxPrefix,
  DemoNumericTextBoxPrefixStyle,
  DemoNumericTextBoxAdornmentsSeparator,
  DemoNumericTextBoxLabel,
  DemoNumericTextBoxLabelStyle,
  DemoNumericTextBoxHelperText,
  DemoNumericTextBoxMaxLength,
  DemoNumericTextBoxDisabled,
  DemoNumericTextBoxReadOnly,
  DemoNumericTextBoxSize,
  DemoNumericTextBoxType,
  DemoNumericTextBoxColors,
  DemoTextActiveBackgroundColor,
  DemoTextBackgroundColor,
  DemoNumericTextBoxBorderWidth,
  DemoNumericTextBoxBorderRadius,
  DemoNumericTextBoxBorderColor,
  DemoNumericTextBoxBorderActiveColor
} from '.';
import { HEADER_HEIGHT, PADDING, WEB_MAX_SCREEN_WIDTH } from '../../../../../constants/sizes';



export default class extends React.PureComponent {
  public render() {
    console.log(defaultTheme())
    return (
      <ThemeContext.Provider value={defaultTheme()}>
        <ScrollView contentContainerStyle={styles.content}>
          <DemoNumericTextBoxActions />
          <DemoNumericTextBoxSteps />
          <DemoNumericTextBoxSuffix />
          <DemoNumericTextBoxSuffixStyle />
          <DemoNumericTextBoxPrefix />
          <DemoNumericTextBoxPrefixStyle />
          <DemoNumericTextBoxAdornmentsSeparator />
          <DemoNumericTextBoxLabel />
          <DemoNumericTextBoxLabelStyle />
          <DemoNumericTextBoxHelperText />
          <DemoNumericTextBoxMaxLength />
          <DemoNumericTextBoxDisabled />
          <DemoNumericTextBoxReadOnly />
          <DemoNumericTextBoxSize />
          <DemoTextActiveBackgroundColor />
          <DemoTextBackgroundColor />
          <DemoNumericTextBoxType />
          <DemoNumericTextBoxColors />
          <DemoNumericTextBoxBorderWidth />
          <DemoNumericTextBoxBorderRadius />
          <DemoNumericTextBoxBorderColor />
          <DemoNumericTextBoxBorderActiveColor />
        </ScrollView>
      </ThemeContext.Provider>
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