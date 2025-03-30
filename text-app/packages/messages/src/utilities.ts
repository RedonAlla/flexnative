/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-17 22:02:06
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-31 00:02:33
 * @ Description: Utility functions used in the Message component.
 */

import { Type } from "./props";
import { FontSize, Sizes, Spaces } from "@flexnative/theme-context";
import { IconName } from "@flexnative/icons";


/**
 * Returns the theme space key based on the provided size.
 * 
 * @param {Sizes} [size='medium'] - The size of the message box. 
 * @returns {Spaces} The theme space key from {@link BaseTheme}.
 */
export function getThemeSpaceKey(size?: Sizes): Spaces
{
  switch (size) {
    case 'small':
      return 'sm';
    
    case 'medium':
      return 'md';
      
    case 'large':
      return 'lg';
  
    default:
      return 'md';
  }
}

/**
 * Returns the theme font size key based on the provided size.
 * 
 * @param {Sizes} [size='medium'] - The size of the message box.
 * @returns {FontSize} The theme font size key.
 */
export function getThemeFontSizeKey(size?: Sizes): FontSize
{
  switch (size) {
    case 'small':
      return 'sm';
    
    case 'medium':
      return 'md';
      
    case 'large':
      return 'lg';
  
    default:
      return 'md';
  }
}


/**
 * Returns the theme color key based on the provided message type.
 * 
 * @param {Type} type - The type of the message.
 * @returns {string} The theme color key.
 */

export function getThemeColorKey(type: Type): string
{
  switch (type) {
    case 'info':
      return 'info';
      
    case 'warning':
        return 'warning';

    case 'warning':
        return 'warning';
      
    case 'error':
      return 'error';
      
    case 'success':
      return 'success';
  
    default:
      return 'secondary';
  }
}

/**
 * Returns the icon size based on the provided message size.
 * 
 * @param {Sizes} size - The size of the message box.
 * @returns {FontSize} The icon size.
 */
export function getIconSize(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'md';
    case 'medium':
      return 'lg';
    case 'large':
      return 'xxl'
    default:
      return size;
  }
}

/**
 * Returns the icon name based on the provided icon and message type.
 * 
 * @param {keyof IconName | null} icon - The custom icon name or null.
 * @param {Type} messageType - The type of the message.
 * @returns {keyof IconName} The icon name.
 */
export function getIcon(icon: keyof IconName | null, messageType: Type): keyof IconName
{
  if(icon !== undefined)
    return icon!;
  
  switch (messageType) {
    case 'info':
      return 'info-circle';
    case "warning":
      return 'warning-circle';
    case "error":
      return 'close-circle';
    case "success":
      return 'check-circle';
    case "default":
      return 'info-circle';
  }
}