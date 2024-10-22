/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:35:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 22:38:18
 * @ Description: Examples of TextBox component with custom label styles.
 */

import React from 'react';
import { StyleSheet, ColorValue, StyleProp, TextStyle } from "react-native";
// highlight-next-line
import { StateCallbackType, TextBox } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox placeholder='Style with StyleProp<TextStyle>' label="Label" labelStyle={styles.label} />
        <TextBox placeholder='Style with function' label="Label" labelStyle={labelStyles('rgb(35, 189, 224)', 'crimson')} />
      </div>
    );
  }
}

const labelStyles = (defaultColor: ColorValue, activeColor: ColorValue) => {
  return (state: StateCallbackType): StyleProp<TextStyle> => {
    return [
      {
        color: state.focused ? activeColor : defaultColor
      }
    ]
  }
} 

const styles = StyleSheet.create({
  label: {
    color: 'crimson'
  }
});