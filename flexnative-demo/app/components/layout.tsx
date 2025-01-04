/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-19 09:15:00
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-03 21:52:44
 * @ Description: Root for Layout component demo.
 */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { HEADER_HEIGHT, MAX_WIDTH, PADDING_HORIZONTAL } from "@/constants/layout";
import LayoutDemoScreen from "@/screens/components/LayoutDemo";


export default class extends React.PureComponent {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <LayoutDemoScreen />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginHorizontal: "auto",
    paddingTop: HEADER_HEIGHT,
    backgroundColor: 'transparent',
    paddingBottom: PADDING_HORIZONTAL,
    paddingHorizontal: PADDING_HORIZONTAL,
    maxWidth: MAX_WIDTH,
  },
});