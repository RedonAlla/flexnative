import React from 'react';

import BackgroundColor from './BackgroundColor';
import BorderColor from './BorderColor';
import BorderWidth from './BorderWidth';
import Colors from './Colors';
import FillMode from './FillMode';
import Radius from './Radius';
import Sizes from './Sizes';
import IconColor from './IconColor';


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Colors />
        <IconColor />
        <FillMode />
        <BackgroundColor />
        <BorderColor />
        <BorderWidth />
        <Radius />
        <Sizes />
      </>
    );
  }
}