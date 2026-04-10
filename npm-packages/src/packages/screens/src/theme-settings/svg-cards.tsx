import React, { memo } from "react";
import { ColorValue } from "react-native";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Polygon,
  Rect,
  SvgProps,
} from "react-native-svg";

type SvgCardProps = {
  stroke: ColorValue;
  card: ColorValue;
  accentColor: ColorValue;
  secondaryColor: ColorValue;
  background: ColorValue;
} & SvgProps;

type SvgDiagonalCardProps = {
  strokeDark: ColorValue;
  cardDark: ColorValue;
  accentColorDark: ColorValue;
  secondaryColorDark: ColorValue;
  backgroundDark: ColorValue;
} & SvgCardProps;

export const SVGComponentDiagonal = memo((props: SvgDiagonalCardProps) => {
  const {
    stroke,
    strokeDark,
    background,
    backgroundDark,
    card,
    cardDark,
    accentColor,
    accentColorDark,
    secondaryColor,
    secondaryColorDark,
    ...rest
  } = props;

  return (
    <Svg
      viewBox="-4 -4 520 328"
      width={"100%"}
      style={{ aspectRatio: 520 / 328 }}
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      <Defs>
        <ClipPath id="clipLight">
          <Polygon points="-8, -8 522, -8 -8,328" />
        </ClipPath>
        <ClipPath id="clipDark">
          <Polygon points="522,-8 522,328 -8,328" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clipLight)">
        <Rect
          width={512}
          height={320}
          rx={32}
          fill={background}
          stroke={stroke}
          strokeWidth={8}
        />
        <Rect x={32} y={64} width={448} height={192} rx={28} fill={card} />
        <Rect
          x={86}
          y={120}
          width={280}
          height={16}
          rx={8}
          fill={secondaryColor}
        />
        <Circle cx={96} cy={192} r={18} fill={accentColor} />
        <Rect
          x={140}
          y={184}
          width={300}
          height={16}
          rx={8}
          fill={secondaryColor}
        />
      </G>
      <G clipPath="url(#clipDark)">
        <Rect
          width={512}
          height={320}
          rx={32}
          fill={backgroundDark}
          stroke={strokeDark}
          strokeWidth={8}
        />
        <Rect x={32} y={64} width={448} height={192} rx={28} fill={cardDark} />
        <Rect
          x={140}
          y={120}
          width={230}
          height={16}
          rx={8}
          fill={secondaryColorDark}
        />
        <Circle cx={408} cy={128} r={18} fill={accentColorDark} />
        <Rect
          x={140}
          y={184}
          width={300}
          height={16}
          rx={8}
          fill={secondaryColorDark}
        />
      </G>
    </Svg>
  );
});

export const SVGComponent = memo((props: SvgCardProps) => {
  const { stroke, background, card, accentColor, secondaryColor, ...rest } =
    props;

  return (
    <Svg
      viewBox="-4 -4 520 328"
      width={"100%"}
      style={{ aspectRatio: 520 / 328 }}
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      <Rect
        x={0}
        y={0}
        width={512}
        height={320}
        rx={32}
        fill={background}
        stroke={stroke}
        strokeWidth={8}
      />
      <Rect x={32} y={64} width={448} height={192} rx={28} fill={card} />
      <Circle cx="408" cy="128" r="18" fill={accentColor} />
      <Circle cx={96} cy={192} r={18} fill={accentColor} />
      <Rect
        x={86}
        y={120}
        width={280}
        height={16}
        rx={8}
        fill={secondaryColor}
      />
      <Rect
        x={140}
        y={184}
        width={300}
        height={16}
        rx={8}
        fill={secondaryColor}
      />
    </Svg>
  );
});
