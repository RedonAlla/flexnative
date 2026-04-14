# @flexnative/skeleton-loading

[![npm version](https://img.shields.io/npm/v/@flexnative/skeleton-loading.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/skeleton-loading)
[![npm downloads](https://img.shields.io/npm/dt/@flexnative/skeleton-loading.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/skeleton-loading)
[![GitHub source code](https://img.shields.io/badge/github-source%20code-blue?logo=github)](https://github.com/RedonAlla/flexnative/tree/main/npm-packages/src/packages/components/skeleton-loading)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/RedonAlla/flexnative/issues)
[![npm unpacked size](https://img.shields.io/npm/unpacked-size/@flexnative/skeleton-loading.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/skeleton-loading)
[![language](https://img.shields.io/github/languages/top/RedonAlla/flexnative?logo=github)](https://github.com/RedonAlla/flexnative)
[![npm last update](https://img.shields.io/npm/last-update/@flexnative/skeleton-loading.svg?logo=npm&label=last%20publish)](https://www.npmjs.com/package/@flexnative/skeleton-loading)
[![npm license](https://img.shields.io/npm/l/@flexnative/skeleton-loading?logo=opensourceinitiative)](https://www.npmjs.com/package/@flexnative/skeleton-loading)


A performance-optimized and highly customizable skeleton loading component for React Native, utilizing SVG animations and integrated with the FlexNative theme system.

The **FlexNative Skeleton Loading** is part of the `FlexNative` ecosystem and provides a polished way to handle loading states in your application.

## Installation

```sh
npm install @flexnative/skeleton-loading
```

## Dependencies

This package requires the following dependencies to be installed in your project:

- `@flexnative/theme-context`
- `react-native-svg`

## Features

- **Performance Optimized:** Fluid animations designed to run efficiently on mobile devices.
- **SVG-Powered:** Utilizes `react-native-svg` for high-quality, scalable loading placeholders.
- **Theme Integration:** Seamlessly works with `@flexnative/theme-context` to adapt to light and dark modes automatically.
- **Highly Customizable:** Easily configure shapes, sizes, colors, and animation behaviors.

## Usage

```tsx
import React from 'react';
import SkeletonLoader, { Rect, Circle } from '@flexnative/skeleton-loading';

const LoadingPlaceholder = () => {
  return (
    <SkeletonLoader width="100%" height={120}>
      <Rect x="48" y="8" rx="3" ry="3" width="88" height="10" />
      <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <Circle cx="20" cy="20" r="20" />
    </SkeletonLoader>
  );
};
```

## API Reference

**SkeletonLoader** extends SVG props via `IContentLoaderProps`.

| Name | Type | Default | Description |
|-----|------|---------|-------------|
| animate | `boolean` | `true` | Animate the shimmer effect. |
| backgroundColor | `ColorValue` | theme-based | Background color. |
| foregroundColor | `ColorValue` | theme.card | Foreground/shimmer color. |
| speed | `number` | `1.2` | Animation speed multiplier. |
| interval | `number` | `0.25` | Animation pause between cycles. |
| uniqueKey | `string` | auto-generated | Key for animation uniqueness. |
| beforeMask | `React.ReactElement` | - | Custom element before mask. |

See full [props in docs](../documentation BACK/docs/components/skeleton-loading/index.mdx).

## Advanced Example (Custom Colors)

```tsx
<SkeletonLoader 
  width={'100%'} 
  height={110} 
  backgroundColor='crimson' 
  foregroundColor='#FFC436'
  speed={0.8}
>
  <Rect x="0" y="56" rx="3" ry="3" width="100%" height="6" />
</SkeletonLoader>
```

