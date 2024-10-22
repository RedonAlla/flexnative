/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 20:29:33
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 22:28:36
 * @ Description: Examples of Spinner component with different sizes.
 */
import React from 'react';
// highlight-next-line
import { Spinner } from '@flexnative/icons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Spinner name='star' color='secondary' />
        <Spinner name='star' size={16} color='secondary' />
        <Spinner name='star' size={18} color='secondary' />
        <Spinner name='star' size={24} color='secondary' />
        <Spinner name='star' size={32} color='secondary' />
        <Spinner name='star' size={64} color='secondary' />
      </div>
    );
  }
}