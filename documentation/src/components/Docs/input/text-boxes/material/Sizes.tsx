/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-16 20:51:10
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:18:24
 * @ Description: Examples of TextBox component with different sizes.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox material label='Label' placeholder='small' size='small' />
        <TextBox material label='Label' placeholder='default' size='default' />
        <TextBox material label='Label' placeholder='medium' size='medium' />
        <TextBox material label='Label' placeholder='large' size='large' />
      </div>
    );
  }
}