import React from "react";
import BackgroundColor from "./BackgroundColor";
import BorderColor from "./BorderColor";
import BorderWidth from "./BorderWidth";
import CheckedBackgroundColor from "./CheckedBackgroundColor";
import CheckedBorderColor from "./CheckedBorderColor";
import Colors from "./Colors";
import CustomCheckElement from "./CustomCheckElement";
import Disabled from "./Disabled";
import Label from "./Label";
import Radio from "./Radio";
import Radius from "./Radius";
import Sizes from "./Sizes";
import Types from "./Type";
import Value from "./Value";


export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Value />
        <Colors />
        <BorderColor />
        <BorderWidth />
        <Radius />
        <BackgroundColor />
        <CheckedBorderColor />
        <Disabled />
        <CheckedBackgroundColor />
        <CustomCheckElement />
        <Sizes />
        <Types />
        <Label />
        <Radio />
      </>
    );
  }
}