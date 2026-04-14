import React from "react";
import { BaseColors, dark, light } from "@flexnative/theme-context";
import { ColorValue } from "react-native";

import './styles.scss';
import ColorView from "@site/src/components/common/ColorView";


/**
 * DefaultColors Component
 *
 * This component renders a table displaying the default color palette used in the application.
 * It lists the color name, type, requirement status, and values for both light and dark themes.
 *
 * @extends React.PureComponent
 */
export default class extends React.PureComponent {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Light Value</th>
            <th>Dark Value</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(light).map((key, index) =>
              <tr key={index}>
                <td>{key}</td>
                <td><code><a href='https://reactnative.dev/docs/colors' target="_blank">ColorValue</a></code></td>
                <td><strong>true</strong></td>
                <td><ColorView color={light[key as keyof BaseColors] as ColorValue} /> <code>{(light[key as keyof BaseColors] as ColorValue).toString()}</code></td>
                <td><ColorView color={dark[key as keyof BaseColors]} /> <code>{(dark[key as keyof BaseColors] as ColorValue).toString()}</code></td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}