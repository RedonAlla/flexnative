/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-20 22:58:12
 * @ Description: Styles applied in to Button component.
 */

import { ColorValue, StyleSheet } from 'react-native';

import { getBackgroundColor, getOverlayColor, getTextColor } from './utilities';
import { BaseButtonProps, ButtonType } from './props';
import { COLUMN_GAP_MULTIPLIER, WHITE_COLOR } from './constants';
import { BaseTheme } from '@flexnative/theme-context';


/**
 * Creates a stylesheet for button's components with customizable styles.
 *
 * @param props - The properties to customize the styles.
 * @param props.isLink - Determines if the text should be styled as a link.
 * @param props.fontSize - The font size for the text and icon.
 * @param props.overlayColor - The background color for the overlay.
 *
 * @returns A StyleSheet object containing the styles for overlay, text, and icon.
 */
export default function createStyles(props: BaseButtonProps, theme: BaseTheme<any>, hasText: boolean)
{
  const themeColor = theme.colors[props.color] ?? props.color;
  const size = theme.fontSize[props.size] ?? theme.fontSize.default;
  const paddingVertical = size * theme.metrics.verticalMultiplier;
  const paddingHorizontal = size * theme.metrics.horizontalMultiplier;
  const backgroundColor = getBackgroundColor(themeColor, theme.metrics.ghostOpacity, props.type);
  const textColor = getTextColor(theme.scheme === 'light', props.color, themeColor, props.type, theme.colors.black);

  return StyleSheet.create({
    container: {
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'row',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: COLUMN_GAP_MULTIPLIER * paddingHorizontal,
      paddingVertical: paddingVertical,
      paddingHorizontal: hasText ? paddingHorizontal : paddingVertical,
      borderRadius: theme.borderRadius[props.radius] ?? props.radius,
      borderWidth: theme.borderWidth[props.borderWidth!] ?? props.borderWidth,
      borderColor: props.borderColor ?? themeColor,
      backgroundColor: backgroundColor,
      opacity: props.loading ? theme.metrics.disabledOpacity : 1,
    },
    overlay: {
      zIndex: -1,
      ...StyleSheet.absoluteFillObject,
      backgroundColor: props.activeColor ?? getOverlayColor(props.type, themeColor, theme.colors.overlay, theme.metrics.ghostOpacity)
    },
    text: {
      fontSize: size,
      fontFamily: 'Regular',
      textAlign: 'center',
      userSelect: 'none',
      textDecorationLine: props.type === 'link' ? 'underline' : 'none',
      color: textColor
    },
    icon: {
      fontSize: size,
      width: size,
      height: size,
      color: textColor
    }
  })
}

/**
 * Returns the text color for a button based on its pressed state and type.
 *
 * @param pressed - A boolean indicating whether the button is pressed.
 * @param type - The type of the button.
 * @returns An object containing the color value if the button is pressed and of type 'inverse', otherwise undefined.
 */
export function pressedTextColor(pressed: boolean, type: ButtonType): { color: ColorValue} | undefined {
  if (pressed && type === 'inverse')
    return { color: WHITE_COLOR };
  
  return undefined;
}