import React from "react";
import { ColorValue } from "react-native";

import './styles.scss';

export interface IProps {
  color: ColorValue;
}

export default class extends React.PureComponent<IProps> {
  render() {
    return (
      <span className='color-view' style={{backgroundColor: this.props.color.toString()}} />
    );
  }
}