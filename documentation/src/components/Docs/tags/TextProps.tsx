/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 23:17:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-18 23:25:34
 * @ Description: Examples of Tag component with Text Props.
 */

import React from 'react';
import { Alert, Platform } from 'react-native';
// highlight-next-line
import Tag from '@flexnative/tags';


export default class extends React.PureComponent<{}, {}> {
constructor(props: {}) {
    super(props);
    this.openAlert = this.openAlert.bind(this);
  }

  openAlert = () => {
    if (Platform.OS === 'web') {
      alert("Tag pressed...")
    } else {
      Alert.alert("FlexNative", "Tag pressed...")
    }
  };

  render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='TextProps' textProps={{onPress: this.openAlert, allowFontScaling: true}} />
      </div>
    );
  }
}