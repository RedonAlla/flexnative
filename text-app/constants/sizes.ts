import { Platform, StatusBar } from 'react-native';

export const HEADER_HEIGHT =
  Platform.OS === 'web' ? 72 : (StatusBar.currentHeight! + (Boolean(Platform.OS === 'ios') ? 92 : 62));

export const TAB_NAV_HEIGHT =
  Platform.OS === 'web' ? 60 : ((Platform.OS === 'ios') ? 92 : 52);

export const PADDING = 8;

export const WEB_MAX_SCREEN_WIDTH = 750;
export const GAP = 12;