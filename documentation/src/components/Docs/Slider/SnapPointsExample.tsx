import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider } from '@flexnative/slider';

export default () => {
  const [snapValue, setSnapValue] = useState(25);

  return (
  <div className='example-block' style={{display: 'block'}}>
    <View style={styles.sliderContainer}>
      <Text style={styles.label}>Snapped Value: {snapValue}</Text>
      <Slider
        value={snapValue}
        onValueChange={(val) => setSnapValue(val as number)}
        minimumValue={0}
        maximumValue={100}
        snapPoints={[0, 10, 25, 50, 75, 90, 100]}
        minimumTrackTintColor="#2ECC71"
      />
      </View>
  </div>
  );
};



const styles = StyleSheet.create({
  sliderContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
});
