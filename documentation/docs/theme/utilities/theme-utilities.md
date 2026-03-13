---
title: Theme Utilities
sidebar_position: 2
---

# Theme Utilities

The `theme-utilities` module exports helper functions that are essential for initializing and customizing the theme configuration in FlexNative.

## Functions

### `createTheme`

This is the primary function for generating a theme object.
It takes a partial theme configuration and merges it with the [default theme values](../default-theme.mdx).

Use this function when you want to override specific parts of the theme (like colors or spacing) while keeping the rest of the defaults intact.

**Syntax:**
```typescript
function createTheme<TColors>(props: Partial<BaseTheme<TColors>>): BaseTheme<TColors>
```

**Example:**
```typescript
import { createTheme } from '@flexnative/theme-context';

const myTheme = createTheme({
  // Override specific colors
  colors: {
    primary: '#6200EE',
  },
  // Override specific spacing
  spaces: {
    md: 20,
  }
});
```

---

### `defaultTheme`

Generates the standard default theme object based on the device's current appearance (light or dark mode).
It includes the default palettes for colors, font sizes, spacing, and borders.

You generally use this internally or as a baseline if you are building a completely manual theme setup.

**Syntax:**
```typescript
function defaultTheme(): BaseTheme<BaseColors>
```

**Example:**
```typescript
import { defaultTheme } from '@flexnative/theme-context';

const base = defaultTheme();
console.log(base.isDark); // true or false based on device
```

---

### `defaultColors`

Returns the default color palette.
It automatically detects the system's color scheme (light vs. dark) but can also be forced to return a specific scheme.

**Syntax:**
```typescript
function defaultColors<TColors>(userScheme?: ColorSchemeName): BaseColors & TColors
```

**Example:**
```typescript
import { defaultColors } from '@flexnative/theme-context';

// Force 'dark' mode colors regardless of system settings
const darkPalette = defaultColors('dark');
```