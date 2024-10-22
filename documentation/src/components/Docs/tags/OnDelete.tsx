/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 23:17:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-18 23:10:56
 * @ Description: Examples of Tag component with delete action.
 */

import React from 'react';
import { Alert, Platform } from 'react-native';

// highlight-next-line
import Tag from '@flexnative/tags';

export default class extends React.PureComponent {
  constructor(props: {}) {
    super(props);
    this.openAlert = this.openAlert.bind(this);
  }

  openAlert = () => {
    if (Platform.OS === 'web') {
      alert("Delete...")
    } else {
      Alert.alert("FlexNative", "Delete...")
    }
  };

  render() {
    return (
      <div className='example-block'>
        <div>
          <Tag color='primary' size='small' text='small' onDelete={this.openAlert} />
        </div>
        <div>
          <Tag color='primary' size='default' text='default' onDelete={this.openAlert} />
          </div>
        <div>
          <Tag color='primary' size='medium' text='medium' onDelete={this.openAlert} />
        </div>
        <div>
          <Tag color='primary' size='large'text='large' onDelete={this.openAlert} />
        </div>
      </div>
    );
  }
}