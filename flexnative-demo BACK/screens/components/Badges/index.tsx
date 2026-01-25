import React from "react";

import BorderColor from "./BorderColor";
import BorderWidth from "./BorderWidth";
import Colors from "./Colors";
import Position from "./Position";
import Radius from "./Radius";
import Sizes from "./Sizes";
import Types from "./Types";
import TextColor from "./TextColor";
import TextProps from "./TextProps";


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Colors />
        <BorderWidth />
        <BorderColor />
        <Radius />
        <Sizes />
        <Types />
        <Position />
        <TextColor />
        <TextProps />
      </>
    );
  }
}