/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 23:17:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-18 23:17:44
 * @ Description: Examples of Tag component with borders radius.
 */

import React from 'react';
// highlight-next-line
import Tag from '@flexnative/tags';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='none' radius='none' />
        <Tag color='primary' text='small' radius='small' />
        <Tag color='primary' text='medium (default)' radius='medium' />
        <Tag color='primary' text='large' radius='large' />
        <Tag color='primary' text='full' radius='full' />
        <Tag color='primary' text='5' radius={5} />
      </div>
    );
  }
}