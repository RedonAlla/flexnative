/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 23:17:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-18 23:28:03
 * @ Description: Examples of Tag component with Types.
 */

import React from 'react';
// highlight-next-line
import Tag from '@flexnative/tags';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='default' type='default' />
        <Tag color='primary' text='ghost' type='ghost' />
        <Tag color='primary' text='text' type='text' />
      </div>
    );
  }
}