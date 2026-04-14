import React from 'react';
import { SKELETON_HEIGHT } from './constants';
import SkeletonLoader, { Circle, Rect } from '@flexnative/skeleton-loading';
import DemoBlock from '../../common/DemoBlock';


export default class extends React.PureComponent {
  render() {
    return (
      <DemoBlock>
        {/* Example 1: Custom colors - Blue background with a lighter blue shimmer */}
        <SkeletonLoader
          width={'100%'}
          height={SKELETON_HEIGHT}
          backgroundColor="#a8dadc"
          foregroundColor="#457b9d"
        >
          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <Circle cx="20" cy="20" r="20" />
        </SkeletonLoader>

        {/* Add some spacing between examples */}
        <div style={{ height: 20 }} />

        {/* Example 2: Custom colors - Dark background with a contrasting shimmer */}
        <SkeletonLoader
          width={'100%'}
          height={SKELETON_HEIGHT}
          backgroundColor="#343a40"
          foregroundColor="#6c757d"
          speed={1.5}
        >
          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <Circle cx="20" cy="20" r="20" />
        </SkeletonLoader>
      </DemoBlock>
    );
  }
}
