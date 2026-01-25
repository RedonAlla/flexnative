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
      </>
    );
  }
}