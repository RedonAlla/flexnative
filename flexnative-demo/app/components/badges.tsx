import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING } from '@/constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
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
} from '@/components/app/components/badges';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoBadgePosition />
        <DemoBadgeColors />
        <DemoBadgeSizes />
        <DemoBadgeTypes />
        <DemoBadgeTextColor />
        <DemoBadgeBackgroundColor />
        <DemoBadgeBorderWidth />
        <DemoBadgeBorderColor />
        <DemoBadgeRadius />
        <DemoBadgeTextProps />
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