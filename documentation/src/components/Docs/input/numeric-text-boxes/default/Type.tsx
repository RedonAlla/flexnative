/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-15 23:00:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:20:10
 * @ Description: Examples of NumericTextBox component with type properties.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox placeholder='outlined' type='outlined' />
        <NumericTextBox placeholder='underlined' type='underlined' />
      </div>
    );
  }
}