---
title: Setup Theme Provider
last_update:
  date: 2024-09-24
  author: Redon Alla
tags: [react, react-native, expo, framework]
---

The `ThemeProvider` is the foundation of the FlexNative theming system.
It is an abstract component that you must extend to provide theme state management, persistence logic, and initialization for your application.

:::info
If you are not familiar with React's Context we strongly suggest to follow **[this link](https://reactjs.org/docs/context.html)** before starting.
:::

## 1. Create your Provider

Create a file named `AppThemeProvider.tsx`. In this example, we use `@react-native-async-storage/async-storage` to persist the user's preference.
For a full guide how to create your Provider fallow instructions in [ThemeProvider guide](../theme/theme-provider.md).

## 2. Wrap your Application

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