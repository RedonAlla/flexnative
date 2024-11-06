import { ColorValue, StyleSheet } from 'react-native';

type Props = { color: ColorValue; size: number };

export default function createStyles({ color, size }: Props) {
  return StyleSheet.create({
    icon: {
      color: color,
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