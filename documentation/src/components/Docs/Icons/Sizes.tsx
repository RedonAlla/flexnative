import React from 'react';

// highlight-next-line
import Icon from '@flexnative/icons';

export default class extends React.PureComponent {
  render() {
    return (
      <div className='example-block'>
        <Icon name='star' color='secondary' />
        <Icon name='star' size={16} color='secondary' />
        <Icon name='star' size={18} color='secondary' />
        <Icon name='star' size={24} color='secondary' />
        <Icon name='star' size={32} color='secondary' />
        <Icon name='star' size={64} color='secondary' />
      </div>
    );
  }
}