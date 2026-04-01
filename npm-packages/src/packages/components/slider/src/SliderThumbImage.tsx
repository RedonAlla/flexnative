import React from "react";
import { ColorValue, ImageSourcePropType } from "react-native";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Image as SvgImage,
} from "react-native-svg";
import SliderTooltip from "./SliderTooltip";

/**
 * Props for the SliderThumb component.
 */
export interface SliderThumbProps {
  /**
   * The source for the thumb image.
   */
  source?: ImageSourcePropType;
  /**
   * The size (width and height) of the thumb.
   */
  size: number;
  /**
   * The background color of the thumb.
   */
  color: ColorValue;
  /**
   * The border color of the thumb.
   */
  borderColor: ColorValue;
  /**
   * The border width of the thumb.
   */
  borderWidth: number;

  showTooltip: boolean;
  value: number;
  step?: number;
  fontSize: number;
  textColor: ColorValue;
  toolTipBackground: ColorValue;
}

/**
 * A component that renders an SVG thumb for a Slider.
 *
 * @param props - The component props.
 */
const SliderThumb = ({
  value,
  step,
  source,
  size,
  color,
  borderColor,
  borderWidth,
  fontSize,
  showTooltip,
  textColor,
  toolTipBackground,
}: SliderThumbProps) => {
  const center = size / 2;
  const radius = (size - borderWidth) / 2;

  return (
    <>
      <SliderTooltip
        value={value}
        step={step}
        visible={showTooltip}
        fontSize={fontSize}
        top={-size}
        textColor={textColor}
        backgroundColor={toolTipBackground}
        borderColor={borderColor}
        borderWidth={borderWidth}
      />
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Defs>
          <ClipPath id="thumb-clip">
            <Circle cx={center} cy={center} r={radius} />
          </ClipPath>
        </Defs>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill={color as string}
          stroke={borderColor as string}
          strokeWidth={borderWidth}
        />
        {source && (
          <SvgImage
            x={borderWidth / 2}
            y={borderWidth / 2}
            width={size - borderWidth}
            height={size - borderWidth}
            href={source}
            clipPath="url(#thumb-clip)"
            preserveAspectRatio="xMidYMid slice"
          />
        )}
      </Svg>
    </>
  );
};

export default SliderThumb;
