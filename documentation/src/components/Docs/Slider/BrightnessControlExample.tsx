import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Slider } from '@flexnative/slider';

export default () => {

  const [brightnessValue, setBrightnessValue] = useState(30);
  
  const getBrightnessIcon = (brightness: number): string => {
    if (brightness === 0) return "🌑";
    if (brightness < 30) return "🌒";
    if (brightness < 70) return "🌓";
    return "☀️";
  };

  const handleBrightnessChange = useCallback((value: number) => {
    setBrightnessValue(Math.round(value));
  }, []);

  return (
    <div className='example-block' style={{display: 'block'}}>
      <View style={styles.sliderContainer}>
        <View style={styles.brightnessHeader}>
          <Text style={styles.brightnessIcon}>
            {getBrightnessIcon(brightnessValue)}
          </Text>
          <Text style={styles.brightnessValue}>
            Brightness: {brightnessValue}%
          </Text>
        </View>

        <Slider
          value={brightnessValue}
          onValueChange={(val) => handleBrightnessChange(val as number)}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#F5A623"
          maximumTrackTintColor="#E0E0E0"
          thumbTintColor="#F5A623"
          style={styles.slider}
          trackStyle={{ height: 8 }}
          thumbStyle={styles.brightnessThumb}
        />

        <View style={styles.brightnessLevels}>
          {[0, 20, 40, 60, 80, 100].map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.levelDot,
                brightnessValue >= level && styles.activeLevelDot,
              ]}
              onPress={() => setBrightnessValue(level)}
            >
              <Text style={styles.levelDotText}>{level}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </div>
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
  brightnessHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  brightnessIcon: {
    fontSize: 32,
  },
  brightnessValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F5A623",
  },
  brightnessThumb: {
    backgroundColor: "#F5A623",
  },
  brightnessLevels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  levelDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  activeLevelDot: {
    backgroundColor: "#F5A623",
  },
  levelDotText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "bold",
  }
});
