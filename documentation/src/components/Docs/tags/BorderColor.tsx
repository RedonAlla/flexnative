/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 23:17:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-18 21:47:12
 * @ Description: Examples of Tag component with borders color.
 */

import React from 'react';
// highlight-next-line
import Tag from '@flexnative/tags';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag color='primary' borderWidth='thin' type='ghost' text='crimson' borderColor='crimson'/>
        <Tag color='primary' borderWidth='thin' type='ghost' text='#ed143d' borderColor='#ed143d'/>
        <Tag color='primary' borderWidth='thin' type='ghost' text='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)'/>
        <Tag color='primary' borderWidth='thin' type='ghost' text='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}