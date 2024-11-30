/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: Icon component to render an Icon from @flexnative/icons or a custom React component in Input component. 
 */

import React from "react";
import { TextStyle } from "react-native";

import Icon, { IconName } from "@flexnative/icons";


/**
 * Type definition for component props.
 */
type Props = {
  /**
 * Type definition for component props.
 */
  icon?: keyof IconName | React.ReactElement;

  /**
   * Style to be applied to the icon.
   */
  iconStyle?: any;
}

/**
 * InputIcon component that renders an icon component from @flexnative/icons or a custom React component in Input component.
 * It extends React.PureComponent to optimize performance by implementing a shallow prop and state comparison.
 * 
 * @class InputIcon
 * @extends {React.PureComponent<Props>}
 */
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