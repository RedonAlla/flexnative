/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 20:29:33
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 21:34:23
 * @ Description: Examples of SkeletonLoader component with Mask.
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Icon from '@flexnative/icons';
import { SKELETON_HEIGHT } from './constants';
// highlight-next-line
import SkeletonLoader, { Circle, Rect } from '@flexnative/skeleton-loading';


export default class extends React.PureComponent {
  render() {
    return (
      <div className='example-block'>
        <SkeletonLoader width={'100%'} height={SKELETON_HEIGHT} beforeMask={<BeforeMask />}>
          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <Circle cx="20" cy="20" r="20" />
        </SkeletonLoader>
      </div>
    );
  }
}

function BeforeMask() {
  const openAlert = () => console.log('BeforeMask clicked');
    
  return <Text style={styles.label}>
    Mask Before <Icon name="avatar" size={65} onPress={openAlert} />
  </Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 65,
    color: 'crimson'
  }
});