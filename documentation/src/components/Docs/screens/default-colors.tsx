import React from "react";
import { ColorValue } from "react-native";
import { ColorView } from "../Colors/DefaultColors";

 const colors = {
  red: "#ff2325",
  orangeRed: "#ff5c1a",
  orange: "#ff9411",
  yellow: "#ffcb00",
  green: "#53b827",
  turquoise: "#28bfba",
  turquoise2: "#19ebdc",
  blueSky: "#23bde0",
  blueOcean: "#1274AC",
  blue: "#6043f4",
  purple: "#bb65ff",
  pink: "#fe6f9b",
  salmon: "#EA5A51",
  black: "#3a3e59",
};


export default class extends React.PureComponent {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(colors).map((key, index) =>
              <tr key={index}>
                <td>{key}</td>
                <td><ColorView color={colors[key as keyof typeof colors] as ColorValue} /> <code>{(colors[key as keyof typeof colors] as ColorValue).toString()}</code></td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}