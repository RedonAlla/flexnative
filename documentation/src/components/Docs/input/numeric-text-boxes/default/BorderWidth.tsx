/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 23:07:10
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:17:51
 * @ Description: Examples of NumericTextBox component with borders width.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox placeholder='none (default)' borderWidth='none' />
        <NumericTextBox placeholder='hairline' borderWidth='hairline' />
        <NumericTextBox placeholder='thin' borderWidth='thin' />
        <NumericTextBox placeholder='base' borderWidth='base' />
        <NumericTextBox placeholder='thick' borderWidth='thick' />
        <NumericTextBox placeholder='3' borderWidth={3}/>
      </div>
    );
  }
}