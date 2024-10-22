/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 23:07:10
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:17:51
 * @ Description: Examples of TextBox component with borders width.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox placeholder='none (default)' borderWidth='none' />
        <TextBox placeholder='hairline' borderWidth='hairline' />
        <TextBox placeholder='thin' borderWidth='thin' />
        <TextBox placeholder='base' borderWidth='base' />
        <TextBox placeholder='thick' borderWidth='thick' />
        <TextBox placeholder='3' borderWidth={3}/>
      </div>
    );
  }
}