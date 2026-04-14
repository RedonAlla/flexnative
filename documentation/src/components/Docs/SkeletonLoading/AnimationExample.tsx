import React from 'react';
import { SKELETON_HEIGHT } from './constants';
// highlight-next-line
import SkeletonLoader, { Circle, Rect } from '@flexnative/skeleton-loading';
import DemoBlock from '../../common/DemoBlock';


export default class extends React.PureComponent {
  render() {
    return (
      <DemoBlock>
        {/* With Animation (default) */}
        <SkeletonLoader width={'100%'} height={SKELETON_HEIGHT} animate={true} >
          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <Circle cx="20" cy="20" r="20" />
        </SkeletonLoader>

        {/* Without Animation (default) */}

        <SkeletonLoader width={'100%'}  height={SKELETON_HEIGHT} animate={false}>
          <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
          <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="72" rx="3" ry="3" width="100%" height="6" />
          <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <Circle cx="20" cy="20" r="20" />
        </SkeletonLoader>

        {/* animation's behavior using the `speed`, and `interval` props. */}

        <SkeletonLoader width={'100%'} height={SKELETON_HEIGHT} interval={2} speed={0.5}>
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