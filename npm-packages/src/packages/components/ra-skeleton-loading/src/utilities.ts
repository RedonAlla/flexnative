/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-04-06 18:07:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-06 18:12:01
 * @ Description: Utilities methods for SkeletonLoader component.
 */

import { ColorValue } from "react-native";

/**
 * Generates a unique identifier string.
 *
 * @returns {string} A unique identifier string.
 * @example
 * const uniqueId = uid(); // Returns a string like "abcdef"
 */
export const uid = (): string => Math.random().toString(36).substring(6);

/**
 * Calculates the animation duration in milliseconds based on the given speed.
 *
 * @param {number} speed - The speed factor to determine the duration.
 * @returns {number} The animation duration in milliseconds.
 * @example
 * const duration = animationDuration(1.5); // Returns 1500 (1.5 seconds)
 */
export const animationDuration = (speed: number): number => speed * 1000;

/**
 * Calculates the animation delay based on the given duration and interval.
 *
 * @param {number} duration - The duration of the animation.
 * @param {number} interval - The interval between animations.
 * @returns {number} - The calculated animation delay.
 * @example
 * const delay = animationDelay(1000, 0.5); // Returns 500 (0.5 seconds)
 */
export const animationDelay = (duration: number, interval: number): number => interval * duration;

/**
 * Gets the color value.
 *
 * @param {ColorValue} themeColor - The theme color.
 * @param {ColorValue} [color] - The color value.
 * @returns {ColorValue} - The color value.
 * @example
 * const color1 = getColor('blue', 'red'); // Returns 'red'
 * const color2 = getColor('blue'); // Returns 'blue'
 */
export const getColor = (themeColor: ColorValue, color?: ColorValue): ColorValue => color || themeColor;