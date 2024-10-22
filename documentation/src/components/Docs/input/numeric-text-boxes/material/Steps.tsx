/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:06:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:18:58
 * @ Description: Examples of NumericTextBox component increment / decrement steps.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox material label='Label' placeholder='Step 1 (default)' />
        <NumericTextBox material label='Label' placeholder='Step 5' step={5} />
        <NumericTextBox material label='Label' placeholder='Step 10' step={10} />
        <NumericTextBox material label='Label' placeholder='Step 50' step={50} />
        <NumericTextBox material label='Label' placeholder='Step 100' step={100} />
        <NumericTextBox material label='Label' placeholder='Step 1000' step={1000} />
      </div>
    );
  }
}