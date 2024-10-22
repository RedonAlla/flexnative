import React from "react";
import { light, dark, BaseTheme } from '@flexnative/theme-context';

import ColorView from "../ColorView";


export default class extends React.PureComponent {
  render() {
    return (
      <>
        <p>One of <code>'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | ColorValue</code></p>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>Name</th>
              <th rowSpan={2}> Type</th>
              <th rowSpan={2}> Value</th>
              <th colSpan={2}>Preview</th>
            </tr>
            <tr>
              <th>Light</th>
              <th>Dark</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(light).map((key, index) =>
                <tr key={index}>
                  <td>{key}</td>
                  <td><code><a href="https://reactnative.dev/docs/colors" target="_blank">ColorValue</a></code></td>
                  <td><code>{`theme.colors.${key}`}</code></td>
                  <td><ColorView color={light[key]} /> <code style={{marginLeft: 15}} >{light[key]}</code></td>
                  <td><ColorView color={dark[key]} /> <code style={{marginLeft: 15}} >{dark[key]}</code></td>
                </tr>
              )
            }
            <tr>
              <td></td>
              <td><code><a href="https://reactnative.dev/docs/colors" target="_blank">ColorValue</a></code></td>
              <td colSpan={3}>Any <code><a href="https://reactnative.dev/docs/colors" target="_blank">ColorValue</a></code> chosen by developer.</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}