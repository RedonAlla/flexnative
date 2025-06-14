/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-10 22:04:40
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-11 18:38:01
 * @ Description: This file defines the styles for the `NumericTextBox` component's actions (increment/decrement buttons).
 */

import { StyleSheet } from "react-native";


/**
 * Creates a stylesheet for the action button wrapper.
 * 
 * @param size `size`:  Determines the width and height of the button.
 * @param radius `radius`:  Determines the border radius of the button.
 * @returns Returns a `StyleSheet` object with a `wrapper` style.
 */
export function actionStyles(size: number, radius: number) {
  return StyleSheet.create({
    wrapper: {
      width: size,
      height: size,
      overflow: "hidden",
      borderRadius: radius / 2,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    }
  });
};

/**
 * A `StyleSheet` object containing base styles for the action buttons.
 *  - `action`:  Styles for the button itself (takes up full space).
 *  - `icon`:  Styles for the icon within the button (centered, transparent background).
 */
export const baseActionStyles = StyleSheet.create({
  action: {
    flex: 1,
    width: '100%'
  },
  icon: {
    flex: 1,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'transparent'
  }
});