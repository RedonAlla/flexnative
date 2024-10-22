/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:47:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:17:21
 * @ Description: Examples of NumericTextBox component in with active border colors.
 */

import React from 'react';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox material label='Label' placeholder='crimson' activeBorderColor='crimson' />
        <NumericTextBox material label='Label' placeholder='#ed143d' activeBorderColor='#ed143d' />
        <NumericTextBox material label='Label' placeholder='hwb(349 8% 7%)' activeBorderColor='hwb(349 8% 7%)' />
        <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61 / 0.5)' activeBorderColor='rgba(237, 20, 61 / 0.5)' />

        <NumericTextBox material label='Label' placeholder='rgb(237, 20, 61)' activeBorderColor='rgb(237, 20, 61)' />
        <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61, 0.5)' activeBorderColor='rgba(237, 20, 61, 0.5)' />
        <NumericTextBox material label='Label' placeholder='hsl(349, 86%, 50%)' activeBorderColor='hsl(349, 86%, 50%)' />
        <NumericTextBox material label='Label' placeholder='hsla(349, 86%, 50% / 0.5)' activeBorderColor='hsla(349, 86%, 50% / 0.5)' />
      </div>
    );
  }
}