/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 20:29:33
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 22:38:23
 * @ Description: Examples of Spinner component using any icon as spinner.
 */
import React from 'react';
// highlight-next-line
import { Spinner } from '@flexnative/icons';
import { ICON_SIZE } from './constants';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Spinner name='sun' size={ICON_SIZE} color='secondary' />
        <Spinner name='star' size={ICON_SIZE} color='secondary' />
        <Spinner name='moon' size={ICON_SIZE} color='secondary' />
        <Spinner name='trash' size={ICON_SIZE} color='secondary' />
        <Spinner name='grid' size={ICON_SIZE} color='secondary' />
        <Spinner name='excel-file' size={ICON_SIZE} color='secondary' />
      </div>
    );
  }
}