/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:35:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:09:39
 * @ Description: Examples of NumericTextBox component with AdornmentSeparator.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox placeholder='Prefix Separator' prefix="avatar" prefixSeparator />
        <NumericTextBox placeholder='Suffix Separator' suffix="avatar" suffixSeparator />
      </div>
    );
  }
}