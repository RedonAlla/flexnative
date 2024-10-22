/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-15 22:50:56
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:17:34
 * @ Description: Examples of TextBox component border radius.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox placeholder='none' radius='none'/>
        <TextBox placeholder='medium' radius='medium'/>
        <TextBox placeholder='full radius' radius='full'/>
        <TextBox placeholder='small' radius='small'/>
        <TextBox placeholder='large' radius='large' />
        <TextBox placeholder='12' radius={12} />
      </div>
    );
  }
}