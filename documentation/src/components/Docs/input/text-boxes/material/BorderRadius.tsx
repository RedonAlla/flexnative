/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-15 22:50:56
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:18:05
 * @ Description: Examples of TextBox component border radius.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox material label='Label' placeholder='none' radius='none'/>
        <TextBox material label='Label' placeholder='medium' radius='medium'/>
        <TextBox material label='Label' placeholder='full radius' radius='full'/>
        <TextBox material label='Label' placeholder='small' radius='small'/>
        <TextBox material label='Label' placeholder='large' radius='large' />
        <TextBox material label='Label' placeholder='12' radius={12} />
      </div>
    );
  }
}