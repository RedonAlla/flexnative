import React from 'react';

import BackgroundColor from './BackgroundColor';
import BorderColor from './BorderColor';
import BorderWidth from './BorderWidth';
import Colors from './Colors';
import CustomItems from './CustomItems';
import Direction from './Direction';
import Disabled from './Disabled';
import HelperText from './HelperText';
import LabelStyle from './LabelStyle';
import Label from './Label';
import Selection from './Selection';
import Sizes from './Sizes';
import Type from './Type';
import ValueField from './ValueField';
import Value from './Value';


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Value />
        <ValueField />
        <Colors />
        <BorderWidth />
        <BorderColor />
        <BackgroundColor />
        <Direction />
        <Disabled />
        <Sizes />
        <Type />
        <HelperText />
        <Label />
        <LabelStyle />
        <CustomItems />
        <Selection />
      </>
    );
  }
}