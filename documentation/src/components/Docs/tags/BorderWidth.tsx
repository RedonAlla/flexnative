/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 23:17:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-18 21:50:14
 * @ Description: Examples of Tag component with background width.
 */

import React from 'react';
// highlight-next-line
import Tag from '@flexnative/tags';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='none (default)' type='ghost' borderWidth='none' />
        <Tag color='primary' text='hairline' type='ghost' borderWidth='hairline' />
        <Tag color='primary' text='thin' type='ghost' borderWidth='thin' />
        <Tag color='primary' text='base' type='ghost' borderWidth='base' />
        <Tag color='primary' text='thick' type='ghost' borderWidth='thick' />
        <Tag color='primary' text='2' type='ghost' borderWidth={2} />
      </div>
    );
  }
}