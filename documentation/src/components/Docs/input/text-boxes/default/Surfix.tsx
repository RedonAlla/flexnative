/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:35:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:04:40
 * @ Description: Examples of TextBox component with different colors.
 */

import React from 'react';
import { Alert, Platform } from "react-native";
import Icon from '@flexnative/icons';
// highlight-next-line
import { TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox placeholder='Input with icon suffix' suffix="star" />
        <TextBox placeholder='Input with custom element as suffix' suffix={<Suffix />} />
      </div>
    );
  }
}

function Suffix() {
  const openAlert = () =>
    Platform.OS === 'web'
      ? alert('Custom Element as suffix')
      : Alert.alert('Alert Title', 'Custom Element as suffix', [
          {text: 'OK'},
        ]);
    
  return <Icon name="avatar" onPress={openAlert} />;
}