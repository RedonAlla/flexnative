import React, { useCallback, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Slider } from '@flexnative/slider';
import DemoBlock from '../../common/DemoBlock';


export default () => {

  const [volumeValue, setVolumeValue] = useState(75);
  const [isSliding, setIsSliding] = useState(false);
  
  const getVolumeIcon = (volume: number): string => {
    if (volume === 0) return "🔇";
    if (volume < 30) return "🔈";
    if (volume < 70) return "🔉";
    return "🔊";
  };

  const handleVolumeChange = useCallback((value: number) => {
    setVolumeValue(Math.round(value));
  }, []);

  const handleVolumeSlidingStart = useCallback((value: number) => {
    console.log("Volume sliding started at:", value);
    setIsSliding(true);
  }, []);

  const handleVolumeSlidingComplete = useCallback((value: number) => {
    console.log("Volume sliding completed at:", value);
    setIsSliding(false);
    Alert.alert("Volume Changed", `New volume level: ${Math.round(value)}%`);
  }, []);

  return (
    <DemoBlock>
      <View>
        <View style={styles.sliderContainer}>
          <View style={styles.volumeHeader}>
            <Text style={styles.volumeIcon}>{getVolumeIcon(volumeValue)}</Text>
            <Text style={[styles.value, isSliding && styles.slidingValue]}>
              Volume: {volumeValue}%
            </Text>
            <Text style={styles.slidingIndicator}>🎤</Text>
          </View>

          <Slider
            value={volumeValue}
            onValueChange={(val) => handleVolumeChange(val as number)}
            onSlidingStart={(val) => handleVolumeSlidingStart(val as number)}
            onSlidingComplete={(val) =>
              handleVolumeSlidingComplete(val as number)
            }
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FF2056"
            maximumTrackTintColor="#D6D3D1"
            thumbTintColor="#F5F5F4"
            style={styles.slider}
            trackStyle={styles.volumeTrack}
            thumbStyle={styles.volumeThumb}
          />

          <View style={styles.volumeLevels}>
            <Text style={styles.levelText}>Low</Text>
            <Text style={styles.levelText}>Medium</Text>
            <Text style={styles.levelText}>High</Text>
            <Text style={styles.levelText}>Max</Text>
          </View>
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
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
    textAlign: "center",
  },
  volumeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  volumeIcon: {
    fontSize: 28,
  },
  slidingValue: {
    color: "#FF6B6B",
    transform: [{ scale: 1.1 }],
  },
  slidingIndicator: {
    fontSize: 28,
  },
  volumeTrack: {
    height: 8,
  },
  volumeThumb: {
    // shadowColor: "#FF6B6B",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // elevation: 5,
  },
  volumeLevels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  levelText: {
    fontSize: 12,
    color: "#999",
  }
});
