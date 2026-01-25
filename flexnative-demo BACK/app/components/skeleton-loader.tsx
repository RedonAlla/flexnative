/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-19 09:15:00
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-27 21:55:17
 * @ Description: Root for SkeletonLoader component demo.
 */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import SkeletonLoader, { Circle, Rect } from '@flexnative/skeleton-loading';

import { HEADER_HEIGHT, MAX_WIDTH, PADDING_HORIZONTAL } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";

const SKELETON_HEIGHT = 110;


export default class extends React.PureComponent {
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
    backgroundColor: 'transparent',
    paddingBottom: PADDING_HORIZONTAL,
    paddingHorizontal: PADDING_HORIZONTAL,
    maxWidth: MAX_WIDTH,
  },
});