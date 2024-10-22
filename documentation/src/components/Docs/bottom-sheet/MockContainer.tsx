import React from 'react';
import { StyleSheet } from 'react-native';

import Button from '@flexnative/buttons';


type Props = {
  children?: React.ReactNode;
  close?: () => void;
}

export default (props: Props) => (
  <div style={styles.container}>
    <p style={styles.text}>Bottom Sheet mock content</p>
    { props.children ?? props.children }

    <Button text='Close' color='error' onPress={props.close}/>
  </div>
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