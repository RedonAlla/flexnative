/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-15 21:41:59
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-19 22:07:04
 * @ Description: Route for text boxes demo screen.
 */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { BOTTOM_TAB_HEIGHT, HEADER_HEIGHT, MAX_WIDTH, PADDING_HORIZONTAL } from "@/constants/layout";
import TextBoxDemoScreen from "@/screens/components/TextBox/default";


export default class extends React.PureComponent {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <TextBoxDemoScreen />
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
    paddingBottom: BOTTOM_TAB_HEIGHT,
    paddingHorizontal: PADDING_HORIZONTAL,
    maxWidth: MAX_WIDTH,
  },
});