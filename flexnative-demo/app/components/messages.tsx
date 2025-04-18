/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-19 09:15:00
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-29 21:26:11
 * @ Description: Root for Messages component demo.
 */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { HEADER_HEIGHT, MAX_WIDTH, PADDING_HORIZONTAL } from "@/constants/layout";
import MessagesDemoScreen from "@/screens/components/Messages";


export default class extends React.PureComponent {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <MessagesDemoScreen />
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