/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-03-02 21:25:06
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-17 23:52:21
 * @ Description: This module provides the `Icon` component, a utility component used within the Button to display icons or loading indicators.
 *                It handles rendering icons from the `@flexnative/icons` library or custom React elements, as well as showing a loading spinner when needed.
 */

import React from "react";
import { StyleProp, TextStyle } from "react-native";
import Icon, { IconName, Spinner } from "@flexnative/icons";


/**
 * @typedef {Object} Props
 * @property {boolean} [loading=false] - Indicates whether the component should display a loading spinner. Defaults to `false`.
 * @property {React.ReactElement} [renderLoading] - Optional. A custom React element to render as a loading indicator. If not provided, a default spinner will be used.
 * @property {keyof IconName | React.ReactElement} [icon] - The icon to display. It can be a name from the `IconName` enum of the `@flexnative/icons` library or a custom React element.
 * @property {StyleProp<TextStyle>} style - The style to apply to the icon or spinner.
 */
type Props = {
  loading?: boolean;
  renderLoading?: React.ReactElement;
  icon?: keyof IconName | React.ReactElement;
  style: StyleProp<TextStyle>
}

/**
 * @class BtnIcon
 * @classdesc The `BtnIcon` component is a helper component responsible for rendering icons inside the `Button` component.
 *            It can render icons from the `@flexnative/icons` library, custom React elements, or a loading spinner.
 * @extends React.PureComponent<Props, {}>
 */
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