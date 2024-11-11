import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ThemeContext, { defaultTheme } from '@flexnative/theme-context';


import {
  AvatarGroupFillMode,
  AvatarGroupBackgroundColors,
  AvatarGroupBorderColors,
  AvatarGroupBorderWidth,
  AvatarGroupRadius,
  AvatarGroupCombinations
} from './group';
import { HEADER_HEIGHT, PADDING, TAB_NAV_HEIGHT } from '../../../constants/sizes';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ThemeContext.Provider value={defaultTheme()}>
        <ScrollView contentContainerStyle={styles.content}>
          <AvatarGroupFillMode />
          <AvatarGroupBackgroundColors />
          <AvatarGroupBorderColors />
          <AvatarGroupBorderWidth />
          <AvatarGroupRadius />
          <AvatarGroupCombinations />
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
    paddingBottom: TAB_NAV_HEIGHT,
    paddingHorizontal: PADDING,
    backgroundColor: 'transparent',
    maxWidth: 600,
  },
});