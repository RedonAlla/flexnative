import React from 'react';

import Color from './Color';
import BorderRadius from './BorderRadius';
import BorderWidth from './BorderWidth';
import FillMode from './FillMode';
import Size from './Size';
import BorderColor from './BorderColor';
import Children from './Children';


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Color />
        <BorderRadius />
        <BorderWidth />
        <FillMode />
        <Size />
        <BorderColor />
        <Children />
      </>
    );
  }
}