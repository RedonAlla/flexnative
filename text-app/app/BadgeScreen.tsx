import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Badge from '@flexnative/badges';

function App() {

  const androidIconCode = 59687;
  const unicodeChar = String.fromCodePoint(androidIconCode);
  
  return (
    <View style={styles.container}>
      <Badge text="10" color='primary'>
            <Button
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
          </Badge>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 15
  }
})

export default App;