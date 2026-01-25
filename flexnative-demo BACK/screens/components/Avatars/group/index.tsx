import React from 'react';

import Children from './Children';
import Combinations from './Combinations';
import ItemBorderColor from './ItemBorderColor';
import ItemBorderWidth from './ItemBorderWidth';
import ItemPadding from './ItemPadding';
import SortIndex from './SortIndex';


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <ItemPadding />
        <SortIndex />
        <ItemBorderColor />
        <ItemBorderWidth />
        <Children />
        <Combinations />
      </>
    );
  }
}