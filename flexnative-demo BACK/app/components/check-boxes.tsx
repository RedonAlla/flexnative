/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-23 23:45:45
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-26 19:22:20
 * @ Description: Root for Check Box component demo.
 */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { HEADER_HEIGHT, MAX_WIDTH, PADDING_HORIZONTAL } from "@/constants/layout";
import CheckBoxesDemoScreen from "@/screens/components/CheckBox";


/**
 * A React PureComponent that renders a ScrollView containing the CheckBoxesDemoScreen component.
 * 
 * @component
 * @extends React.PureComponent
 * 
 * @returns {JSX.Element} The rendered ScrollView with CheckBoxesDemoScreen.
 */
export default class extends React.PureComponent {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <CheckBoxesDemoScreen />
      </ScrollView>
    );
  }
}


/**
 * Styles for the CheckBoxes component.
 * 
 * @property {object} content - Style for the content container.
 * @property {string} content.width - Sets the width to 100%.
 * @property {string} content.marginHorizontal - Centers the content horizontally.
 * @property {number} content.paddingTop - Sets the top padding to the height of the header.
 * @property {string} content.backgroundColor - Sets the background color to transparent.
 * @property {number} content.paddingBottom - Sets the bottom padding to the height of the bottom tab.
 * @property {number} content.paddingHorizontal - Sets the horizontal padding.
 * @property {number} content.maxWidth - Sets the maximum width of the content.
 */
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