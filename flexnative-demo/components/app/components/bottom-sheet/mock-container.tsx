import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Button from '@flexnative/buttons';


type Props = {
  children?: React.ReactNode;
  close?: () => void;
}

export default (props: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>Bottom Sheet mock content</Text>
    { props.children ?? props.children }

    <Button text='Close' color='error' onPress={props.close}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4
  },
  text: {
    fontSize: 32,
    paddingVertical: 15
  }
});