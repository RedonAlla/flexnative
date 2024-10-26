import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import SkeletonLoader, { Circle, Rect } from '@flexnative/skeleton-loading';

import { HEADER_HEIGHT, PADDING } from '@/constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
import DemoBlock from '@/components/app/DemoBlock';

const SKELETON_HEIGHT = 110;


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoBlock title='Default'>
          <SkeletonLoader height={SKELETON_HEIGHT} width={'100%'}>
            <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
            <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <Circle cx="20" cy="20" r="20" />
          </SkeletonLoader>
        </DemoBlock>
        
        <DemoBlock title='Without Animation'>
          <SkeletonLoader height={SKELETON_HEIGHT} width={'100%'} animate={false}>
            <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
            <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <Circle cx="20" cy="20" r="20" />
          </SkeletonLoader>
        </DemoBlock>

        <DemoBlock title='Animation Speed'>
          <SkeletonLoader height={SKELETON_HEIGHT} width={'100%'} speed={2}>
            <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
            <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <Circle cx="20" cy="20" r="20" />
          </SkeletonLoader>
        </DemoBlock>
        
        <DemoBlock title='Animation Interval'>
          <SkeletonLoader height={SKELETON_HEIGHT} width={'100%'} interval={2}>
            <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
            <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <Circle cx="20" cy="20" r="20" />
          </SkeletonLoader>
        </DemoBlock>
        
        <DemoBlock title='Colors'>
          <SkeletonLoader  height={SKELETON_HEIGHT} width={'100%'} backgroundColor='crimson' foregroundColor='#FFC436'>
            <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
            <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
            <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <Circle cx="20" cy="20" r="20" />
          </SkeletonLoader>
        </DemoBlock>
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
  },
});