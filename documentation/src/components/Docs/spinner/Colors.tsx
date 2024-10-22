/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 20:29:33
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 22:15:39
 * @ Description: Examples of Spinner component with colors.
 */
import React from 'react';
// highlight-next-line
import { Spinner } from '@flexnative/icons';
import { ICON_SIZE } from './constants';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Spinner name='spinner' size={ICON_SIZE} color='default'/>
        <Spinner name='spinner' size={ICON_SIZE} color='primary'/>
        <Spinner name='spinner' size={ICON_SIZE} color='secondary'/>
        <Spinner name='spinner' size={ICON_SIZE} color='info'/>
        <Spinner name='spinner' size={ICON_SIZE} color='success'/>
        <Spinner name='spinner' size={ICON_SIZE} color='warning'/>
        <Spinner name='spinner' size={ICON_SIZE} color='error'/>
        <Spinner name='spinner' size={ICON_SIZE} color='dark'/>
        <Spinner name='spinner' size={ICON_SIZE} color='light'/>

        <Spinner name='spinner' size={ICON_SIZE} color='red'/>
        <Spinner name='spinner' size={ICON_SIZE} color='chartreuse'/>
        <Spinner name='spinner' size={ICON_SIZE} color='#9400FF'/>
        <Spinner name='spinner' size={ICON_SIZE} color='#FFC436'/>
        <Spinner name='spinner' size={ICON_SIZE} color='rgb(0, 146, 255)'/>
      </div>
    );
  }
}