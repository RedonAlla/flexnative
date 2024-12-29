import React from "react";

import Actions from "./Actions";
import AnimationType from "./AnimationType";
import Behavior from "./Behavior";
import CloseOnDragDown from "./CloseOnDragDown";
import Height from "./Height";
import Mask from "./Mask";
import MinClosingHeight from "./MinClosingHeight";
import StylingWithStyleSheet from "./StylingWithStyleSheet";


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <AnimationType />
        <Actions />
        <Behavior />
        <Height />
        <Mask />
        <MinClosingHeight />
        <CloseOnDragDown />
        <StylingWithStyleSheet />
      </>
    );
  }
}