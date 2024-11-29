import React from "react";
import { View, StyleSheet, ColorValue, StyleProp, TextStyle } from "react-native";

import { TextBox } from "../../../../../packages/inputs/src";
import { StateCallbackType } from "ra-inputs/dist/textbox.props";

import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../../../constants/sizes";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Suffix style'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox placeholder='Style with StyleProp<TextStyle>' suffix="star" suffixStyle={styles.suffix} />
          </View>
          <View style={styles.column}>
            <TextBox placeholder='Style with function' suffix="star" suffixStyle={suffixStyle('rgb(35, 189, 224)', 'crimson')} />
          </View>
        </View>
      </DemoBlock>
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
  suffix: {
    color: 'crimson'
  },
  row: {
    columnGap: GAP,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  column: {
    flex: 1,
    rowGap: GAP,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});