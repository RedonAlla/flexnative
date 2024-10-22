/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 23:17:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-18 23:13:59
 * @ Description: Examples of Tag component with sizes.
 */

import React from 'react';
// highlight-next-line
import Tag from '@flexnative/tags';

export default class extends React.PureComponent {
  render() {
    return (
      <div className='example-block'>
        <div>
          <Tag color='primary' size='small' text='small' />
        </div>
        <div>
          <Tag color='primary' size='default' text='default' />
          </div>
        <div>
          <Tag color='primary' size='medium' text='medium' />
        </div>
        <div>
          <Tag color='primary' size='large'text='large' />
        </div>
      </div>
    );
  }
}