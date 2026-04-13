import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import { ThemeSettingsScreen } from "@flexnative/screens";

export default function Index() {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        source={{ uri: '/img/app-frame.png' }}
        style={styles.frame}
        resizeMode="contain"
      >
        <View style={styles.screenContainer}>
          <ThemeSettingsScreen />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  frame: {
    width: 320,
    height: 640,
    paddingTop: 45,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 20,
  },
});
