# @flexnative/slider


[![npm version](https://img.shields.io/npm/v/@flexnative/slider.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/slider)
[![npm downloads](https://img.shields.io/npm/dt/@flexnative/slider.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/slider)
[![GitHub source code](https://img.shields.io/badge/github-source%20code-blue?logo=github)](https://github.com/RedonAlla/flexnative/tree/main/npm-packages/src/packages/components/slider)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/RedonAlla/flexnative/issues)
[![npm unpacked size](https://img.shields.io/npm/unpacked-size/@flexnative/slider.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/slider)
[![language](https://img.shields.io/github/languages/top/RedonAlla/flexnative?logo=github)](https://github.com/RedonAlla/flexnative)
[![npm last update](https://img.shields.io/npm/last-update/@flexnative/slider.svg?logo=npm&label=last%20publish)](https://www.npmjs.com/package/@flexnative/slider)
[![npm license](https://img.shields.io/npm/l/@flexnative/slider?logo=opensourceinitiative)](https://www.npmjs.com/package/@flexnative/slider)

A flexible, performance-optimized, and highly customizable slider component for React Native, built with `Animated` and integrated with the FlexNative theme system.

## Installation

```bash
npm install @flexnative/slider
# or
yarn add @flexnative/slider
```

### Peer Dependencies

This package requires the following peer dependencies to be installed in your project:

```bash
npm install react-native-reanimated react-native-svg @flexnative/theme-context
```

## Usage

### Basic Usage

```tsx
import React, { useState } from 'react';
import Slider from '@flexnative/slider';

export default function BasicExample() {
  const [value, setValue] = useState(0.5);

  return (
    <Slider
      value={value}
      onValueChange={setValue}
      minimumValue={0}
      maximumValue={1}
    />
  );
}
```

### Custom Styling

You can easily customize the track and thumb appearance:

```tsx
import Slider from '@flexnative/slider';

<Slider
  minimumTrackTintColor="#FF5733"
  maximumTrackTintColor="#D1D1D1"
  thumbTintColor="#C70039"
  trackStyle={{ height: 6 }}
  thumbStyle={{ width: 24, height: 24 }}
/>
```

### Range Slider
To enable range selection with two thumbs, set the range prop to true and provide an array of two numbers to the value prop.

```tsx
import Slider from '@flexnative/slider';

<Slider
  minimumTrackTintColor="#FF5733"
  maximumTrackTintColor="#D1D1D1"
  thumbTintColor="#C70039"
  trackStyle={{ height: 6 }}
  thumbStyle={{ width: 24, height: 24 }}
/>
```

## Props



## Features

- **Theme Integration:** Automatically uses colors and spacing from `@flexnative/theme-context`.
- **Performance:** Uses `PureComponent` and native-driven animations for smooth interactions.
- **RTL Support:** Fully compatible with Right-to-Left layouts.
- **Accessibility:** Built-in support for accessibility labels and test IDs.


## License

MIT