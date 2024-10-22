/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 21:59:10
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:15:22
 * @ Description: Examples of NumericTextBox component with actions.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox placeholder='With actions' />
        <NumericTextBox placeholder='Without actions' actions={false} />
      </div>
    );
  }
}