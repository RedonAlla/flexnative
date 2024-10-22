/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-15 22:57:49
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 19:53:47
 * @ Description: Examples of TextBox component in with activeBackgroundColor property.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox placeholder='crimson' activeBackgroundColor='crimson' />
        <TextBox placeholder='#ed143d' activeBackgroundColor='#ed143d' />
        <TextBox placeholder='hwb(349 8% 7%)' activeBackgroundColor='hwb(349 8% 7%)' />
        <TextBox placeholder='rgba(237, 20, 61 / 0.5)' activeBackgroundColor='rgba(237, 20, 61 / 0.5)' />
        <TextBox placeholder='rgb(237, 20, 61)' activeBackgroundColor='rgb(237, 20, 61)' />
        <TextBox placeholder='rgba(237, 20, 61, 0.5)' activeBackgroundColor='rgba(237, 20, 61, 0.5)' />
        <TextBox placeholder='hsl(349, 86%, 50%)' activeBackgroundColor='hsl(349, 86%, 50%)' />
        <TextBox placeholder='hsla(349, 86%, 50% / 0.5)' activeBackgroundColor='hsla(349, 86%, 50% / 0.5)' />
      </div>
    );
  }
}