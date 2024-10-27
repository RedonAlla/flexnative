import { ColorValue, StyleSheet } from 'react-native';

import { BaseTheme } from '@flexnative/theme-context';
import { GHOST_ACTIVE_TRANSPARENCY } from '@flexnative/ui-constants';

import { getBorderRadius, getBorderWidth, getColor, getTextSize } from "../input.utilities";
import { InputColor, CheckType } from './props';
import { BorderRadius, BorderWidth, Sizes } from '../input.props';
import { BLACK_TEXT_COLOR, DISABLED_OPACITY, PADDING_VERTICAL_MULTIPLIER, WHITE_TEXT_COLOR } from '../input.constants';


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
  theme: {
    colors: BaseTheme,
    isDark: boolean
  }
}

export const createStyles = (props: StyleProps) => {
  const fontSize = getTextSize(props.size);
  const color = getColor(props.theme.colors, props.color);
  const paddingVertical = PADDING_VERTICAL_MULTIPLIER * fontSize;
  const borderWidth = getBorderWidth(props.borderWidth!);
  const borderRadius = getBorderRadius(props.radius);
  
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: paddingVertical,
      opacity: props.disabled ? DISABLED_OPACITY : 1,
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
      color: getCheckColor(!props.theme.isDark, color, props.color, props.type),
    },
    checkBoxChecked: {
      borderColor: Boolean(props.checkedBorderColor) ? props.checkedBorderColor : color,
      backgroundColor:
        Boolean(props.checkedBackgroundColor)
          ? props.checkedBackgroundColor
          : props.type === 'outlined'
              ? 'transparent'
              : props.type === 'ghost'
                  ? `${color.toString()}${GHOST_ACTIVE_TRANSPARENCY}`
                : color,
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

function getCheckColor(isLight: boolean, colorValue: ColorValue, color: InputColor, type: CheckType) {
  if(type === 'outlined' || type === 'ghost')
    return colorValue;

  if(Boolean(color === 'light'))
    return BLACK_TEXT_COLOR;

  return Boolean(isLight && color === 'default')
    ? BLACK_TEXT_COLOR
    : WHITE_TEXT_COLOR
}
