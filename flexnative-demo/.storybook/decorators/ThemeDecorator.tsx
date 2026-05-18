import { defaultTheme } from "@flexnative/theme-context";
import { StyleSheet, View } from "react-native";
import {
  PartialStoryFn,
  Renderer,
  StoryContext,
} from "storybook/internal/types";

import ThemeProvider from "../../contexts/theme-provider";

type StoryProps = PartialStoryFn<Renderer, { [x: string]: any }>;
type ContextProps = StoryContext<Renderer, { [x: string]: any }>;

const ThemeDecorator = (Story: StoryProps, context: ContextProps) => {
  const theme = context.globals.theme || "light";
  const packageTheme = defaultTheme();

  return (
    <ThemeProvider>
      <View
        style={[
          styles.container,
          {
            //backgroundColor: packageTheme.colors.background,
          },
        ]}
      >
        <Story />
      </View>
    </ThemeProvider>
  );
};

export default ThemeDecorator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
