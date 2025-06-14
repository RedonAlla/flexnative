/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-26 22:12:10
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-06-14 23:33:34
 * @ Description: This file defines the styles for the CheckBoxList component.
 */

import { StyleSheet } from "react-native";

/**
 * Generates base styles for the CheckBoxList component.
 * @param {number} gap - The gap to be applied between items when direction is 'row'.
 * @returns {StyleSheet.NamedStyles<any>} An object containing the generated styles.
 */
export default function baseStyes(gap: number) {
  return StyleSheet.create({
    column: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    row: {
      gap,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });
}