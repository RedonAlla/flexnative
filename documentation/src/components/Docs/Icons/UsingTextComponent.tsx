import React from 'react';
import { StyleSheet, Text } from 'react-native';


export default class extends React.PureComponent {
  render() {
    return (
      <div className='example-block'>
        <Text style={[styles.icon1, styles.textIcon]}>{'\ue90e'}</Text>
        <Text style={[styles.icon2, styles.textIcon]}>{'\ue90d'}</Text>
        <Text style={[styles.icon3, styles.textIcon]}>{'\ue91e'}</Text>
      </div>
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
    textAlignVertical: 'center',
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
    fontFamily: 'Icons',
  }
});