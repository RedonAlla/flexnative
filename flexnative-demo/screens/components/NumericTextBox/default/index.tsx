import React from 'react';

import Colors from './Colors';
import BorderColors from './BorderColors';
import ActiveBorderColors from './ActiveBorderColors';
import BorderWidth from './BorderWidth';
import BorderRadius from './BorderRadius';
import BackgroundColor from './BackgroundColor';
import ActiveBackgroundColor from './ActiveBackgroundColor';
import Type from './Type';
import Sizes from './Sizes';
import ReadOnly from './ReadOnly';
import Disabled from './Disabled';
import Label from './Label';
import LabelStyle from './LabelStyle';
import HelperText from './HelperText';
import MaxLength from './MaxLength';
import Prefix from './Prefix';
import PrefixStyle from './PrefixStyle';
import Suffix from './Suffix';
import SuffixStyle from './SuffixStyle';
import AdornmentsSeparator from './AdornmentsSeparator';
import Actions from './Actions';
import Steps from './Steps';


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Actions />
        <Steps />
        <Colors />
        <BorderColors />
        <ActiveBorderColors />
        <BorderWidth />
        <BorderRadius />
        <BackgroundColor />
        <ActiveBackgroundColor />
        <Type />
        <Sizes />
        <ReadOnly />
        <Disabled />
        <Label />
        <LabelStyle />
        <HelperText />
        <MaxLength />
        <Prefix />
        <PrefixStyle />
        <Suffix />
        <SuffixStyle />
        <AdornmentsSeparator />
      </>
    );
  }
}