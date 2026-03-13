import React from "react";
import { dark, light } from "@flexnative/theme-context";
import { ColorValue } from "react-native";

import './styles.scss';


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
                <td><ColorView color={light[key]} /> <code>{light[key]}</code></td>
                <td><ColorView color={dark[key]} /> <code>{dark[key]}</code></td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}

/**
 * ColorView Component
 *
 * A simple helper component that renders a small colored square to visually represent a color value.
 *
 * @param {Object} props - The component props.
 * @param {ColorValue} props.color - The color value to display.
 */
const ColorView: React.FC<{color: ColorValue;}> = ({ color }) => {
  return (
    <span className='color-view' style={{backgroundColor: color.toString()}} />
  );
};