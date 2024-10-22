/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:35:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 22:42:14
 * @ Description: Examples of NumericTextBox component with helper text.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox placeholder='input with helper text' helperText="Helper text" />
      </div>
    );
  }
}