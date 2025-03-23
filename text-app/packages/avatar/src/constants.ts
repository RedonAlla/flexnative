/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-22 22:44:12
 * @ Description: Defines constants used within the Avatar component, including predefined avatar sizes, item padding, and a white color constant.
 */

import { Sizes } from "@flexnative/theme-context";

/**
 * @constant AVATAR_SIZES
 * @description A mapping of predefined avatar sizes to their corresponding pixel values.
 * @type {Record<Sizes, number>}
 * @property {number} small - The pixel size for a small avatar (24px).
 * @property {number} medium - The pixel size for a medium avatar (40px).
 * @property {number} large - The pixel size for a large avatar (64px).
 * @example
 * // Example usage:
 * const smallAvatarSize = AVATAR_SIZES.small; // Returns 24
 * const mediumAvatarSize = AVATAR_SIZES.medium; // Returns 40
 * const largeAvatarSize = AVATAR_SIZES.large; // Returns 64
 */
export const AVATAR_SIZES: Record<Sizes, number> = {
  small: 24,
  medium: 40,
  large: 64
}

/**
 * @constant ITEM_PADDING
 * @description The default padding value (in pixels) applied between items within the AvatarGroup component.
 * @type {number}
 * @default 13
 * @example
 * // Example usage:
 * const padding = ITEM_PADDING; // Returns 13
 */
export const ITEM_PADDING: number = 13;

/**
 * @constant WHITE_COLOR
 * @description Represents the color white in hexadecimal format (#ffffff).
 * @type {string}
 * @default '#ffffff'
 * @example
 * // Example usage:
 * const white = WHITE_COLOR; // Returns '#ffffff'
 */

export const WHITE_COLOR: string = '#ffffff';