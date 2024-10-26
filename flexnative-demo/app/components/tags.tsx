import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING } from '@/constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
import {
  DemoTagBackgroundColor,
  DemoTagBorderColor,
  DemoTagBorderWidth,
  DemoTagColors,
  DemoTagRadius,
  DemoTagSizes,
  DemoTagTextChildren,
  DemoTagTextColor,
  DemoTagTextDelete,
  DemoTagTextProps,
  DemoTagTypes
} from '@/components/app/components/tags';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoTagColors />
        <DemoTagTypes />
        <DemoTagTextColor />
        <DemoTagBackgroundColor />
        <DemoTagBorderWidth />
        <DemoTagBorderColor />
        <DemoTagSizes />
        <DemoTagRadius />
        <DemoTagTextProps />
        <DemoTagTextChildren />
        <DemoTagTextDelete />
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