# Changelog

## 0.1.4 (2026-03-29)

### Features

- **Initial Release**: High-performance, customizable slider component for React Native.
- **Theming**: Fully integrated with `@flexnative/theme-context` for automatic color, spacing, and variant support.
- **Performance**: Optimized with `PureComponent` and `react-native-reanimated` for smooth, native-driven 60FPS animations.
- **SVG Support**: Integrated with `react-native-svg` for highly customizable track and thumb rendering.
- **RTL Support**: Full support for Right-to-Left layouts.
- **Range Support**: Added dual-thumb support for range selection using the `range` prop.
- **Stepped Values**: Support for both continuous sliding and discrete increments via the `step` prop.
- **Accessibility**: Comprehensive built-in support for accessibility labels, roles, and test IDs.

### Usage Instructions

The `@flexnative/slider` can be used by importing it and providing control props:

```tsx
import React from 'react';
import Slider from '@flexnative/slider';

const MyComponent = () => (
  <Slider value={0.5} onValueChange={(v) => console.log(v)} />
);
```

For a complete list of props and advanced customization examples, refer to the README.md.
