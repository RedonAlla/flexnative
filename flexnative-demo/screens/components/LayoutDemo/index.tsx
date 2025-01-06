import React from 'react';

import Flex from './Flex';
import Row from './Row';
import JustifyContent from './JustifyContent';
import Justify from './Justify';
import AlignItems from './AlignItems';
import Align from './Align';
import AlignContent from './AlignContent';
import Content from './Content';
import Width from './Width';
import Height from './Height';
import Wrap from './Wrap';
import Gap from './Gap';
import RowGap from './RowGap';
import ColumnGap from './ColumnGap';
import BackgroundColor from './BackgroundColor';
import Padding from './Padding';


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Flex />
        <Row />
        <JustifyContent />
        <Justify />
        <AlignItems />
        <Align />
        <AlignContent />
        <Content />
        <Width />
        <Height />
        <Wrap />
        <Gap />
        <RowGap />
        <ColumnGap />
        <BackgroundColor />
        <Padding />
      </>
    );
  }
}