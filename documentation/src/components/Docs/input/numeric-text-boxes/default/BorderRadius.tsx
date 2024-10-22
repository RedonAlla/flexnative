/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-15 22:50:56
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:17:34
 * @ Description: Examples of NumericTextBox component border radius.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox placeholder='none' radius='none'/>
        <NumericTextBox placeholder='medium' radius='medium'/>
        <NumericTextBox placeholder='full radius' radius='full'/>
        <NumericTextBox placeholder='small' radius='small'/>
        <NumericTextBox placeholder='large' radius='large' />
        <NumericTextBox placeholder='12' radius={12} />
      </div>
    );
  }
}