/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-15 22:57:49
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:15:50
 * @ Description: Examples of NumericTextBox component in with activeBackgroundColor property.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox placeholder='crimson' activeBackgroundColor='crimson' />
        <NumericTextBox placeholder='#ed143d' activeBackgroundColor='#ed143d' />
        <NumericTextBox placeholder='hwb(349 8% 7%)' activeBackgroundColor='hwb(349 8% 7%)' />
        <NumericTextBox placeholder='rgba(237, 20, 61 / 0.5)' activeBackgroundColor='rgba(237, 20, 61 / 0.5)' />
        <NumericTextBox placeholder='rgb(237, 20, 61)' activeBackgroundColor='rgb(237, 20, 61)' />
        <NumericTextBox placeholder='rgba(237, 20, 61, 0.5)' activeBackgroundColor='rgba(237, 20, 61, 0.5)' />
        <NumericTextBox placeholder='hsl(349, 86%, 50%)' activeBackgroundColor='hsl(349, 86%, 50%)' />
        <NumericTextBox placeholder='hsla(349, 86%, 50% / 0.5)' activeBackgroundColor='hsla(349, 86%, 50% / 0.5)' />
      </div>
    );
  }
}