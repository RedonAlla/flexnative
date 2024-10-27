import { ColorValue, StyleSheet } from 'react-native';

import { BaseTheme } from '@flexnative/theme-context';
import { IconColor, IconSize } from './props';

const BASE_SIZE = 16;

export default function createStyles(
  props: { color: IconColor; size: IconSize },
  theme: BaseTheme,
) {
  const size = getIconSize(props.size);

  return StyleSheet.create({
    icon: {
      color: getColor(props.color, theme),
      margin: 0,
      padding: 0,
      width: size,
      fontSize: size,
      height: size,
      textAlign: 'center',
      verticalAlign: 'middle',
      userSelect: 'none',
      fontFamily: 'Icons',
    },
  });
};

/**
 * Calculate icon size.
 * @param {IconSize} size - props.size.
 * @returns icon size
 */
function getIconSize(size: IconSize): number {
  switch (size) {
    case 'small':
      return BASE_SIZE;

    case 'normal':
      return BASE_SIZE;

    case 'medium':
      return 2 * BASE_SIZE;

    case 'large':
      return 3 * BASE_SIZE
  
    default:
      return size;
  }
}

function getColor(color: IconColor, theme: BaseTheme): ColorValue {
  switch (color) {
    case 'default':
      return theme.default;

    case 'primary':
      return theme.primary;

    case 'secondary':
      return theme.secondary;

    case 'info':
      return theme.info;

    case 'success':
      return theme.success;

    case 'warning':
      return theme.warning;

    case 'error':
      return theme.error;

    case 'dark':
      return theme.dark;

    case 'light':
      return theme.light;
  
    default:
      return color;
  }
}