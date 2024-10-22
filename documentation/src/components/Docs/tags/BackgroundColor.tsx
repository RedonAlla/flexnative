/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 23:17:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 23:21:07
 * @ Description: Examples of Tag component with background color.
 */

import React from 'react';
// highlight-next-line
import Tag from '@flexnative/tags';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Tag text='crimson' backgroundColor='crimson'/>
        <Tag text='#ed143d' backgroundColor='#ed143d'/>
        <Tag text='rgb(237, 20, 61)' backgroundColor='rgb(237, 20, 61)'/>
        <Tag text='rgba(237, 20, 61, 0.5)' backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}