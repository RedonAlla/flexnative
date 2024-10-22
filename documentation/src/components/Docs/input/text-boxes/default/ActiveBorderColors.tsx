/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:47:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:16:32
 * @ Description: Examples of TextBox component in with active border colors.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox placeholder='crimson' activeBorderColor='crimson' />
        <TextBox placeholder='#ed143d' activeBorderColor='#ed143d' />
        <TextBox placeholder='hwb(349 8% 7%)' activeBorderColor='hwb(349 8% 7%)' />
        <TextBox placeholder='rgba(237, 20, 61 / 0.5)' activeBorderColor='rgba(237, 20, 61 / 0.5)' />

        <TextBox placeholder='rgb(237, 20, 61)' activeBorderColor='rgb(237, 20, 61)' />
        <TextBox placeholder='rgba(237, 20, 61, 0.5)' activeBorderColor='rgba(237, 20, 61, 0.5)' />
        <TextBox placeholder='hsl(349, 86%, 50%)' activeBorderColor='hsl(349, 86%, 50%)' />
        <TextBox placeholder='hsla(349, 86%, 50% / 0.5)' activeBorderColor='hsla(349, 86%, 50% / 0.5)' />
      </div>
    );
  }
}