/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:35:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 23:06:26
 * @ Description: Examples of NumericTextBox component with Suffix with custom styles.
 */

import React from 'react';
import { StyleSheet, ColorValue, StyleProp, TextStyle } from "react-native";
// highlight-next-line
import { NumericTextBox, StateCallbackType } from '@flexnative/inputs';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block form-input'>
        <NumericTextBox placeholder='Style with StyleProp<TextStyle>' suffix="star" suffixStyle={styles.prefix} />
        <NumericTextBox placeholder='Style with function' suffix="star" suffixStyle={suffixStyle('rgb(35, 189, 224)', 'crimson')} />
      </div>
    );
  }
}

const suffixStyle = (defaultColor: ColorValue, activeColor: ColorValue) => {
  return (state: StateCallbackType): StyleProp<TextStyle> => {
    return [
      {
        color: state.focused ? activeColor : defaultColor
      }
    ]
  }
} 

const styles = StyleSheet.create({
  prefix: {
    color: 'crimson'
  }
});