import { View } from "react-native";

/** @type{import("@storybook/react").Preview} */
export const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters, globals }) => {
      const theme = globals.theme || "light";
      const backgroundColor =
        theme === "dark"
          ? "#1E1E1E"
          : parameters.noBackground === true
            ? undefined
            : "#26c6da";

      return (
        <View
          style={{
            flex: 1,
            backgroundColor,
            padding: 8,
          }}
        >
          <Story />
        </View>
      );
    },
  ],
};
