---
title: Custom Themes
sidebar_position: 2
---

# Custom Themes

The FlexNative theme system is designed to be extensible.
You can define custom colors and strongly type them using the TypeScript generic `TColors`.
The default theme provides a consistent set of metrics for spacing, typography, and borders.
You can customize these values globally to align with your design requirements.

## [Understanding TColors](./default-theme#basecolors)

The `TColors` generic allows you to define the shape of your color palette.
By default, the theme uses [`BaseColors`](./default-theme#basecolors).
When you provide a `TColors` interface, the theme's color object becomes an intersection of `BaseColors & TColors`.

```typescript
// types.ts
export interface MyCustomColors {
  brand: string;
  secondary: string;
  warning: string;
}

const myTheme: BaseTheme<MyCustomColors> = {
  ...defaultTheme(),
  colors: {
    ...defaultTheme().colors,
    brand: '#6200ee',
    secondary: '#03dac6',
    warning: '#f1c40f'
  }
};
```

## [Spacing](./default-theme#spaces)

The `spaces` object defines the layout grid and spacing constants (margins, paddings).

### How it works
When you provide `spaces` to `createTheme`, the values are **merged** with the defaults. This means you only need to specify the keys you want to override.

```typescript
import { createTheme } from '@flexnative/theme-context';

const myTheme = createTheme({
  spaces: {
    md: 20, // Overrides default 'md' (12)
    xxl: 40, // Overrides default 'xxl' (32)
  }
});
```

## [Typography](./default-theme#fontsize)

The `fontSize` object defines the scale for text sizes.

### How it works
The `fontSize` property **replaces** the default object entirely. To modify specific sizes while keeping the rest, you must merge the default values manually.

```typescript
import { createTheme, defaultTheme } from '@flexnative/theme-context';

const defaults = defaultTheme();

const myTheme = createTheme({
  fontSize: {
    ...defaults.fontSize, // Spread existing defaults
    md: 18, // Override body size
    xl: 28  // Override heading size
  }
});
```

## [Borders](./default-theme#borders)

The `borders` object contains two nested configurations: `width` and `radius`.

### How it works
The `createTheme` utility merges the top-level `borders` object, but **replaces** the nested `width` and `radius` objects if they are provided.

To safely customize borders, spread the existing definitions for the property you are changing.

```typescript
import { createTheme, defaultTheme } from '@flexnative/theme-context';

const defaults = defaultTheme();

const myTheme = createTheme({
  borders: {
    // We don't need to spread defaults.borders
    // here because createTheme does a shallow merge on 'borders'.
    // However, we MUST spread the nested objects.
    
    radius: {
      ...defaults.borders.radius,
      medium: 8, // Customize medium radius
      full: 100  // Customize full radius
    },
    // If 'width' is omitted here, the default 'width' object is preserved.
  }
});
```


## Step-by-Step Guide
Here is a comprehensive example of a custom theme implementation.

### 1. Define your Color Interface

Create a file (e.g., `theme.d.ts` or `types.ts`) to define your custom colors.

```typescript
// types.ts
export interface MyCustomColors {
  brand: string;
  secondary: string;
  warning: string;
}
```

### 2. Extend the ThemeProvider

The `ThemeProvider` is an abstract class.
You must extend it to implement storage logic (e.g., using `AsyncStorage`) and to initialize your custom theme.

```tsx
// AppThemeProvider.tsx
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { ThemeProvider, BaseTheme, defaultTheme, createTheme } from '@flexnative/theme-context';
import { MyCustomColors } from './types';

// 1. Get defaults to assist with merging
const defaults = defaultTheme();

// 2. Create the custom theme
const customTheme = createTheme({
  // Colors (merged automatically)
  colors: {
    brand: '#6200ee',
    secondary: '#03dac6',
    warning: '#f1c40f'
  },
  
  // Spaces (merged automatically)
  spaces: {
    md: 16,
    lg: 24,
  },

  // Font Sizes (Replaced - requires spread)
  fontSize: {
    ...defaults.fontSize,
    xl: 24,
    xxl: 32,
  },

  // Borders (Properties replaced - requires spread on nested objects)
  borders: {
    radius: {
      ...defaults.borders.radius,
      small: 6,
    }
  }
});

// Extend the abstract ThemeProvider
export class AppThemeProvider extends ThemeProvider<MyCustomColors, {}> {
  constructor(props: any) {
    super({ ...props, theme: myTheme });
  }

  // Implement abstract methods for persistence
  protected async onLoad() {
    // Load theme/scheme from storage
  }

  protected async onChangeColorScheme(scheme: ColorSchemeName) {
    // Save scheme preference
  }

  protected async onChangeTheme<T>(theme: T) {
    // Save theme preference
    this.setState({ theme: theme as BaseTheme<MyCustomColors> });
  }
}
```

### 3. Use Typed Hooks

To access your custom colors in components, use the `useThemeColors` hook with your interface.

```tsx
// MyComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useThemeColors } from '@flexnative/theme-context';
import { MyCustomColors } from './types';

export const MyComponent = () => {
  // Pass the generic to get typed colors
  const colors = useThemeColors<MyCustomColors>();

  return (
    <View style={{ backgroundColor: colors.brand }}>
      <Text style={{ color: colors.secondary }}>
        Custom Themed Text
      </Text>
    </View>
  );
};
```