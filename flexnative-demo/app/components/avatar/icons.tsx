import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING, TAB_NAV_HEIGHT } from '@/constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
import {
  AvatarColors,
  AvatarFillMode,
  AvatarBackgroundColors,
  AvatarBorderColors,
  AvatarBorderWidth,
  AvatarSizes,
  AvatarRadius,
  AvatarIconColor
} from '@/components/app/components/avatars/icon';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <AvatarColors />
        <AvatarFillMode />
        <AvatarBackgroundColors />
        <AvatarBorderColors />
        <AvatarBorderWidth />
        <AvatarSizes />
        <AvatarRadius />
        <AvatarIconColor />
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