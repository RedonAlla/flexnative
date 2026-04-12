---
title: Theme Context
sidebar_position: 3
tags: [react, react-native, expo, framework, utilities, theme, flexnative]
---

`ThemeContext` is the core architectural piece of the theming system in your application.
It acts as a centralized *"source of truth"* for all visual styling preferences, allowing any component in your React Native tree to access and react to theme changes without the need for manual prop drilling.

Here is a detailed breakdown of what it is, what it does, and how to use it.

## What is it?

At its technical core, `ThemeContext` is a React Context object created via `React.createContext`.
It is designed to hold a specific data structure defined by `ThemeContextProps`.
This structure typically includes:

#### 1. State:
The actual theme data (`colors`, `fontSize`, `spacing`, etc.).
#### 2. Updaters:
Function signatures to change that state (e.g., `setTheme`, `setColorScheme`, `setScale`).

It is initialized with a `defaultTheme()` to ensure that even if a component is rendered outside of a provider, the app doesn't crash and has fallback styles.


## What does it do?
### 1. Eliminates Prop Drilling:
Instead of passing a `theme` object from your `App.tsx` down through dozens of containers and layout components just to reach a single `Button`, the button can "ask" the context for the theme directly.
### 2. Facilitates Dynamic Theming:
Because it is reactive, whenever the `ThemeProvider` updates the state (for instance, switching from `'light'` to `'dark'`), every component consuming the context automatically re-renders with the new values.
### 3. Provides Type-Safe Styling:
By using TypeScript generics (like `TColors`), it allows you to extend the base theme with custom colors specific to your project while maintaining full IDE autocomplete support.
### 4. Standardizes UI Logic:
It exposes specialized hooks to minimize re-renders. For example, `useThemeColors` only gives a component the color palette, keeping the logic separated from font scaling or theme-switching functions.

## Properties
The `ThemeContextProps<TColors>` interface defines the shape of the data and functions available through the `ThemeContext`.
It essentially acts as the API for interacting with your application's theme.

Here is the breakdown of its properties based on the source code:

| Property	| Type |	Description |
| --------	| ---- |	----------- |
| state |	[`BaseTheme<TColors>`](./default-theme.mdx#properties) |	The current "source of truth" for the theme. It contains the active color palette, spacing, font sizes, border configurations, and the current color scheme (light/dark). |
| setTheme |	`<T>(arg: T) => void` |	(Optional) A function used to update or completely replace the current theme state. It uses a generic type to allow for flexible theme updates. |
| setColorScheme |	`(scheme: ColorSchemeName) => void` |	(Optional) A specialized function to toggle the color scheme between 'light' and 'dark'. Changing this typically triggers the ThemeProvider to swap the color palette. |
| setScale |	`(scale: number) => void` |	(Optional) A function to update the global scale factor. This is often used for accessibility features, like increasing the size of all UI elements (fonts and spacing) simultaneously. |


## Use Case Examples
### 1. Styling a Custom Component
This is the most common use case.
You want a component to look consistent with the rest of the app.

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useThemeColors } from './ThemeContext';

const ThemedCard = ({ title }) => {
  // Access only the colors from the context
  const colors = useThemeColors();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <Text style={{ color: colors.text }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 8 }
});
```

### 2. Creating a Dark Mode Toggle
In your settings screen, you need to trigger a change that affects the whole app.

```tsx
import React from 'react';
import { Button } from 'react-native';
import { useThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
  const { state, setColorScheme } = useThemeContext();

  const toggleTheme = () => {
    const nextScheme = state.scheme === 'dark' ? 'light' : 'dark';
    setColorScheme(nextScheme);
  };

  return (
    <Button 
      title={`Switch to ${state.scheme === 'dark' ? 'Light' : 'Dark'} Mode`} 
      onPress={toggleTheme} 
    />
  );
};
```

### 3. Handling Accessibility (Font Scaling)
If your app supports a "Large Text" mode for better accessibility, `ThemeContext` can broadcast a scale factor.

```tsx
import React from 'react';
import { Text } from 'react-native';
import { useThemeState } from './ThemeContext';

const AccessibleText = (props) => {
  const { fontSize, scale } = useThemeState();
  
  // Calculate dynamic font size based on theme scale
  const dynamicSize = fontSize * scale;

  return <Text {...props} style={[{ fontSize: dynamicSize }, props.style]} />;
};import React from 'react';
import { Text } from 'react-native';
import { useThemeState } from './ThemeContext';

const AccessibleText = (props) => {
  const { fontSize, scale } = useThemeState();
  
  // Calculate dynamic font size based on theme scale
  const dynamicSize = fontSize * scale;

  return <Text {...props} style={[{ fontSize: dynamicSize }, props.style]} />;
};
```

## Summary of available Hooks
* **`useThemeContext<TColors>()`**: Returns the full object (state + setter functions). Use this if you need to change the theme.
* **`useThemeState<TColors>()`**: Returns the entire theme state object. Use this for general theme metadata.
* **`useThemeColors<TColors>()`**: Returns just the colors object. This is the most efficient hook for styling-only components.
