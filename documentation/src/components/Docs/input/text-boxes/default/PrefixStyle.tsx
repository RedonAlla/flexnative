/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-14 22:35:25
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 22:54:54
 * @ Description: Examples of TextBox component with prefix with custom styles.
 */

import React from 'react';
import { ColorValue, StyleProp, StyleSheet, TextStyle } from "react-native";
// highlight-next-line
import { TextBox, StateCallbackType } from '@flexnative/inputs';


export default class extends React.PureComponent {
  render() {
    return (
      <div className='example-block form-input'>
        <TextBox placeholder='Style with StyleProp<TextStyle>' prefix="star" prefixStyle={styles.prefix} />
        <TextBox placeholder='Style with function' prefix="star" prefixStyle={prefixStyle('rgb(35, 189, 224)', 'crimson')} />
      </div>
    );
  }
}

const prefixStyle = (defaultColor: ColorValue, activeColor: ColorValue) => {
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