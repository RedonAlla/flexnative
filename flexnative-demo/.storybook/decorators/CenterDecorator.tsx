import { StyleSheet, View } from "react-native";
import {
  PartialStoryFn,
  Renderer,
  StoryContext,
} from "storybook/internal/types";

import { createIconSetFromIcoMoon } from "@flexnative/icons";
import config from "../../assets/fonts/icons-config.json";

type StoryProps = PartialStoryFn<Renderer, { [x: string]: any }>;
type ContextProps = StoryContext<Renderer, { [x: string]: any }>;

const icons = createIconSetFromIcoMoon(config);

const CenterDecorator = (Story: StoryProps, context: ContextProps) => {
  return (
    <View style={[styles.container]}>
      <Story />
    </View>
  );
};

export default CenterDecorator;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    flexDirection: "column",
    alignItems: "center",
  },
});
