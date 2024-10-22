import React from 'react';

import { icons } from '@flexnative/icons';


export default class extends React.PureComponent<{name: string}> {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Unicode Value</td>
            <td>Icon</td>
          </tr>
        </thead>
        <tbody>
        {
          Object.keys(icons).map((key, index) =>
            <tr key={index}>
              <td>{key}</td>
              <td>{key}</td>
              <td><span className={`icon-font icon-${key}`} /></td>
            </tr>
          )
        }
        </tbody>
      </table>
    );
  }
}