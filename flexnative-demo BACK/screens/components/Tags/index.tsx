import React from "react";

import BackgroundColor from "./BackgroundColor";
import BorderColor from "./BorderColor";
import BorderWidth from "./BorderWidth";
import Children from "./Children";
import Colors from "./Colors";
import Delete from "./Delete";
import Radius from "./Radius";
import Sizes from "./Sizes";
import TextColor from "./TextColor";
import TextProps from "./TextProps";


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Colors />
        <BorderColor />
        <BorderWidth />
        <BackgroundColor />
        <Radius />
        <Sizes />
        <TextColor />
        <TextProps />
        <Children />
        <Delete />
      </>
    );
  }
}