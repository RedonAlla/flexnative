# 🎨 Theme

[![npm version](https://img.shields.io/npm/v/@flexnative/theme-context.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/theme-context)
[![npm downloads](https://img.shields.io/npm/dt/@flexnative/theme-context.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/theme-context)
[![GitHub source code](https://img.shields.io/badge/github-source%20code-blue?logo=github)](https://github.com/RedonAlla/flexnative/tree/main/npm-packages/src/packages/context/theme-context)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/RedonAlla/flexnative/issues)
[![npm unpacked size](https://img.shields.io/npm/unpacked-size/@flexnative/theme-context.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/theme-context)
[![language](https://img.shields.io/github/languages/top/RedonAlla/flexnative?logo=github)](https://github.com/RedonAlla/flexnative)
[![npm last update](https://img.shields.io/npm/last-update/@flexnative/theme-context.svg?logo=npm&label=last%20publish)](https://www.npmjs.com/package/@flexnative/theme-context)[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@flexnative/theme-context.svg)](https://bundlephobia.com/package/@flexnative/theme-context)
[![npm license](https://img.shields.io/npm/l/@flexnative/theme-context?logo=opensourceinitiative)](https://www.npmjs.com/package/@flexnative/theme-context)

FlexNative Theme Context is part of the FlexNative framework and is available under the `@flexnative/theme-context` NPM package.
It acts as a centralized "source of truth" for all visual styling preferences, allowing any component in your React Native tree to access and react to theme changes without the need for manual prop drilling.

## Key Features

-   **Dynamic Theming**: Easily switch between light and dark modes.
-   **Scaling Support**: Built-in support for global scaling factors, ideal for accessibility.
-   **Type-Safe**: Full TypeScript support with generics to extend the base theme with custom colors.
-   **Typography**: Platform-specific system font stacks for iOS, Web, and Android.
-   **Optimized Performance**: Specialized hooks to minimize unnecessary re-renders.

## Installation

```bash
npm install @flexnative/theme-context
```

## Usage

### Wrap your app with ThemeProvider

```tsx
import React from 'react';
import { ThemeProvider, createTheme } from '@flexnative/theme-context';

const myTheme = createTheme({
  // your custom configuration
});

const App = () => (
  <ThemeProvider theme={myTheme}>
    <Main />
  </ThemeProvider>
);
```

### Consuming the Theme

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useThemeColors } from '@flexnative/theme-context';

const ThemedCard = ({ title }) => {
  const colors = useThemeColors();

  return (
    <View style={{ backgroundColor: colors.surface }}>
      <Text style={{ color: colors.text }}>{title}</Text>
    </View>
  );
};
```

### Dynamic Theme Switching

```tsx
import { useThemeContext } from '@flexnative/theme-context';

const ThemeSwitcher = () => {
  const { state, setColorScheme } = useThemeContext();

  return (
    <Button 
      title={`Switch to ${state.scheme === 'dark' ? 'Light' : 'Dark'}`} 
      onPress={() => setColorScheme(state.scheme === 'dark' ? 'light' : 'dark')} 
    />
  );
};
```

## API Reference

### ThemeContextProps

| Property | Type | Description |
| :--- | :--- | :--- |
| `state` | `BaseTheme<TColors>` | The current source of truth (colors, spacing, fonts, etc.). |
| `setTheme` | `(theme: T) => void` | Function to update or replace the current theme state. |
| `setColorScheme` | `(scheme: ColorSchemeName) => void` | Toggles between 'light' and 'dark' modes. |
| `setScale` | `(scale: number) => void` | Updates the global scale factor for accessibility. |

### Available Hooks

*   **`useThemeContext<TColors>()`**: Returns the full object (state + setter functions). Use this to change theme settings.
*   **`useThemeState<TColors>()`**: Returns the entire theme state object.
*   **`useThemeColors<TColors>()`**: Returns just the `colors` object. This is the most efficient hook for styling-only components.

## Typography Support

The package provides platform-specific system font stacks:
-   **iOS**: San Francisco
-   **Android**: Roboto
-   **Web**: Modern sans-serif stack
-   Supports variants: `sans`, `serif`, `rounded`, and `mono`.

```

## Dev Dependencies
- [color-bits](https://www.npmjs.com/package/color-bits)


## Documentation

For more details on how to start and how to use it, read the [documentation](https://redonalla.github.io/flexnative/docs/theme).