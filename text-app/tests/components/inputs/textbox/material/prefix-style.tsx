import React from "react";
import { View, StyleSheet, ColorValue, StyleProp, TextStyle } from "react-native";

import { TextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";
import { GAP } from "../../../badges/constants";
import { StateCallbackType } from "ra-inputs/dist/textbox.props";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Prefix style'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox material label='Prefix style' placeholder='Style with StyleProp<TextStyle>' prefix="star" prefixStyle={styles.prefix} />
          </View>
          <View style={styles.column}>
            <TextBox material label='Prefix style' placeholder='Style with function' prefix="star" prefixStyle={prefixStyle('rgb(35, 189, 224)', 'crimson')} />
          </View>
        </View>
      </DemoBlock>
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