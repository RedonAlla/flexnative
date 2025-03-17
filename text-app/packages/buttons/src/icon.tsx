import React from "react";
import { StyleProp, TextStyle } from "react-native";
import Icon, { IconName, Spinner } from "@flexnative/icons";


type Props = {
  loading?: boolean;
  renderLoading?: React.ReactElement;
  icon?: keyof IconName | React.ReactElement;
  style: StyleProp<TextStyle>
}

export default class extends React.PureComponent<Props> {

  public render() {
    const { icon, style, loading, renderLoading } = this.props;

    if(loading)
      return renderLoading ?? <Spinner name="spinner" style={style} />

    if(!icon)
      return null;    

    if(React.isValidElement(icon))
      return icon;

    return (
      <Icon
        name={icon as keyof IconName}
        style={style}
      />
    );
  }
}