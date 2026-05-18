import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Mockup images for Appearance section (replace with actual images)
const lightModeImg = {
  uri: "https://via.placeholder.com/100x60/333333/FFFFFF?text=Light",
};
const darkModeImg = {
  uri: "https://via.placeholder.com/100x60/333333/FFFFFF?text=Dark",
};
const autoModeImg = {
  uri: "https://via.placeholder.com/100x60/333333/FFFFFF?text=Auto",
};

const PreferencesScreen = () => {
  const [appearance, setAppearance] = useState("Dark");
  const [accentColor, setAccentColor] = useState("#4D79FF");
  const [textSize, setTextSize] = useState(0.5);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [highQualityPhoto, setHighQualityPhoto] = useState(true);

  const accentColors = ["#4D79FF", "#FFC107", "#4CD964", "#9C27B0", "#FF4081"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <Ionicons name="arrow-back" size={24} color="#fff" /> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Preferences</Text>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            {/* <MaterialCommunityIcons name="theme-light-dark" size={20} color="#8E8E93" /> */}
            <Text style={styles.sectionTitle}>Appearance</Text>
          </View>
          <View style={styles.appearanceOptions}>
            {["Light", "Dark", "Auto"].map((mode, index) => (
              <TouchableOpacity
                key={mode}
                style={styles.appearanceOption}
                onPress={() => setAppearance(mode)}
              >
                <View
                  style={[
                    styles.appearancePreview,
                    appearance === mode && styles.selectedAppearance,
                    appearance === mode && { borderColor: accentColor },
                  ]}
                >
                  <Image
                    source={
                      index === 0
                        ? lightModeImg
                        : index === 1
                          ? darkModeImg
                          : autoModeImg
                    }
                    style={styles.appearanceImage}
                  />
                </View>
                <Text style={styles.appearanceLabel}>{mode}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            {/* <Ionicons name="color-palette-outline" size={20} color="#8E8E93" /> */}
            <Text style={styles.sectionTitle}>Accent color</Text>
          </View>
          <View style={styles.colorOptions}>
            {accentColors.map((color) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorCircle,
                  { backgroundColor: color },
                  accentColor === color && styles.selectedColor,
                ]}
                onPress={() => setAccentColor(color)}
              >
                {accentColor === color && (
                  <View style={styles.selectedColorInner} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            {/* <MaterialCommunityIcons name="format-size" size={20} color="#8E8E93" /> */}
            <Text style={styles.sectionTitle}>Text size</Text>
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>A</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              value={textSize}
              onValueChange={setTextSize}
              minimumTrackTintColor={accentColor}
              maximumTrackTintColor="#333333"
              thumbTintColor={accentColor}
            />
            <Text style={styles.sliderLabel}>A</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            {/* <Ionicons name="sunny-outline" size={20} color="#8E8E93" /> */}
            <Text style={styles.sectionTitle}>Brightness</Text>
          </View>
          <View style={styles.brightnessContainer}>
            <View style={styles.brightnessBar}>
              <View
                style={[
                  styles.brightnessProgress,
                  { width: "80%", backgroundColor: accentColor },
                ]}
              />
            </View>
            <Text style={styles.brightnessValue}>80%</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.toggleRow}>
            <View style={styles.toggleLabelContainer}>
              {/* <MaterialCommunityIcons name="motion" size={20} color="#8E8E93" /> */}
              <Text style={styles.toggleLabel}>Reduce motion</Text>
            </View>
            <Switch
              value={reduceMotion}
              onValueChange={setReduceMotion}
              trackColor={{ false: "#333333", true: accentColor }}
              thumbColor={reduceMotion ? "#fff" : "#f4f3f4"}
            />
          </View>
          <View style={styles.toggleRow}>
            <View style={styles.toggleLabelContainer}>
              {/* <Ionicons name="play-outline" size={20} color="#8E8E93" /> */}
              <Text style={styles.toggleLabel}>Auto play</Text>
            </View>
            <Switch
              value={autoPlay}
              onValueChange={setAutoPlay}
              trackColor={{ false: "#333333", true: accentColor }}
              thumbColor={autoPlay ? "#fff" : "#f4f3f4"}
            />
          </View>
          <View style={styles.toggleRow}>
            <View style={styles.toggleLabelContainer}>
              {/* <Ionicons name="image-outline" size={20} color="#8E8E93" /> */}
              <Text style={styles.toggleLabel}>High quality photo</Text>
            </View>
            <Switch
              value={highQualityPhoto}
              onValueChange={setHighQualityPhoto}
              trackColor={{ false: "#333333", true: accentColor }}
              thumbColor={highQualityPhoto ? "#fff" : "#f4f3f4"}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          {/* <FontAwesome5 name="home" size={20} color="#8E8E93" /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <View>
            {/* <FontAwesome5 name="heart" size={20} color="#8E8E93" /> */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>12</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          {/* <FontAwesome5 name="list-alt" size={20} color="#8E8E93" /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          {/* <FontAwesome5 name="bookmark" size={20} color="#8E8E93" /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          {/* <Feather name="user" size={20} color="#8E8E93" /> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  saveButton: {
    backgroundColor: "#333333",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#8E8E93",
    marginLeft: 8,
  },
  appearanceOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appearanceOption: {
    alignItems: "center",
  },
  appearancePreview: {
    width: 100,
    height: 60,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
    marginBottom: 8,
  },
  selectedAppearance: {
    // borderColor is set dynamically
  },
  appearanceImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.6,
  },
  appearanceLabel: {
    color: "#8E8E93",
  },
  colorOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  colorCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: "#fff",
  },
  selectedColorInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sliderLabel: {
    fontSize: 16,
    color: "#8E8E93",
  },
  slider: {
    flex: 1,
    marginHorizontal: 12,
  },
  brightnessContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 8,
    padding: 4,
  },
  brightnessBar: {
    flex: 1,
    height: 32,
    backgroundColor: "#333333",
    borderRadius: 6,
    overflow: "hidden",
  },
  brightnessProgress: {
    height: "100%",
    borderRadius: 6,
  },
  brightnessValue: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 12,
    marginRight: 8,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  toggleLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleLabel: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 12,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white", //"#1E1E1E",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#333333",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: "#FF3B30",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
    minWidth: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
});

export default PreferencesScreen;
