/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-15 23:00:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 20:00:05
 * @ Description: Examples of TextBox component with type properties.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox material label='Label' placeholder='outlined' type='outlined' />
        <TextBox material label='Label' placeholder='underlined' type='underlined' />
      </div>
    );
  }
}