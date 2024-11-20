import { ColorValue, PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { BaseTheme } from '@flexnative/theme-context';


import {
  getBackgroundColor,
  getBackgroundColorActive,
  getOverlayColor, 
  getPaddingHorizontal,
  getPaddingVertical,
  getTextColor
} from './utilities';
import { ButtonType } from './props';

type ContainerProps = {
  type: ButtonType;
  color: Color;
  size: Sizes;
  radius: number;
  hasText: boolean;
  borderWidth: number;
  disabledOpacity: number;
  activeColor?: ColorValue;
  borderColor?: ButtonColor;
  activeBorderColor?: ColorValue;
  theme: {
    colors: BaseTheme,
    isDark: boolean
  }
}

export function applyStyle(props: ContainerProps, style?: StyleProp<ViewStyle>) {
  const defaultColor = getColor(props.color, props.theme.colors);
  const pressedColor = getColor(props.activeColor!, props.theme.colors);
  const paddingVertical = getPaddingVertical(props.size);
  const borderColor = props.borderColor ?? defaultColor;
  const paddingHorizontal = getPaddingHorizontal(props.size);

  const containerStyle = StyleSheet.create({
    default: {
      borderColor: borderColor,
      backgroundColor: getBackgroundColor(defaultColor, props.type)
    },
    pressed: {
      borderColor: props.activeBorderColor ?? borderColor,
      backgroundColor: getBackgroundColorActive(pressedColor ?? defaultColor, props.type),
    },
  });
  
  return (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    return [
      {
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 0.5 * paddingHorizontal,
        opacity: props.disabledOpacity,
        paddingVertical: paddingVertical,
        paddingHorizontal: props.hasText ? paddingHorizontal : paddingVertical,
        borderRadius: getBorderRadius(props.radius),
        borderWidth: getBorderWidth(props.borderWidth),
      },
      state.pressed ? containerStyle.pressed : containerStyle.default,
      style
    ]
  }
}

/**
 * Create StyleSheet based on component props and the selected theme.
 * 
 * @param props 
 * @param theme
 * 
 * @returns {StyleSheet} 
*/
export default function createStyles(
  props: {
    type: ButtonType;
    size: Sizes;
    color: ButtonColor;
    textColor?: ButtonColor;
    textActiveColor?: ColorValue;
  },
  theme: {
    colors: BaseTheme,
    isDark: boolean
  }
)
{
  const fontSize = getTextSize(props.size);
  const textColor = getTextColor(!theme.isDark, props.color, props.type, theme.colors);

  return StyleSheet.create({
    overlay: {
      zIndex: -1,
      ...StyleSheet.absoluteFillObject,
      backgroundColor: getOverlayColor(theme.isDark, props.color, theme.colors, props.type)
    },
    text: {
      fontSize: fontSize,
      fontFamily: 'Regular',
      textAlign: 'center',
      userSelect: 'none',
      textDecorationLine: props.type === 'link' ? 'underline' : 'none'
    },
    textColor: {
      color: Boolean(props.textColor) ? props.textColor : textColor,
    },
    textActiveColor: {
      color: Boolean(props.textActiveColor) ? props.textActiveColor : Boolean(props.type === 'inverse') ? WHITE_TEXT_COLOR : textColor
    },
    icon: {
      fontSize: fontSize,
      width: fontSize,
      height: fontSize,
    },
    spinnerColor: {
      color: textColor
    }
  })
}

/**
 * Create StyleSheet based ON OPTIONAL COLOR.
 * 
 * @param defaultColor 
 * @param preferredColor
 * 
 * @returns {StyleSheet} 
*/
export function styleColor(defaultColor: ColorValue, preferredColor?: ColorValue): { color: ColorValue } {
  return {
    color: Boolean(preferredColor) ? preferredColor! : defaultColor
  };
}