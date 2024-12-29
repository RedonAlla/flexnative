/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-15 21:41:59
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-29 01:38:54
 * @ Description: Route for Avatar of type icon demo screen.
 */

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AvatarIconDemoScreen from "@/screens/components/Avatars/icons";
import {
  BOTTOM_TAB_HEIGHT,
  HEADER_HEIGHT,
  MAX_WIDTH,
  PADDING_HORIZONTAL
} from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <AvatarIconDemoScreen />
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