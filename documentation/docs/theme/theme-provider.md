---
title: Theme Provider
sidebar_position: 1
---

The `ThemeProvider` is the foundation of the FlexNative theming system.
It is an abstract component that you must extend to provide theme state management, persistence logic, and initialization for your application.

## Overview

Unlike a standard Context Provider, `ThemeProvider` is designed as an **abstract class**.
This design pattern forces you to implement specific storage and state management logic (e.g., loading from `AsyncStorage` or an API) that fits your application's needs.

It handles:
- Initializing the default theme.
- Exposing the `ThemeContext` to the component tree.
- Managing the internal React state for the theme.
- Lifecycle hooks for loading and updating themes.

## Component API

### Generic Types

`ThemeProvider<TColors, TState>`

| Generic | Description |
| :--- | :--- |
| `TColors` | Interface defining your custom color palette (extends `BaseColors`). |
| `TState` | Interface for any additional state you want to manage (defaults to `{}`). |

### Props

| Prop | Type | Description |
| :--- | :--- | :--- |
| `theme` | `BaseTheme<TColors>` | (Optional) Initial theme object. If not provided, the default theme is used. |
| `children` | `React.ReactNode` | The child components to render. |

## Abstract Methods

You are required to implement these methods when subclassing `ThemeProvider`.

### `onLoad()`

Called automatically during `componentDidMount`. Use this to load saved theme preferences from storage.

**Signature:**
```typescript
protected abstract onLoad(): Promise<void>;
```

### `onChangeColorScheme()`

Called when the color scheme is toggled (e.g., via the `setColorScheme` hook). You must update the state and optionally persist the change.

**Signature:**
```typescript
protected abstract onChangeColorScheme(colorScheme: ColorSchemeName): Promise<void>;
```

### `onChangeTheme()`

Called when the entire theme object is updated.

**Signature:**
```typescript
protected abstract onChangeTheme<T>(theme: T): Promise<void>;
```

## Usage Guide

### 1. Create your Provider

Create a file named `AppThemeProvider.tsx`. In this example, we use `@react-native-async-storage/async-storage` to persist the user's preference.

```tsx
import React from 'react';
import { ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider, BaseTheme, defaultTheme } from '@flexnative/theme-context';

// 1. Define custom colors (Optional)
interface MyColors {
  brandPrimary: string;
}

// 2. Extend the abstract ThemeProvider class
export class AppThemeProvider extends ThemeProvider<MyColors, {}> {
  
  // 3. Implement onLoad to restore state from storage
  protected async onLoad() {
    try {
      const savedScheme = await AsyncStorage.getItem('app_scheme');
      
      if (savedScheme === 'dark' || savedScheme === 'light') {
        // Use your logic to construct the initial theme based on the scheme
        // For example, toggling isDark and updating colors
        this.onChangeColorScheme(savedScheme);
      }
    } catch (error) {
      console.warn('Failed to load theme preference', error);
    }
  }

  // 4. Handle Color Scheme Changes
  protected async onChangeColorScheme(scheme: ColorSchemeName) {
    // Calculate new state
    const isDark = scheme === 'dark';
    const currentTheme = this.state.theme || defaultTheme<MyColors>();
    
    const newTheme: BaseTheme<MyColors> = {
      ...currentTheme,
      scheme: scheme,
      isDark: isDark,
      // You typically update colors here based on the scheme
      colors: {
        ...currentTheme.colors,
        // Example: Swap background colors based on scheme
        background: isDark ? '#121212' : '#FFFFFF',
      }
    };

    // Update React State
    this.setState({ theme: newTheme });

    // Persist to storage
    try {
      await AsyncStorage.setItem('app_scheme', scheme || 'light');
    } catch (error) {
      console.warn('Failed to save scheme', error);
    }
  }

  // 5. Handle Full Theme Updates
  protected async onChangeTheme<T>(theme: T) {
    this.setState({ theme: theme as BaseTheme<MyColors> });
  }
}
```

### 2. Wrap your Application

Wrap your root component with your custom provider.

```tsx
// App.tsx
import React from 'react';
import { AppThemeProvider } from './AppThemeProvider';
import { MainNavigation } from './MainNavigation';

const App = () => {
  return (
    <AppThemeProvider>
      <MainNavigation />
    </AppThemeProvider>
  );
};

export default App;
```