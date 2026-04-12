---
title: Color Utilities
sidebar_position: 1
tags: [react, react-native, expo, framework, utilities, theme, flexnative]
---

# Color Utilities

The `colors-utilities` module provides a set of helper functions to dynamically manipulate colors.
These are particularly useful for creating interactive states (like hover or active/pressed) and generating subtle variations of your theme colors automatically.

## State Utilities

These functions adjust a base color to create a visual indicator for interaction states, taking the current color scheme (light/dark) into account to ensure visibility.

### applyHoverColor

Generates a color for the "hover" state.
It automatically adjusts brightness based on the active color scheme to ensure contrast.

- **Light Mode:** Darkens the base color.
- **Dark Mode:** Lightens the base color.

```typescript
import { applyHoverColor } from '@flexnative/theme-context';

// Usage in a component
const hoverColor = applyHoverColor('#FF0000', 'light'); 
// Result: A slightly darker red
```

### applyActiveColor

Generates a color for the "active" or "pressed" state.
Similar to hover, it adjusts brightness based on the scheme but typically applies a stronger effect to denote a click or touch event.

```typescript
import { applyActiveColor } from '@flexnative/theme-context';

const pressedColor = applyActiveColor('#FF0000', 'dark');
// Result: A lighter red (since it's dark mode)
```

## Subtle Utilities

These functions are designed to create faint, transparent-like variations of a color, often used for backgrounds of selected items, subtle borders, or secondary indicators.

### subtleColor

Creates a very transparent version of the base color. Useful for backgrounds that need to hint at a brand color without being overwhelming.

```typescript
import { subtleColor } from '@flexnative/theme-context';

const background = subtleColor('#6200EE');
```

### subtleHoverColor

A slightly more opaque version of the subtle color, used when hovering over a subtle element.

```typescript
import { subtleHoverColor } from '@flexnative/theme-context';

const hoverBackground = subtleHoverColor('#6200EE');
```

### subtleActiveColor

A distinct version of the subtle color for active interaction.

```typescript
import { subtleActiveColor } from '@flexnative/theme-context';

const activeBackground = subtleActiveColor('#6200EE');
```