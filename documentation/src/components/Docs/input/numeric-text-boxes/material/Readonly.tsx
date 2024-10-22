/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-16 20:53:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:11:15
 * @ Description: Examples of NumericTextBox component in readonly state.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox material label='Label' placeholder='outlined' type='outlined' readOnly />
        <NumericTextBox material label='Label' placeholder='underlined' type='underlined' readOnly />
      </div>
    );
  }
}