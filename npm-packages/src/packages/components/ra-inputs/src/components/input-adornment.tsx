import React from "react";
import { TextStyle } from "react-native";

import Icon, { IconName } from "@flexnative/icons";


type AdornmentProps = {
  adornment?: keyof IconName | React.ReactElement;
  adornmentStyle?: any;
}

export default class extends React.PureComponent<AdornmentProps, {}> {
  public render() {
    const {adornment, adornmentStyle } = this.props;

    if(!Boolean(adornment))
      return null;

    if(typeof adornment === 'string')
      return <Icon name={adornment} style={adornmentStyle as TextStyle} />

    return (
      React.cloneElement(adornment!, adornmentStyle)
    );
  }
}