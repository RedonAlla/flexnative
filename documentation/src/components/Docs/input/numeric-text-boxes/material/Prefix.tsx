/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:35:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 22:51:08
 * @ Description: Examples of NumericTextBox component with prefix.
 */

import React from 'react';
import { Alert, Platform } from 'react-native';
import Icon from '@flexnative/icons';
// highlight-next-line
import { NumericTextBox } from '@flexnative/inputs';


export default class extends React.PureComponent {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox material label='Label' placeholder='Input with icon prefix' prefix="star" />
        <NumericTextBox material label='Label' placeholder='Input with custom element as prefix' prefix={<Prefix />} />
      </div>
    );
  }
}

function Prefix() {
  const openAlert = () =>
    Platform.OS === 'web'
      ? alert('Custom Element as prefix')
      : Alert.alert('Alert Title', 'Custom Element as prefix', [
          {text: 'OK'},
        ]);
    
  return <Icon name="avatar" onPress={openAlert} />;
}