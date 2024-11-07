import { ColorValue, StyleSheet } from 'react-native';

type Props = { color: ColorValue; size: number };

/**
 * Creates a stylesheet for an icon component with the specified color and size.
 *
 * @param {Props} props - The properties for the styles.
 * @param {string} props.color - The color of the icon.
 * @param {number} props.size - The size of the icon.
 * @returns {StyleSheet} The stylesheet object for the icon component.
 */
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