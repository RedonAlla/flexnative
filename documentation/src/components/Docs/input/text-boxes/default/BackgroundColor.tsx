/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-15 22:55:08
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:16:58
 * @ Description: Examples of TextBox component with background colors.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox placeholder='crimson' borderColor='crimson' />
        <TextBox placeholder='#ed143d' borderColor='#ed143d' />
        <TextBox placeholder='hwb(349 8% 7%)' borderColor='hwb(349 8% 7%)' />
        <TextBox placeholder='rgba(237, 20, 61 / 0.5)' borderColor='rgba(237, 20, 61 / 0.5)' />
        <TextBox placeholder='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)' />
        <TextBox placeholder='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)' />
        <TextBox placeholder='hsl(349, 86%, 50%)' borderColor='hsl(349, 86%, 50%)' />
        <TextBox placeholder='hsla(349, 86%, 50% / 0.5)' borderColor='hsla(349, 86%, 50% / 0.5)' />
      </div>
    );
  }
}