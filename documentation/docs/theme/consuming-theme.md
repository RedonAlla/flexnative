---
title: Consuming Themes
sidebar_position: 4
---

The `ThemeContext` module is a core part of the FlexNative theming system.
It establishes the React Context used to propagate the theme state throughout the application and provides a suite of custom hooks for easy consumption.

## Overview

The file `ThemeContext.tsx` exports the context object and three primary hooks.
These hooks allow components to access the current theme configuration (colors, metrics, fonts) and methods to update the theme dynamically.

## Exports

| Export | Type | Description |
| :--- | :--- | :--- |
| `ThemeContext` | `React.Context` | The raw Context object. Generally, you should use the hooks instead of consuming this directly. |
| `useThemeContext` | Hook | Returns the full context value: state and setter functions. |
| `useThemeState` | Hook | Returns the current theme state (read-only). |
| `useThemeColors` | Hook | Returns the current theme colors. |

## Hooks

### useThemeContext

Use this hook when you need full access to the theme, including the ability to change the color scheme (e.g., toggle dark mode) or update theme properties.

**Syntax:**
```typescript
const { state, setTheme, setColorScheme, setColors } = useThemeContext<TColors>();
```

**Example: Theme Toggler**

```tsx
import React from 'react';
import { Button, View, Text } from 'react-native';
import { useThemeContext } from '@flexnative/theme-context';

export const SettingsScreen = () => {
  const { state, setColorScheme } = useThemeContext();

  const toggleTheme = () => {
    const nextScheme = state.colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(nextScheme);
  };

  return (
    <View style={{ flex: 1, backgroundColor: state.colors.background, padding: 20 }}>
      <Text style={{ color: state.colors.text }}>
        Current Mode: {state.colorScheme.toUpperCase()}
      </Text>
      <Button title="Switch Theme" onPress={toggleTheme} />
    </View>
  );
};
```

---

### useThemeColors

This is the most commonly used hook.
It returns the `colors` object from the current theme.
It is lightweight and perfect for styling components.
You can pass a generic type to support custom colors defined in your app.

**Syntax:**
```typescript
const colors = useThemeColors<TColors>();
```

**Example: Themed Component**

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useThemeColors } from '@flexnative/theme-context';

// Optional: Define your custom colors interface
interface MyCustomColors {
  brandPrimary: string;
}

export const BrandBox = () => {
  // Provide the interface to get typed custom colors
  const colors = useThemeColors<MyCustomColors>();

  return (
    <View style={{ 
      width: 100, 
      height: 100, 
      backgroundColor: colors.brandPrimary, // Typed access
      borderColor: colors.border 
    }} />
  );
};
```

---

### useThemeState

Use this hook when you need to read theme properties other than colors (e.g., font sizes, spacing metrics) but do not need to modify the theme.

**Syntax:**
```typescript
const theme = useThemeState<TColors>();
```

**Example: Accessing Metrics**

```tsx
import React from 'react';
import { Text } from 'react-native';
import { useThemeState } from '@flexnative/theme-context';

export const Header = ({ title }) => {
  const theme = useThemeState();

  return (
    <Text style={{ 
      fontSize: theme.fontSize.xxl, 
      fontFamily: theme.fontFamily.bold,
      color: theme.colors.text
    }}>
      {title}
    </Text>
  );
};
```