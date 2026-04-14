import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Slider } from '@flexnative/slider';
import DemoBlock from '../../common/DemoBlock';


export default () => {
  const [temperatureValue, setTemperatureValue] = useState(22);

  const getTemperatureColor = (temp: number): string => {
    if (temp < 18) return "#4A90E2"; // Cold - Blue
    if (temp < 24) return "#50E3C2"; // Comfortable - Teal
    if (temp < 28) return "#F5A623"; // Warm - Orange
    return "#FF6B6B"; // Hot - Red
  };

  const handleTemperatureChange = useCallback((value: number) => {
    setTemperatureValue(Number(value.toFixed(1)));
  }, []);

  return (
    <DemoBlock>
      <View style={styles.sliderContainer}>
          <View style={styles.temperatureHeader}>
            <Text style={styles.temperatureIcon}>🌡️</Text>
            <Text
              style={[
                styles.temperatureValue,
                { color: getTemperatureColor(temperatureValue) },
              ]}
            >
              {temperatureValue}°C
            </Text>
          </View>

          <Slider
            value={temperatureValue}
            onValueChange={(val) => handleTemperatureChange(val as number)}
            minimumValue={0}
            maximumValue={40}
            hideSteps
            minimumTrackTintColor={getTemperatureColor(temperatureValue)}
            maximumTrackTintColor="#D6D3D1"
            thumbTintColor="#F5F5F4"
            style={styles.slider}
            animateTransitions={true}
            animationType="timing"
            animationConfig={{ duration: 200 }}
          />

          <View style={styles.temperatureLabels}>
            <Text style={styles.tempLabel}>❄️ Cold</Text>
            <Text style={styles.tempLabel}>😊 Comfort</Text>
            <Text style={styles.tempLabel}>🔥 Hot</Text>
          </View>
        </View>
    </DemoBlock>
  );
}

// Styles
const styles = StyleSheet.create({
  sliderContainer: {
    marginVertical: 10,
  },
  slider: {
    marginVertical: 10,
  },
  temperatureHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  temperatureIcon: {
    fontSize: 28,
  },
  temperatureValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  temperatureLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  tempLabel: {
    fontSize: 18,
    color: "#999",
  },
});
