import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function PreferencesScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [highQuality, setHighQuality] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.title}>Preferences</Text>
        <Text style={styles.save}>Save</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Appearance */}
        <Text style={styles.sectionTitle}>Appearance</Text>

        <View style={styles.appearanceRow}>
          {["Light", "Dark", "Auto"].map((mode) => (
            <TouchableOpacity
              key={mode}
              style={[styles.modeCard, mode === "Dark" && styles.modeSelected]}
            >
              <View style={styles.modePreview} />
              <Text style={styles.modeText}>{mode}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Accent Color */}
        <Text style={styles.sectionTitle}>Accent color</Text>
        <View style={styles.colorRow}>
          {["#4C6EF5", "#F59F00", "#2F9E44", "#845EF7", "#E64980"].map(
            (color) => (
              <View
                key={color}
                style={[styles.colorDot, { backgroundColor: color }]}
              />
            ),
          )}
        </View>

        {/* Toggles */}
        <SettingRow
          label="Reduce motion"
          value={reduceMotion}
          onChange={setReduceMotion}
        />
        <SettingRow label="Auto play" value={autoPlay} onChange={setAutoPlay} />
        <SettingRow
          label="High quality photo"
          value={highQuality}
          onChange={setHighQuality}
        />
      </View>
    </View>
  );
}

function SettingRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <View style={styles.settingRow}>
      <Text style={styles.settingText}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#3a3a3a", true: "#5c7cfa" }}
        thumbColor="#f1f3f5"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  back: {
    color: "#fff",
    fontSize: 18,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  save: {
    color: "#5c7cfa",
    fontSize: 16,
  },

  card: {
    backgroundColor: "#2c2c2e",
    borderRadius: 20,
    padding: 16,
  },

  sectionTitle: {
    color: "#b0b0b0",
    fontSize: 14,
    marginVertical: 12,
  },

  appearanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  modeCard: {
    width: "30%",
    backgroundColor: "#3a3a3c",
    borderRadius: 14,
    padding: 10,
    alignItems: "center",
  },

  modeSelected: {
    borderWidth: 1,
    borderColor: "#5c7cfa",
  },

  modePreview: {
    width: 40,
    height: 24,
    backgroundColor: "#1c1c1e",
    borderRadius: 6,
    marginBottom: 6,
  },

  modeText: {
    color: "#fff",
    fontSize: 12,
  },

  colorRow: {
    flexDirection: "row",
    marginVertical: 12,
  },

  colorDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 10,
  },

  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#3a3a3c",
  },

  settingText: {
    color: "#fff",
    fontSize: 15,
  },
});
