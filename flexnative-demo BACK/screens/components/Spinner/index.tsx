import React from "react";

import AnyIcon from "./AnyIcon";
import Colors from "./Colors";
import Sizes from "./Sizes";
import StylingWithStyleSheet from "./StylingWithStyleSheet";


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Colors />
        <Sizes />
        <AnyIcon />
        <StylingWithStyleSheet />
      </>
    );
  }
}