import React from 'react';

import BorderColorActive from './BorderColorActive';
import BorderColor from './BorderColor';
import BorderRadius from './BorderRadius';
import BorderWidth from './BorderWidth';
import Children from './Children';
import ColorsActive from './ColorsActive';
import Colors from './Colors';
import Types from './Types';
import Disabled from './Disabled';
import Loading from './Loading';
import Icons from './Icons';
import Sizes from './Sizes';
import Text from './Text';
import StylingWithStyleSheet from './StylingWithStyleSheet';
import CustomLoading from './CustomLoading';


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Colors />
        <ColorsActive />
        <Types />
        <BorderWidth />
        <BorderColor />
        <BorderColorActive />
        <BorderRadius />
        <Disabled />
        <Loading />
        <CustomLoading />
        <Icons />
        <Sizes />
        <Text />
        <Children />
        <StylingWithStyleSheet />
      </>
    );
  }
}