import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ThemeContext, { defaultTheme } from '@flexnative/theme-context';

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
  DemoButtonCustomLoader,
  DemoButtonChildren,
  DemoButtonStylingWithStyleSheet
} from '.';

import { HEADER_HEIGHT, PADDING, WEB_MAX_SCREEN_WIDTH } from '../../../constants/sizes';


export default class extends React.PureComponent {
  public render() {
    console.log(defaultTheme())
    return (
      <ThemeContext.Provider value={defaultTheme()}>
        <ScrollView contentContainerStyle={styles.content}>
          <DemoButtonType />
          <DemoButtonColor />
          <DemoButtonColorActive />
          <DemoButtonBorderColor />
          <DemoButtonBorderColorActive />
          <DemoButtonBorderRadius />
          <DemoButtonBorderWidth />
          <DemoButtonDisabled />
          <DemoButtonIcons />
          <DemoButtonLoading />
          <DemoButtonSize />
          <DemoButtonText />
          <DemoButtonCustomLoader />
          <DemoButtonChildren />
          <DemoButtonStylingWithStyleSheet />
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