import React from "react";
import { Image, ImageSourcePropType, ImageStyle } from "react-native";

/**
 * Props for the SliderThumbImage component.
 */
export interface SliderThumbImageProps {
  /**
   * The source for the thumb image.
   */
  source?: ImageSourcePropType;
  /**
   * The size (width and height) of the thumb image.
   */
  size: number;
}

/**
 * A component that renders an image to be used as the thumb of a Slider.
 *
 * @param props - The component props.
 */
const SliderThumbImage = ({ source, size }: SliderThumbImageProps) => {
  if (!source) {
    return null;
  }

  const style: ImageStyle = {
    width: size,
    height: size,
  };

  return <Image source={source} style={style} />;
};

export default SliderThumbImage;
