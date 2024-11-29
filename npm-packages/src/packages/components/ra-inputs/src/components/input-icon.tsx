import React from "react";
import { TextStyle } from "react-native";

import Icon, { IconName } from "@flexnative/icons";


type Props = {
  icon?: keyof IconName | React.ReactElement;
  iconStyle?: any;
}

export default class InputIcon extends React.PureComponent<Props> {
  public render() {
    const { icon, iconStyle } = this.props;

    if(!Boolean(icon))
      return null;

    if(typeof icon === 'string')
      return <Icon name={icon} style={iconStyle as TextStyle} />

    return (
      React.cloneElement(icon!, iconStyle)
    );
  }
}