import React from "react";
import { ColorValue } from "react-native";

/**
 * ColorView Component
 *
 * A simple helper component that renders a small colored square to visually represent a color value.
 *
 * @param {Object} props - The component props.
 * @param {ColorValue} props.color - The color value to display.
 */
const ColorView: React.FC<{color: ColorValue;}> = ({ color }: { color: ColorValue; }) => {
  return (
    <span className='color-view' style={{backgroundColor: color.toString()}} />
  );
};

export default ColorView;