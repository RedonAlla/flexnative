import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING, TAB_NAV_HEIGHT } from '@/constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
import {
  AvatarGroupFillMode,
  AvatarGroupBackgroundColors,
  AvatarGroupBorderColors,
  AvatarGroupBorderWidth,
  AvatarGroupRadius,
  AvatarGroupCombinations
} from '@/components/app/components/avatars/group';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <AvatarGroupFillMode />
        <AvatarGroupBackgroundColors />
        <AvatarGroupBorderColors />
        <AvatarGroupBorderColors />
        <AvatarGroupBorderWidth />
        <AvatarGroupRadius />
        <AvatarGroupCombinations />
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