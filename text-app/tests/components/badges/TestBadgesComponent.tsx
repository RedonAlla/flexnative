import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ThemeContext, { defaultTheme } from '@flexnative/theme-context';

import {
  DemoBadgePosition,
  DemoBadgeTypes,
  DemoBadgeColors,
  DemoBadgeSizes,
  DemoBadgeTextColor,
  DemoBadgeBackgroundColor,
  DemoBadgeBorderWidth,
  DemoBadgeBorderColor,
  DemoBadgeRadius,
  DemoBadgeTextProps
} from '.';
import { HEADER_HEIGHT, PADDING, WEB_MAX_SCREEN_WIDTH } from '../../../constants/sizes';


export default class extends React.PureComponent {
  public render() {
    return (
      <ThemeContext.Provider value={defaultTheme()}>
        <ScrollView contentContainerStyle={styles.content}>
          {/* <DemoBadgePosition />
          <DemoBadgeColors />
          <DemoBadgeSizes /> */}
          <DemoBadgeTypes />
          {/* <DemoBadgeTextColor />
          <DemoBadgeBackgroundColor />
          <DemoBadgeBorderWidth />
          <DemoBadgeBorderColor />
          <DemoBadgeRadius />
          <DemoBadgeTextProps /> */}
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