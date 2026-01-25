import React from 'react';

import Flex from './Flex';
import Row from './Row';
import JustifyContent from './JustifyContent';


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Flex />
        <Row />
        <JustifyContent />
      </>
    );
  }
}