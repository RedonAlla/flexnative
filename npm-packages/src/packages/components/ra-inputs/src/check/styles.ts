import { ColorValue, StyleSheet } from 'react-native';

import { BaseTheme, BorderRadius, BorderWidth, Sizes } from '@flexnative/theme-context';

import { InputColor, CheckType } from './props';
import { PADDING_VERTICAL_MULTIPLIER, WHITE_TEXT_COLOR } from '../input.constants';


type StyleProps = {
  type: CheckType;
  color: InputColor;
  size: Sizes;
  radius: BorderRadius;
  borderWidth?: BorderWidth;
  disabled?: boolean;
  borderColor?: ColorValue;
  checkedBorderColor: ColorValue;
  backgroundColor?: ColorValue;
  checkedBackgroundColor?: ColorValue;
  theme: BaseTheme<any>;
}

export const createStyles = (props: StyleProps) => {
  const fontSize = props.theme.fontSize[props.size] ?? props.theme.fontSize.default;
  const themeColor = props.theme.colors[props.color] ?? props.color as ColorValue;
  const paddingVertical = PADDING_VERTICAL_MULTIPLIER * fontSize;
  const borderWidth = props.theme.borderWidth[props.borderWidth!] ?? props.borderWidth as number;
  const borderRadius = props.theme.borderRadius[props.radius] ?? props.radius as number;
  
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: paddingVertical,
      opacity: props.disabled ? props.theme.metrics.disabledOpacity : 1,
    },
    checkContainer: {
      overflow: 'hidden',
      width: 1.5 * fontSize,
      height: 1.5 * fontSize,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: borderWidth,
      borderRadius: borderRadius,
    },
    checkBox: {
      userSelect: 'none',
      textAlign: 'center',
      fontFamily: 'Icons',
      fontWeight: 'bold',
      alignSelf : "center",
      color: getCheckColor(!props.theme.scheme, themeColor, props.color, props.type, props.theme.colors.black),
    },
    checkBoxChecked: {
      borderColor: props.checkedBorderColor ?? themeColor,
      backgroundColor: Boolean(props.checkedBackgroundColor)
        ? props.checkedBackgroundColor
        : props.type === 'outlined'
            ? 'transparent'
            : props.type === 'ghost'
                ? `${themeColor.toString()}${props.theme.metrics.ghostOpacity}`
                : themeColor,
    },
    checkBoxUnChecked: {
      borderColor: Boolean(props.borderColor) ? props.borderColor : props.type === 'solid' ? props.theme.colors.default : props.theme.colors.border,
      backgroundColor: Boolean(props.backgroundColor) ? props.backgroundColor : props.type === 'solid' ? props.theme.colors.default : 'transparent',
    },
    label: {
      fontSize: fontSize,
      userSelect: 'none',
      fontFamily: 'Regular',
      color: props.theme.colors.text,
    },
  });
}

function getCheckColor(isLight: boolean, colorValue: ColorValue, color: InputColor, type: CheckType, blackColor: ColorValue = 'black') {
  if(type === 'outlined' || type === 'ghost')
    return colorValue;

  if(Boolean(color === 'secondary'))
    return WHITE_TEXT_COLOR;

  if(Boolean(color === 'light'))
    return blackColor;

  return Boolean(isLight && color === 'default')
    ? blackColor
    : WHITE_TEXT_COLOR
}
