import React, { useCallback, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Slider from "@flexnative/slider";

// Custom images for thumb
const THUMB_IMAGES = {
  default: require("../assets/icon.png"),
  heart: require("../assets/favicon.png"),
  star: require("../assets/favicon.png"),
} as const;

// Main App Component
const SliderDemoApp = () => {
  // State declarations
  const [basicValue, setBasicValue] = useState(50);
  const [volumeValue, setVolumeValue] = useState(75);
  const [brightnessValue, setBrightnessValue] = useState(30);
  const [temperatureValue, setTemperatureValue] = useState(22);
  const [springValue, setSpringValue] = useState(0.5);
  const [rangeValue, setRangeValue] = useState<number[]>([20, 80]);
  const [disabled, setDisabled] = useState(false);
  const [showDebug, setShowDebug] = useState(false);
  const [selectedThumb, setSelectedThumb] =
    useState<keyof typeof THUMB_IMAGES>("default");
  const [isSliding, setIsSliding] = useState(false);
  const [slidingValue, setSlidingValue] = useState(0);
  const [snapValue, setSnapValue] = useState(25);

  // Callback handlers
  const handleBasicValueChange = useCallback((value: number) => {
    setBasicValue(Math.round(value));
  }, []);

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

  const handleBrightnessChange = useCallback((value: number) => {
    setBrightnessValue(Math.round(value));
  }, []);

  const handleTemperatureChange = useCallback((value: number) => {
    setTemperatureValue(Number(value.toFixed(1)));
  }, []);

  const handleRangeChange = useCallback((value: number | number[]) => {
    setRangeValue(value as number[]);
  }, []);

  const resetToDefault = useCallback(() => {
    setBasicValue(50);
    setVolumeValue(75);
    setBrightnessValue(30);
    setTemperatureValue(22);
    setRangeValue([20, 80]);
    setSnapValue(25);
    Alert.alert("Reset", "All sliders have been reset to default values");
  }, []);

  const getVolumeIcon = (volume: number): string => {
    if (volume === 0) return "🔇";
    if (volume < 30) return "🔈";
    if (volume < 70) return "🔉";
    return "🔊";
  };

  const getTemperatureColor = (temp: number): string => {
    if (temp < 18) return "#4A90E2"; // Cold - Blue
    if (temp < 24) return "#50E3C2"; // Comfortable - Teal
    if (temp < 28) return "#F5A623"; // Warm - Orange
    return "#FF6B6B"; // Hot - Red
  };

  const getBrightnessIcon = (brightness: number): string => {
    if (brightness === 0) return "🌑";
    if (brightness < 30) return "🌒";
    if (brightness < 70) return "🌓";
    return "☀️";
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🎚️ Slider Component Demo</Text>
        <Text style={styles.subtitle}>
          Interactive examples with the optimized slider
        </Text>
      </View>

      {/* Control Panel */}
      <View style={styles.controlPanel}>
        <TouchableOpacity style={styles.resetButton} onPress={resetToDefault}>
          <Text style={styles.resetButtonText}>Reset All Sliders</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Disable All Sliders</Text>
          <Switch value={disabled} onValueChange={setDisabled} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Debug Touch Area</Text>
          <Switch value={showDebug} onValueChange={setShowDebug} />
        </View>
      </View>

      {/* Example 1: Basic Slider */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Basic Slider</Text>
        <Text style={styles.sectionDescription}>
          Simple slider with step value of 1
        </Text>

        <View style={styles.sliderContainer}>
          <Text style={styles.label}>Value: {basicValue}</Text>
          <Slider
            value={basicValue}
            onValueChange={(val) => handleBasicValueChange(val as number)}
            minimumValue={0}
            maximumValue={15}
            //step={1}
            // minimumTrackTintColor="#4A90E2"
            // maximumTrackTintColor="#E0E0E0"
            // thumbTintColor="#FFFFFF"
            disabled={disabled}
            style={styles.slider}
          />
          <View style={styles.valueMarkers}>
            <Text style={styles.markerText}>0</Text>
            <Text style={styles.markerText}>25</Text>
            <Text style={styles.markerText}>50</Text>
            <Text style={styles.markerText}>75</Text>
            <Text style={styles.markerText}>100</Text>
          </View>
        </View>
      </View>

      {/* Example 2: Volume Control with Custom Styling */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Volume Control</Text>
        <Text style={styles.sectionDescription}>
          Custom styling with volume icon and haptic feedback simulation
        </Text>

        <View style={styles.sliderContainer}>
          <View style={styles.volumeHeader}>
            <Text style={styles.volumeIcon}>{getVolumeIcon(volumeValue)}</Text>
            <Text style={[styles.value, isSliding && styles.slidingValue]}>
              Volume: {volumeValue}%
            </Text>
            {isSliding && <Text style={styles.slidingIndicator}>🎤</Text>}
          </View>

          <Slider
            value={volumeValue}
            onValueChange={(val) => handleVolumeChange(val as number)}
            onSlidingStart={(val) => handleVolumeSlidingStart(val as number)}
            onSlidingComplete={(val) =>
              handleVolumeSlidingComplete(val as number)
            }
            minimumValue={0}
            maximumValue={150}
            step={5}
            minimumTrackTintColor="#FF6B6B"
            maximumTrackTintColor="#E0E0E0"
            //thumbTintColor="#FF6B6B"
            disabled={disabled}
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

      {/* Example 3: Temperature Control with Custom Thumb Image */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Temperature Control</Text>
        <Text style={styles.sectionDescription}>
          Custom thumb image with color-coded track
        </Text>

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
            step={0.5}
            hideSteps
            minimumTrackTintColor={getTemperatureColor(temperatureValue)}
            maximumTrackTintColor="#E0E0E0"
            thumbTintColor="#FFFFFF"
            disabled={disabled}
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
      </View>

      {/* Example 4: Brightness Control with Step Values */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Brightness Control</Text>
        <Text style={styles.sectionDescription}>
          Using larger step values (10) for quick adjustments
        </Text>

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
            step={10}
            minimumTrackTintColor="#F5A623"
            maximumTrackTintColor="#E0E0E0"
            thumbTintColor="#F5A623"
            disabled={disabled}
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
      </View>

      {/* Example 5: Disabled State Demo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Disabled State Demo</Text>
        <Text style={styles.sectionDescription}>
          Slider that can be toggled between enabled/disabled states
        </Text>

        <View style={styles.sliderContainer}>
          <Text style={styles.label}>
            Status: {disabled ? "🔒 Disabled" : "🔓 Enabled"}
          </Text>
          <Slider
            value={50}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#9B59B6"
            maximumTrackTintColor="#E0E0E0"
            thumbTintColor="#9B59B6"
            disabled={disabled}
            style={styles.slider}
          />
          <Text style={styles.disabledHint}>
            {disabled
              ? "Slider is currently disabled"
              : "Try sliding to change value"}
          </Text>
        </View>
      </View>

      {/* Example 8: Spring Animation with Custom Parameters */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>8. Custom Spring Animation</Text>
        <Text style={styles.sectionDescription}>
          Using physics-based parameters (stiffness: 150, damping: 5)
        </Text>

        <View style={styles.sliderContainer}>
          <Text style={styles.label}>Value: {springValue.toFixed(2)}</Text>
          <Slider
            value={springValue}
            onValueChange={(val) => setSpringValue(val as number)}
            minimumValue={0}
            maximumValue={1}
            animateTransitions={true}
            animationType="spring"
            animationConfig={{
              stiffness: 150,
              damping: 5,
              mass: 1,
              useNativeDriver: true,
            }}
            minimumTrackTintColor="#5856D6"
            thumbTintColor="#5856D6"
            disabled={disabled}
          />
          <TouchableOpacity
            onPress={() => setSpringValue(Math.random())}
            style={styles.randomButton}
          >
            <Text style={styles.randomButtonText}>Jump to Random Value</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Example 9: Range Selector */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>9. Range Selector</Text>
        <Text style={styles.sectionDescription}>
          Dual-handle slider for selecting a range of values
        </Text>

        <View style={styles.sliderContainer}>
          <Text style={styles.label}>
            Selected Range: {rangeValue[0]} - {rangeValue[1]}
          </Text>
          <Slider
            range
            value={rangeValue}
            onValueChange={handleRangeChange}
            minimumValue={0}
            maximumValue={100}
            step={20}
            minimumTrackTintColor="#4A90E2"
            disabled={disabled}
          />
        </View>
      </View>

      {/* Example 10: Snap to Points */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>10. Snap to Points</Text>
        <Text style={styles.sectionDescription}>
          Slider that snaps to specific predefined values [0, 10, 25, 50, 75,
          90, 100]
        </Text>

        <View style={styles.sliderContainer}>
          <Text style={styles.label}>Snapped Value: {snapValue}</Text>
          <Slider
            value={snapValue}
            onValueChange={(val) => setSnapValue(val as number)}
            minimumValue={0}
            maximumValue={100}
            snapPoints={[0, 10, 25, 50, 75, 90, 100]}
            minimumTrackTintColor="#2ECC71"
            disabled={disabled}
          />
        </View>
      </View>

      {/* Live Value Display */}
      <View style={styles.liveDisplay}>
        <Text style={styles.liveDisplayTitle}>📊 Live Values</Text>
        <View style={styles.liveDisplayGrid}>
          <View style={styles.liveDisplayItem}>
            <Text style={styles.liveDisplayLabel}>Basic:</Text>
            <Text style={styles.liveDisplayValue}>{basicValue}</Text>
          </View>
          <View style={styles.liveDisplayItem}>
            <Text style={styles.liveDisplayLabel}>Volume:</Text>
            <Text style={styles.liveDisplayValue}>{volumeValue}%</Text>
          </View>
          <View style={styles.liveDisplayItem}>
            <Text style={styles.liveDisplayLabel}>Temp:</Text>
            <Text style={styles.liveDisplayValue}>{temperatureValue}°C</Text>
          </View>
          <View style={styles.liveDisplayItem}>
            <Text style={styles.liveDisplayLabel}>Bright:</Text>
            <Text style={styles.liveDisplayValue}>{brightnessValue}%</Text>
          </View>
          <View style={styles.liveDisplayItem}>
            <Text style={styles.liveDisplayLabel}>Range:</Text>
            <Text style={styles.liveDisplayValue}>
              {rangeValue[0]}-{rangeValue[1]}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Component with custom thumb images
const CustomThumbSlider = () => {
  const [value, setValue] = useState(50);
  const [thumbType, setThumbType] =
    useState<keyof typeof THUMB_IMAGES>("default");

  return (
    <View style={styles.customThumbContainer}>
      <Text style={styles.sectionTitle}>6. Custom Thumb Images</Text>
      <Text style={styles.sectionDescription}>
        Different thumb styles for different use cases
      </Text>

      <View style={styles.thumbSelector}>
        {Object.keys(THUMB_IMAGES).map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.thumbOption,
              thumbType === type && styles.thumbOptionActive,
            ]}
            onPress={() => setThumbType(type as keyof typeof THUMB_IMAGES)}
          >
            <Text style={styles.thumbOptionText}>
              {type === "default" ? "⚪" : type === "heart" ? "❤️" : "⭐"}
            </Text>
            <Text style={styles.thumbOptionLabel}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Slider
        value={value}
        onValueChange={(val) => setValue(val as number)}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#E74C3C"
        maximumTrackTintColor="#E0E0E0"
        thumbImage={THUMB_IMAGES[thumbType]}
        style={styles.slider}
      />

      <Text style={styles.value}>Selected Value: {Math.round(value)}</Text>
    </View>
  );
};

// Form integration example
const FormSlider = () => {
  const [age, setAge] = useState(25);
  const [income, setIncome] = useState(50000);
  const [creditScore, setCreditScore] = useState(650);

  const handleSubmit = () => {
    Alert.alert(
      "Form Submitted",
      `Age: ${age}\nIncome: $${income.toLocaleString()}\nCredit Score: ${creditScore}`,
    );
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>7. Form Integration</Text>
      <Text style={styles.sectionDescription}>
        Using sliders in forms for range selections
      </Text>

      <View style={styles.formField}>
        <Text style={styles.formLabel}>Age: {age} years</Text>
        <Slider
          value={age}
          onValueChange={(val) => setAge(val as number)}
          minimumValue={18}
          maximumValue={60}
          step={2}
          minimumTrackTintColor="#3498DB"
        />
      </View>

      <View style={styles.formField}>
        <Text style={styles.formLabel}>
          Annual Income: ${income.toLocaleString()}
        </Text>
        <Slider
          value={income}
          onValueChange={(val) => setIncome(val as number)}
          minimumValue={0}
          maximumValue={200000}
          step={5000}
          minimumTrackTintColor="#2ECC71"
        />
      </View>

      <View style={styles.formField}>
        <Text style={styles.formLabel}>Credit Score: {creditScore}</Text>
        <Slider
          value={creditScore}
          onValueChange={(val) => setCreditScore(val as number)}
          minimumValue={300}
          maximumValue={850}
          step={10}
          hideSteps
          minimumTrackTintColor="#9B59B6"
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Form</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main export combining all examples
export default function App() {
  return (
    <ScrollView style={styles.appContainer}>
      <SliderDemoApp />
      <CustomThumbSlider />
      <FormSlider />
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: "#4A90E2",
    padding: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    opacity: 0.9,
  },
  controlPanel: {
    backgroundColor: "#FFFFFF",
    margin: 15,
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resetButton: {
    backgroundColor: "#FF6B6B",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  resetButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: "#333",
  },
  section: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  sliderContainer: {
    marginVertical: 10,
  },
  slider: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
    textAlign: "center",
  },
  valueMarkers: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 5,
  },
  markerText: {
    fontSize: 12,
    color: "#999",
  },
  volumeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  volumeIcon: {
    fontSize: 24,
  },
  slidingValue: {
    color: "#FF6B6B",
    transform: [{ scale: 1.1 }],
  },
  slidingIndicator: {
    fontSize: 16,
  },
  volumeTrack: {
    height: 8,
  },
  volumeThumb: {
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  volumeLevels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  levelText: {
    fontSize: 12,
    color: "#999",
  },
  temperatureHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  temperatureIcon: {
    fontSize: 24,
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
    fontSize: 12,
    color: "#999",
  },
  brightnessHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  brightnessIcon: {
    fontSize: 24,
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
  },
  disabledHint: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    marginTop: 10,
  },
  liveDisplay: {
    backgroundColor: "#4A90E2",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
  },
  liveDisplayTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  liveDisplayGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  liveDisplayItem: {
    alignItems: "center",
  },
  liveDisplayLabel: {
    fontSize: 12,
    color: "#FFFFFF",
    opacity: 0.8,
  },
  liveDisplayValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 5,
  },
  customThumbContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
  },
  thumbSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  thumbOption: {
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#F5F7FA",
  },
  thumbOptionActive: {
    backgroundColor: "#4A90E2",
  },
  thumbOptionText: {
    fontSize: 24,
  },
  thumbOptionLabel: {
    fontSize: 12,
    marginTop: 5,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
  },
  formField: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#2ECC71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  randomButton: {
    marginTop: 10,
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    alignItems: "center",
  },
  randomButtonText: {
    color: "#5856D6",
    fontWeight: "600",
  },
});
