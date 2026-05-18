import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  //Slider,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SettingsScreen = () => {
  // Theme states
  const [selectedTheme, setSelectedTheme] = useState("Auto");
  const [accentColor, setAccentColor] = useState("#007AFF");
  const [textSize, setTextSize] = useState(16);
  const [brightness, setBrightness] = useState(80);

  // Toggle states
  const [reduceMotion, setReduceMotion] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [highQualityPhoto, setHighQualityPhoto] = useState(true);

  const themeOptions = ["Light", "Dark", "Auto"];
  const accentColors = [
    { name: "Blue", value: "#007AFF" },
    { name: "Purple", value: "#5856D6" },
    { name: "Green", value: "#34C759" },
    { name: "Orange", value: "#FF9500" },
    { name: "Pink", value: "#FF2D55" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Preferences</Text>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>

          {/* Theme Options */}
          <View style={styles.themeContainer}>
            {themeOptions.map((theme) => (
              <TouchableOpacity
                key={theme}
                style={[
                  styles.themeOption,
                  selectedTheme === theme && styles.themeOptionSelected,
                ]}
                onPress={() => setSelectedTheme(theme)}
              >
                <Text
                  style={[
                    styles.themeText,
                    selectedTheme === theme && styles.themeTextSelected,
                  ]}
                >
                  {theme}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Accent Color */}
          <View style={styles.settingContainer}>
            <Text style={styles.settingLabel}>Accent color</Text>
            <View style={styles.colorContainer}>
              {accentColors.map((color) => (
                <TouchableOpacity
                  key={color.name}
                  style={[
                    styles.colorOption,
                    { backgroundColor: color.value },
                    accentColor === color.value && styles.colorOptionSelected,
                  ]}
                  onPress={() => setAccentColor(color.value)}
                >
                  {accentColor === color.value && (
                    <Text style={styles.colorCheck}>✓</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Text Size */}
          <View style={styles.settingContainer}>
            <Text style={styles.settingLabel}>Text size</Text>
            <View style={styles.textSizeContainer}>
              <Text style={[styles.textSizePreview, { fontSize: 14 }]}>A</Text>
              {/* <Slider
                style={styles.slider}
                minimumValue={12}
                maximumValue={24}
                step={1}
                value={textSize}
                onValueChange={setTextSize}
                minimumTrackTintColor={accentColor}
                maximumTrackTintColor="#e5e5ea"
                thumbTintColor={accentColor}
              /> */}
              <Text style={[styles.textSizePreview, { fontSize: 20 }]}>A</Text>
            </View>
            <Text style={styles.valueText}>{textSize}px</Text>
          </View>

          {/* Brightness */}
          <View style={styles.settingContainer}>
            <Text style={styles.settingLabel}>Brightness</Text>
            <View style={styles.brightnessContainer}>
              {/* <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={brightness}
                onValueChange={setBrightness}
                minimumTrackTintColor={accentColor}
                maximumTrackTintColor="#e5e5ea"
                thumbTintColor={accentColor}
              /> */}
            </View>
            <Text style={styles.valueText}>{brightness}%</Text>
          </View>
        </View>

        {/* Toggles Section */}
        <View style={styles.section}>
          {/* Reduce Motion */}
          <View style={styles.toggleContainer}>
            <View style={styles.toggleTextContainer}>
              <Text style={styles.toggleLabel}>Reduce motion</Text>
            </View>
            <Switch
              value={reduceMotion}
              onValueChange={setReduceMotion}
              trackColor={{ false: "#e5e5ea", true: accentColor }}
              thumbColor="#ffffff"
            />
          </View>

          {/* Auto Play */}
          <View style={styles.toggleContainer}>
            <View style={styles.toggleTextContainer}>
              <Text style={styles.toggleLabel}>Auto play</Text>
            </View>
            <Switch
              value={autoPlay}
              onValueChange={setAutoPlay}
              trackColor={{ false: "#e5e5ea", true: accentColor }}
              thumbColor="#ffffff"
            />
          </View>

          {/* High Quality Photo */}
          <View style={styles.toggleContainer}>
            <View style={styles.toggleTextContainer}>
              <Text style={styles.toggleLabel}>High quality photo</Text>
            </View>
            <Switch
              value={highQualityPhoto}
              onValueChange={setHighQualityPhoto}
              trackColor={{ false: "#e5e5ea", true: accentColor }}
              thumbColor="#ffffff"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5ea",
    backgroundColor: "#ffffff",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  saveButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  section: {
    backgroundColor: "#ffffff",
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e5e5ea",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 16,
  },
  themeContainer: {
    flexDirection: "row",
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: "#f2f2f7",
    padding: 4,
  },
  themeOption: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 6,
  },
  themeOptionSelected: {
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  themeText: {
    fontSize: 16,
    color: "#8e8e93",
  },
  themeTextSelected: {
    color: "#000000",
    fontWeight: "600",
  },
  settingContainer: {
    marginBottom: 24,
  },
  settingLabel: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 12,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorOption: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "transparent",
  },
  colorOptionSelected: {
    borderColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  colorCheck: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textSizeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  textSizePreview: {
    fontWeight: "bold",
    color: "#000000",
  },
  slider: {
    flex: 1,
    height: 40,
  },
  brightnessContainer: {
    marginTop: 8,
  },
  valueText: {
    fontSize: 14,
    color: "#8e8e93",
    textAlign: "center",
    marginTop: 8,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f7",
  },
  toggleTextContainer: {
    flex: 1,
  },
  toggleLabel: {
    fontSize: 16,
    color: "#000000",
  },
});

export default SettingsScreen;
