import React from "react";
import { StyleSheet, Text } from "react-native";

import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Using Text component'>
        <Text style={[styles.icon1, styles.textIcon]}>{'\ue90e'}</Text>
        <Text style={[styles.icon2, styles.textIcon]}>{'\ue90d'}</Text>
        <Text style={[styles.icon3, styles.textIcon]}>{'\ue91e'}</Text>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  icon1: {
    fontSize: 64,
  },
  icon2: {
    fontSize: 64,
    color: 'rgb(0, 146, 255)'
  },
  icon3: {
    fontSize: 32,
    color: 'crimson',
    backgroundColor: '#FFC436',
    verticalAlign: 'middle',
    width: 68,
    height: 68,
    padding: 15,
    textAlign: 'center',
    borderRadius: 34,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'
  },
  textIcon: {
    userSelect: 'none',
    fontFamily: 'Icons'
  }
});