/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-16 20:51:10
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:18:24
 * @ Description: Examples of NumericTextBox component with different sizes.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox material label='Label' placeholder='small' size='small' />
        <NumericTextBox material label='Label' placeholder='default' size='default' />
        <NumericTextBox material label='Label' placeholder='medium' size='medium' />
        <NumericTextBox material label='Label' placeholder='large' size='large' />
      </div>
    );
  }
}