import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { useThemeState } from "@flexnative/theme-context";

type CardProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle> | undefined;
};

const Card: React.FC<CardProps> = ({ title, children, style }) => {
  const theme = useThemeState();

  return (
    <View
      style={[
        {
          flex: 1,
          width: "100%",
          display: "flex",
          padding: theme.spaces.default,
          borderRadius: theme.borders.radius.medium,
          backgroundColor: theme.colors.card,
        },
        style,
      ]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    //fontFamily: 'Bold',
    paddingBottom: 13,
  },
});
