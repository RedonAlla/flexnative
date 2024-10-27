import { Platform } from 'react-native';
import { Sizes } from './sizes';


const paddingWeb: Record<Sizes, Padding> = {
  small: {
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  medium: {
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  large: {
    paddingVertical: 10,
    paddingHorizontal: 14
  }
}

const paddingMobile: Record<Sizes, Padding> = {
  small: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  medium: {
    paddingVertical: 14,
    paddingHorizontal: 16
  },
  large: {
    paddingVertical: 18,
    paddingHorizontal: 20
  }
}


export const padding: Record<Sizes, Padding> =
  Platform.OS === 'web'
    ? paddingWeb
    : paddingMobile

type Padding = {
  paddingVertical: number,
  paddingHorizontal: number
};