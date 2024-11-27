/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-10-08 12:56:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-27 17:01:13
 * @ Description: Prop for SkeletonLoader component.
 */

import { ColorValue } from "react-native";
import { SvgProps } from "react-native-svg";

/**
 * Interface for content loader properties.
 * 
 * @extends SvgProps
 * 
 * @property {boolean} [animate=true] - Boolean indicator whether to animate skeleton loading or not.
 * @property {ColorValue} [backgroundColor] - Background color.
 * @property {ColorValue} [foregroundColor] - Foreground color.
 * @property {number} [speed=1.2] - Animation speed.
 * @property {number} [interval=0.25] - Animation interval.
 * @property {string} [uniqueKey] - Used for unique key for <Rect fill='' clipPath='' />.
 * @property {JSX.Element} [beforeMask] - JSX.Element to render as mask on loading indicator.
 */
export interface IContentLoaderProps extends SvgProps {
  /**
   * Boolean indicator whether to animate skeleton loading or not.
   * 
   * @default true 
   */
  animate?: boolean;

  /**
   * Background color.
   */
  backgroundColor?: ColorValue;

  /**
   * Foreground Color.
   */
  foregroundColor?: ColorValue;

  /**
   * Animation speed.
   * 
   * @default 1.2
   */
  speed?: number;

  /**
   * Animation interval
   * 
   * @default 0.25
   */
  interval?: number;

  /**
   * Used for unique key for <Rect fill='' clipPath='' />
   */
  uniqueKey?: string;

  /**
   * JSX.Element to render as mask on loading indicator.
   */
  beforeMask?: JSX.Element;
}