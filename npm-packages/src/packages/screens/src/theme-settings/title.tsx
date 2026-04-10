import Icon from "@flexnative/icons";
import { Fonts, useThemeState } from "@flexnative/theme-context";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
  icon: string;
};

export default function Title({ text, icon }: Props) {
  const theme = useThemeState();
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={theme.fontSize.xxl}
        color={theme.colors.text}
        style={{
          width: theme.fontSize.xxl,
          textAlign: "left",
          marginRight: theme.spaces.md,
        }}
      />
      <Text
        style={[
          styles.title,
          {
            color: theme.colors.text,
            paddingBottom: theme.spaces.lg,
            fontSize: theme.fontSize.md,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontWeight: "600",
    fontFamily: Fonts.sans,
  },
  icon: {
    width: 26,
    textAlign: "left",
  },
});
