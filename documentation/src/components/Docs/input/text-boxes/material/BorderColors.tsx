/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:41:55
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:17:55
 * @ Description: Examples of TextBox component with border colors.
 */

import React from 'react';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox material label='Label' placeholder='crimson' borderColor='crimson' />
        <TextBox material label='Label' placeholder='#ed143d' borderColor='#ed143d' />
        <TextBox material label='Label' placeholder='hwb(349 8% 7%)' borderColor='hwb(349 8% 7%)' />
        <TextBox material label='Label' placeholder='rgba(237, 20, 61 / 0.5)' borderColor='rgba(237, 20, 61 / 0.5)' />

        <TextBox material label='Label' placeholder='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)' />
        <TextBox material label='Label' placeholder='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)' />
        <TextBox material label='Label' placeholder='hsl(349, 86%, 50%)' borderColor='hsl(349, 86%, 50%)' />
        <TextBox material label='Label' placeholder='hsla(349, 86%, 50% / 0.5)' borderColor='hsla(349, 86%, 50% / 0.5)' />
      </div>
    );
  }
}