import { StyleSheet } from 'react-native';

const BASE_SIZE = 16;
export const DISABLED_OPACITY = 0.4;
export const GHOST_TRANSPARENCY = '40';
export const GHOST_ACTIVE_TRANSPARENCY = '73';
export const WHITE_TEXT_COLOR = '#FFFFFF';
export const BLACK_TEXT_COLOR = '#424242';

export const DARK_OVERLAY = '#00000021';
export const LIGHT_OVERLAY = '#FFFFFF21';

export const BUTTON_PADDING_VERTICAL_MULTIPLIER = 0.6;
export const BUTTON_PADDING_HORIZONTAL_MULTIPLIER = 1;

export const fontSize = {
  small: BASE_SIZE * 0.75,
  default: BASE_SIZE,
  medium: BASE_SIZE * 1.25,
  large: BASE_SIZE * 1.5
}

export const borderRadius = {
  none: 0,
  small: 2,
  medium: 4,
  large: 6,
  full: 99999,
}

export const borderWidth = {
  none: 0,
  hairline: StyleSheet.hairlineWidth,
  thin: 1,
  base: 2,
  thick: 3,
}