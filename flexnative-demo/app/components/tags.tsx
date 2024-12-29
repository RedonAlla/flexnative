/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-19 09:15:00
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-26 19:22:28
 * @ Description: Root for Tags component demo.
 */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { HEADER_HEIGHT, MAX_WIDTH, PADDING_HORIZONTAL } from "@/constants/layout";
import TagsDemoScreen from "@/screens/components/Tags";


export default class extends React.PureComponent {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <TagsDemoScreen />
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