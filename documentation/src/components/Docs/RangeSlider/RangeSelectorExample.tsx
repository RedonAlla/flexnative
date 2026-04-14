import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { RangeSlider } from '@flexnative/slider';
import DemoBlock from '../../common/DemoBlock';


export default () => {
  const [rangeValue, setRangeValue] = useState([20, 80]);

  const handleRangeChange = (value: number[]) => {
    setRangeValue(value);
  };

  return (
  <DemoBlock>
    <View style={styles.sliderContainer}>
      <Text style={styles.label}>
        Selected Range: {rangeValue[0]} - {rangeValue[1]}
      </Text>
      <RangeSlider
        value={rangeValue}
        onValueChange={handleRangeChange}
        minimumValue={0}
        maximumValue={100}
        step={20}
        minimumTrackTintColor="#4A90E2"
        maximumTrackTintColor="#D6D3D1"
        thumbTintColor="#F5F5F4"
      />
    </View>
  </DemoBlock>
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
