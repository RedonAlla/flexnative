/**
 * @ Author: Redon Alla
 * @ Create Time: 2026-05-16 22:52:17
 * @ Modified by: Redon Alla
 * @ Modified time: 2026-05-16 22:53:32
 * @ Description: Define constants for applying specific styling attributes throughout the `AppHome´ screen.
 */

import { StyleSheet } from 'react-native';

/**
 * Define a constant `SKIN_COLOR` to represent a specific RGB color value.
 * This constant can be used throughout the application wherever this skin tone color is needed.
 */
export const SKIN_COLOR = 'rgb(249, 180, 153)';

/**
 * Defines a constant for setting the width of an icon to 60% relative to its containing element's width.
 * This allows for responsive sizing based on the parent's dimensions.
 */
export const ICON_WIDTH = '60%';

/**
 * Defines a constant for setting the height of an icon to 100% relative to its containing element's height,
 * ensuring the icon fully occupies the vertical space available.
 */
export const ICON_HEIGHT = '100%';

/**
 * Defining a styles using StyleSheet.create for icons used in `AppHome` screen.
 */
export const ICON_STYLES = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: '-3%',
    bottom: '-3%',
    zIndex: 10
  }
});