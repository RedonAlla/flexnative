/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-14 22:55:44
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-15 20:13:40
 * @ Description: This TypeScript code defines types and interfaces related to color management in an application. These types and interfaces are intended to ensure strong type-checking within a TypeScript React application that's capable of dynamic color theming, improving code reliability and maintainability.
 */

import { ColorValue } from "react-native";
import { IPrimaryColors } from "@/constants/colors";
import BottomSheet from "@flexnative/bottom-sheet";

/**
 * Represents the properties for primary colors.
 */
export type PrimaryColorsProps = {
  /**
   * The key representing a primary color.
   * This key is constrained by the keys available in the IPrimaryColors interface,
   * ensuring that only valid primary colors are used.
   */
  key: keyof IPrimaryColors;

  /**
   * The value of the primary color.
   * It stores the actual color value, typically in string format, 
   * such as hex code or color name.
   */
  value: string;
}

/**
 * Represents the properties for a color item.
 * Defines the structure for color item properties used in the application.
 */
export interface ColorItemProps {
   /**
   * Indicates whether the color item is selected.
   */
  isSelected: boolean;

  /**
   * The primary color properties of the item.
   * Represents an object containing a key and value for primary colors
   */
  item: PrimaryColorsProps;


  /**
   * The primary color properties of the item.
   * Represents additional visual overlay for the color, defined by ColorValue.
   */
  overlay: ColorValue;


 /**
   * Callback function to handle the selection of a theme.
   * Callback function executed when a color item is selected.
   * @param theme - The key representing the selected primary color,
   * identified by a key from IPrimaryColors and returns void
   */
  onSelect: (theme: keyof IPrimaryColors) => void;
}

/**
 * Interface representing the properties for a dialog component.
 */
export interface DialogProps {
  /**
   * The current theme of the dialog.
   * It is represented as a key from the IPrimaryColors interface,
   * indicating which primary color theme is currently applied.
   */
  currentTheme: keyof IPrimaryColors;

  /**
   * The current theme of the dialog.
   * It is represented as a key from the IPrimaryColors interface,
   * indicating which primary color theme is currently applied.
   */
  onChangeColorTheme?: () => void;

  /**
   * Reference to a BottomSheet component.
   * It is used to access and control the BottomSheet instance, enabling
   * dynamic interaction such as opening or closing the sheet.
   */
  bottomSheetRef: React.RefObject<BottomSheet>
}