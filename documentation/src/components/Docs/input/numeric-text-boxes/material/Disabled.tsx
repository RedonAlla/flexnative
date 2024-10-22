/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-16 20:53:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:18:22
 * @ Description: Examples of NumericTextBox component in disabled state.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox material label='Label' placeholder='outlined' type='outlined' disabled />
        <NumericTextBox material label='Label' placeholder='underlined' type='underlined' disabled />
      </div>
    );
  }
}