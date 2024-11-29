import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ThemeContext, { defaultTheme } from '@flexnative/theme-context';

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
} from '.';
import { HEADER_HEIGHT, PADDING, WEB_MAX_SCREEN_WIDTH } from '../../../../constants/sizes';



export default class extends React.PureComponent {
  public render() {
    console.log(defaultTheme())
    return (
      <ThemeContext.Provider value={defaultTheme()}>
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