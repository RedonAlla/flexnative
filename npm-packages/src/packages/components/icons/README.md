# @flexnative/icons


[![npm version](https://img.shields.io/npm/v/@flexnative/icons.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/icons)
[![npm downloads](https://img.shields.io/npm/dt/@flexnative/icons.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/icons)
[![GitHub source code](https://img.shields.io/badge/github-source%20code-blue?logo=github)](https://github.com/RedonAlla/flexnative/tree/main/npm-packages/src/packages/context/icons)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/RedonAlla/flexnative/issues)
[![npm unpacked size](https://img.shields.io/npm/unpacked-size/@flexnative/icons.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/icons)
[![language](https://img.shields.io/github/languages/top/RedonAlla/flexnative?logo=github)](https://github.com/RedonAlla/flexnative)
[![npm last update](https://img.shields.io/npm/last-update/@flexnative/icons.svg?logo=npm&label=last%20publish)](https://www.npmjs.com/package/@flexnative/icons)[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@flexnative/icons.svg)](https://bundlephobia.com/package/@flexnative/icons)
[![npm license](https://img.shields.io/npm/l/@flexnative/icons?logo=opensourceinitiative)](https://www.npmjs.com/package/@flexnative/icons)


A flexible and animated icon component library for React Native, built with `react-native-reanimated` and integrated with `@flexnative/icons`.

## Installation

```bash
npm install @flexnative/icons
# or
yarn add @flexnative/icons
```

This package depends on `react-native-reanimated`. Make sure it is installed and configured in your project.

## Setup

Wrap your application (or the component tree where you intend to use icons) with the `IconProvider`. This allows you to map icon names to your actual icon assets (SVGs, font characters, or images).

```tsx
import React from 'react';
import { IconProvider } from '@flexnative/icons';
import { View } from 'react-native';

// Define your icon mapping
const myIcons = {
  home: '🏠', // Can be strings, SVG components, etc.
  settings: '⚙️',
  heart: '❤️',
  loading: '⏳',
  alert: '⚠️',
};

export default function App() {
  return (
    <IconProvider icons={myIcons}>
      <View style={{ flex: 1 }}>
        {/* Your app content */}
      </View>
    </IconProvider>
  );
}
```

## Usage

### Basic Icon

Use the `Icon` component to display a static icon. It resolves styles (color, size) from the `@flexnative/icons`.

```tsx
import { Icon } from '@flexnative/icons';

<Icon name="home" size="md" color="primary" />
```

### Animated Icon

Use the `AnimatedIcon` component to display icons with built-in animations. You can switch animations using the `animation` prop.

```tsx
import { AnimatedIcon } from '@flexnative/icons';

<AnimatedIcon 
  name="heart" 
  animation="heartbeat" 
  size="xl" 
  color="error" 
  duration={1200} 
/>
```

### Specific Animated Components

You can also import specific animated components directly for better type safety or specific props.

```tsx
import { 
  BounceIcon, 
  FadeIcon, 
  GlitchIcon, 
  HeartbeatIcon, 
  PulseIcon, 
  ShakeIcon, 
  Spinner, 
  WiggleIcon 
} from '@flexnative/icons';

<Spinner name="loading" />
<HeartbeatIcon name="heart" pulseColor="#ff0000" />
<GlitchIcon name="alert" amplitude={6} />
```

## Available Animations

| Animation | Component | Description |
|---|---|---|
| `bounce` | `BounceIcon` | Scales the icon up and down continuously. |
| `fade` | `FadeIcon` | Pulses the opacity of the icon. |
| `glitch` | `GlitchIcon` | Randomly shifts the icon position and opacity to simulate a glitch effect. |
| `heartbeat` | `HeartbeatIcon` | Mimics a cardiac rhythm (lub-dub) using scale. |
| `pulse` | `PulseIcon` | Animates the `backgroundColor` opacity (breathing effect). |
| `shake` | `ShakeIcon` | Rotates the icon back and forth quickly. |
| `spin` | `Spinner` | Rotates the icon 360 degrees infinitely. |
| `wiggle` | `WiggleIcon` | Rotates the icon back and forth gently. |

## Props

Common props for animated icons:

*   **`duration`** (`number`): The duration of one animation cycle in milliseconds.
*   **`delay`** (`number`): Delay before the animation starts in milliseconds.
*   **`pulseColor`** (`string`): *(HeartbeatIcon only)* The color to interpolate to during the beat.
*   **`amplitude`** (`number`): *(GlitchIcon only)* The intensity of the glitch displacement.
