import { resolve } from "path";

export default [
  "@gorhom/docusaurus-react-native-plugin",
  {
    alias: {
      "expo-font": resolve(
        __dirname,
        "..",
        "node_modules/@expo/vector-icons"
      ),
      "expo-image": resolve(
        __dirname,
        "..",
        "node_modules/expo-image"
      ),
      "expo-blur": resolve(
        __dirname,
        "..",
        "node_modules/expo-blur"
      ),
      "@expo/vector-icons": resolve(
        __dirname,
        "..",
        "node_modules/@expo/vector-icons"
      ),
      "@flexnative/icons": resolve(
        __dirname,
        "..",
        "node_modules/@flexnative/icons"
      ),
      "@flexnative/buttons": resolve(
        __dirname,
        "..",
        "node_modules/@flexnative/buttons"
      ),
      "@flexnative/avatar": resolve(
        __dirname,
        "..",
        "node_modules/@flexnative/avatar"
      ),
      "@flexnative/bottom-sheet": resolve(
        __dirname,
        "..",
        "node_modules/@flexnative/bottom-sheet"
      ),
    },
  }
];