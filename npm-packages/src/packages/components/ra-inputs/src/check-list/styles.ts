import { ColorValue, StyleSheet } from 'react-native';

import { BaseTheme } from '@flexnative/theme-context';

import { BorderRadius, BorderWidth, InputColor, InputType, Sizes } from '../input.props';
import { getBorderRadius, getBorders, getColor, getTextSize } from '../input.utilities';
import { PADDING_HORIZONTAL_MULTIPLIER, PADDING_VERTICAL_MULTIPLIER, TEXT_HELPER_MULTIPLIER } from '../input.constants';


type StyleProps = {
  type: InputType;
  color: InputColor;
  size: Sizes;
  radius: BorderRadius;
  borderWidth?: BorderWidth;
  disabled?: boolean;
  borderColor?: ColorValue;
  backgroundColor?: ColorValue;
  material?: boolean;
  direction?: 'row' | 'column';
  theme: {
    colors: BaseTheme,
    isDark: boolean
  }
}
  
export const createStyles = (props: StyleProps) => {
  const fontSize = getTextSize(props.size);
  const color = getColor(props.theme.colors, props.color);
  const paddingVertical = PADDING_VERTICAL_MULTIPLIER * fontSize;
  const paddingHorizontal = PADDING_HORIZONTAL_MULTIPLIER * fontSize;
  const borderRadius = getBorderRadius(props.radius);
  
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
    },
    default: {
      backgroundColor: 'transparent',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: paddingVertical,
      columnGap: paddingVertical,
      padding: paddingVertical,
      borderColor: props.borderColor ?? color,
      backgroundColor: props.backgroundColor ?? 'transparent',
      borderRadius: props.type === 'underlined' ? 0 : borderRadius,
      paddingHorizontal:
        props.type === 'underlined'
        ? 0
        : (props.radius === 'full' && props.material)
          ? 2 * paddingHorizontal
          : paddingHorizontal,
      ...getBorders(props.type, props.borderWidth!),
    },
    listContainer: {
      display: 'flex',
      flexDirection: props.direction,
      rowGap: paddingVertical,
      columnGap: 2 * paddingVertical,
      backgroundColor: 'transparent'
    },
    label: {
      fontFamily: 'Regular',
      color: props.theme.colors.text,
      marginBottom: 0.8 * paddingVertical,
      fontSize: props.material ? TEXT_HELPER_MULTIPLIER * fontSize : fontSize,
    },
    helpText: {
      fontStyle: 'italic',
      //opacity: DISABLED_OPACITY,
      marginTop: 0.25 * fontSize,
      paddingHorizontal: borderRadius,
      color: props.theme.colors.text,
      fontSize: TEXT_HELPER_MULTIPLIER * fontSize,
    },
  });
}