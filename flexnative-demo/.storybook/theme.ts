import { ThemePartial } from "@storybook/react-native";

const theme: ThemePartial = {
  // Base theme type
  //base: "dark", // or 'dark'

  // Text color for muted elements
  textMutedColor: "#5C6870",

  // Color palette
  color: {
    primary: "#47ff4a",
    secondary: "#029CFD",
    tertiary: "#FAFBFC",

    // Status colors
    positive: "#66BF3C",
    negative: "#FF4400",
    warning: "#E69D00",

    // Text colors
    defaultText: "#2E3438",
    inverseText: "#FFFFFF",

    // Monochrome scale
    lightest: "#FFFFFF",
    lighter: "#F7FAFC",
    light: "#EEF3F6",
    medium: "#D9E8F2",
    dark: "#5C6870",
    darkest: "#2E3438",
  },

  // Background colors
  background: {
    app: "#F6F9FC",
    bar: "#FFFFFF",
    content: "#FFFFFF",
    preview: "#FFFFFF",
  },

  // Typography settings
  typography: {
    weight: {
      regular: "400",
      bold: "700",
    },
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
    },
  },

  // Input field styling
  input: {
    background: "#FFFFFF",
    border: "hsla(203, 50%, 30%, 0.15)",
    borderRadius: 4,
    color: "#2E3438",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  // Button styling
  button: {
    background: "#F6F9FC",
    border: "#D9E8F2",
  },

  // Boolean control styling
  boolean: {
    background: "#ECF4F9",
    selectedBackground: "#FFFFFF",
  },

  // Layout and borders
  layoutMargin: 10,
  appBorderColor: "hsla(203, 50%, 30%, 0.15)",
  appBorderRadius: 4,

  // Toolbar colors
  barTextColor: "#73828C",
  barHoverColor: "#029CFD",
  barSelectedColor: "#029CFD",
  barBg: "#FFFFFF",

  // Brand customization
  brand: {
    title: "FlexNative",
    url: "https://redonalla.github.io/flexnative/",
    image: require("../assets/images/favicon.png"), // or URI
  },
};

export default theme;
