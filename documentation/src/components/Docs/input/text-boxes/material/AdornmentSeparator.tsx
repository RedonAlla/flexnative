/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:35:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:17:25
 * @ Description: Examples of TextBox component with AdornmentSeparator.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox material label='Label' placeholder='Prefix Separator' prefix="avatar" prefixSeparator />
        <TextBox material label='Label' placeholder='Suffix Separator' suffix="avatar" suffixSeparator />
      </div>
    );
  }
}