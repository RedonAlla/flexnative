/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 23:07:10
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:18:11
 * @ Description: Examples of NumericTextBox component with borders width.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox material label='Label' placeholder='none (default)' borderWidth='none' />
        <NumericTextBox material label='Label' placeholder='hairline' borderWidth='hairline' />
        <NumericTextBox material label='Label' placeholder='thin' borderWidth='thin' />
        <NumericTextBox material label='Label' placeholder='base' borderWidth='base' />
        <NumericTextBox material label='Label' placeholder='thick' borderWidth='thick' />
        <NumericTextBox material label='Label' placeholder='3' borderWidth={3}/>
      </div>
    );
  }
}