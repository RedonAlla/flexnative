import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import {
  DemoAnimationType,
  DemoAnimationHeight,
  DemoCloseOnDragDown,
  DemoMinClosingHeight,
  DemoBehavior,
  DemoActions,
  DemoMask,
  DemoStylingWithStyleSheet
} from '@/components/app/components/bottom-sheet';

import { HEADER_HEIGHT, PADDING } from '../../constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoAnimationType />
        <DemoAnimationHeight />
        <DemoCloseOnDragDown />
        <DemoMinClosingHeight />
        <DemoBehavior />
        <DemoActions />
        <DemoMask />
        <DemoStylingWithStyleSheet />
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