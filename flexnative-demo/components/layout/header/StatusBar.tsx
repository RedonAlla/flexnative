/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-13 22:37:53
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-14 00:39:20
 * @ Description: The provided code consists of a TypeScript interface and a React functional component.
 */

import React from "react";
import { ColorSchemeName } from "react-native";
import { StatusBar } from "expo-status-bar";

import { statusBarStyle } from "@/utilities/theme.utilities";


/**
 * Define an interface named StatusBarProps which is used to specify the type of props expected by a component.
 */
interface StatusBarProps {
  /**
   * A property named 'scheme' of type 'ColorSchemeName'.
   * This property indicates the color scheme to be applied, such as light or dark mode.
   */
  scheme: ColorSchemeName;
}

/**
 * This component is likely used to manage the appearance or behavior of the application's status bar.
 * 
 * @returns JSX element, which is the standard way of defining the UI in React components.
 */
export default function({ scheme }: StatusBarProps) {
  return (
    <StatusBar style={statusBarStyle(scheme)} backgroundColor={'transparent'} animated={true} />
  );
}