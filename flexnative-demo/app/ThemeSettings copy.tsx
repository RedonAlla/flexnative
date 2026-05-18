import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Polygon,
  Rect,
  SvgProps,
} from "react-native-svg";

import Card from "@/components/ui/card";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import { Block } from "@flexnative/layout";
import { useThemeContext } from "@flexnative/theme-context";

export default function Index() {
  const theme = useThemeContext();

  return (
    <View style={styles.container}>
      {/* <Block flex={1} columnGap={DEMO_COMPONENT_GAP} wrap="wrap"> */}
      <Card title="Theme">
        <Block flex={1} columnGap={DEMO_COMPONENT_GAP} wrap="wrap">
          {/* <Block style={styles.modStroke}> */}
          <View style={styles.col}>
            <SVGComponent width={"100%"} height={"100%"} />
          </View>

          {/* </Block>
            <Block style={styles.modStroke}> */}
          <View style={styles.col}>
            <DiagonalCard width={"100%"} height={"100%"} />
          </View>
          {/* <DiagonalCard width={"100%"} height={"100%"} /> */}
          {/* </Block>
            <Block style={styles.modStroke}> */}
          <View style={styles.col}>
            <DiagonalCard width={"100%"} height={"100%"} />
          </View>
          {/* <DiagonalCard width={"100%"} height={"100%"} /> */}
          {/* </Block> */}
        </Block>
        {/* </Card> */}
        {/* </Block> */}
        {/* <Block flex={1} columnGap={DEMO_COMPONENT_GAP} wrap="wrap"> */}
        {/* <Card title="Theme">
        <Block row columnGap={DEMO_COMPONENT_GAP} wrap="wrap">
          <Block row style={styles.modStroke}>
            <SVGComponent width={"100%"} height={"100%"} />
          </Block>
          <Block style={styles.modStroke}>
            <DiagonalCard width={"100%"} height={"100%"} />
          </Block>
          <Block style={styles.modStroke}>
            <DiagonalCard width={"100%"} height={"100%"} />
          </Block>
        </Block>*/}
      </Card>
      {/* </Block> */}
    </View>
  );
}

const DiagonalCard = (props: SvgProps) => (
  <Svg viewBox="0 0 512 320" {...props}>
    <Defs>
      <ClipPath id="clipLight">
        <Polygon points="0,0 512,0 0,320" />
      </ClipPath>
      <ClipPath id="clipDark">
        <Polygon points="512,0 512,320 0,320" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clipLight)">
      <Rect width={512} height={320} rx={32} fill="#F2F2F2" />
      <Rect x={32} y={64} width={448} height={192} rx={28} fill="#D9D9D9" />
      <Rect x={86} y={120} width={280} height={16} rx={8} fill="#B0B0B0" />
      <Circle cx={408} cy={128} r={18} fill="#4A90E2" />
      <Circle cx={96} cy={192} r={18} fill="#00A3FF" />
      <Rect x={140} y={184} width={300} height={16} rx={8} fill="#B0B0B0" />
    </G>
    <G clipPath="url(#clipDark)">
      <Rect width={512} height={320} rx={32} fill="#2F363D" />
      <Rect x={32} y={64} width={448} height={192} rx={28} fill="#5F6A72" />
      <Rect x={140} y={120} width={230} height={16} rx={8} fill="#9AA3A9" />
      <Circle cx={408} cy={128} r={18} fill="#4A90E2" />
      <Circle cx={96} cy={192} r={18} fill="#00A3FF" />
      <Rect x={140} y={184} width={300} height={16} rx={8} fill="#9AA3A9" />
    </G>
  </Svg>
);

const SVGComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 512 320" {...props}>
    <Rect x={0} y={0} width={512} height={320} rx={32} fill="#2F363D" />
    <Rect x={32} y={64} width={448} height={192} rx={28} fill="#5F6A72" />
    <Circle cx="408" cy="128" r="18" fill="#4A90E2" />
    <Circle cx={96} cy={192} r={18} fill="#00A3FF" />
    <Rect x={86} y={120} width={280} height={16} rx={8} fill="#9AA3A9" />
    <Rect x={140} y={184} width={300} height={16} rx={8} fill="#9AA3A9" />
  </Svg>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },
  row: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 12,
    backgroundColor: "red",
  },
  col: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "blue",
  },
  modStroke: {
    borderRadius: 22,
    padding: 6,
    backgroundColor: "red",
  },
});
