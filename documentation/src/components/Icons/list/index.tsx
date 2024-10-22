import React from 'react';
import './styles.scss';

import { icons } from '@flexnative/icons';


class IconItem extends React.PureComponent<{name: string}> {
  render() {
    return (
      <div className='item'>
        <span className={`icon-${this.props.name}`} />
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default class extends React.PureComponent {
  render() {
    return (
      <div className='icon-list'>
      {
        Object.keys(icons).map((key) =>
          <IconItem key={key} name={key}/>
        )
      }
    </div>
    );
  }
}