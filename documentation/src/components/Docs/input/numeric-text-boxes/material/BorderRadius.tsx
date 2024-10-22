/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-15 22:50:56
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:18:05
 * @ Description: Examples of NumericTextBox component border radius.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox material label='Label' placeholder='none' radius='none'/>
        <NumericTextBox material label='Label' placeholder='medium' radius='medium'/>
        <NumericTextBox material label='Label' placeholder='full radius' radius='full'/>
        <NumericTextBox material label='Label' placeholder='small' radius='small'/>
        <NumericTextBox material label='Label' placeholder='large' radius='large' />
        <NumericTextBox material label='Label' placeholder='12' radius={12} />
      </div>
    );
  }
}