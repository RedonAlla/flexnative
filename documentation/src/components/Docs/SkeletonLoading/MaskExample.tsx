import React from 'react';
// highlight-next-line
import SkeletonLoader, { Circle, Rect } from '@flexnative/skeleton-loading';
import DemoBlock from '../../common/DemoBlock';


export default class extends React.PureComponent {
  render() {
    return (
      <DemoBlock>
        <SkeletonLoader
          speed={1.5}
          width={300}
          height={80}
          backgroundColor="#e0e0e0"
          foregroundColor="#f5f5f5"
          beforeMask={
            <React.Fragment>
              {/* Avatar circle */}
              <Circle cx="40" cy="40" r="30" />
              
              {/* Top line of text (Title) */}
              <Rect x="85" y="20" rx="4" ry="4" width="180" height="15" />
              
              {/* Bottom line of text (Subtitle) */}
              <Rect x="85" y="45" rx="3" ry="3" width="120" height="10" />
            </React.Fragment>
          } />
      </DemoBlock>
    );
  }
}