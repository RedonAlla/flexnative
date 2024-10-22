import React from "react";
import { light, dark } from '@flexnative/theme-context';
import ColorView from "../ColorView";


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