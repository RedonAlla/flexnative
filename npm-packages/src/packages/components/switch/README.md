# @flexnative/switch

[![npm version](https://img.shields.io/npm/v/@flexnative/switch.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/switch)
[![npm downloads](https://img.shields.io/npm/dt/@flexnative/switch.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/switch)
[![GitHub source code](https://img.shields.io/badge/github-source%20code-blue?logo=github)](https://github.com/RedonAlla/flexnative/tree/main/npm-packages/src/packages/components/switch)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/RedonAlla/flexnative/issues)
[![npm unpacked size](https://img.shields.io/npm/unpacked-size/@flexnative/switch.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/switch)
[![language](https://img.shields.io/github/languages/top/RedonAlla/flexnative?logo=github)](https://github.com/RedonAlla/flexnative)
[![npm last update](https://img.shields.io/npm/last-update/@flexnative/switch.svg?logo=npm&label=last%20publish)](https://www.npmjs.com/package/@flexnative/switch)
[![npm license](https://img.shields.io/npm/l/@flexnative/switch?logo=opensourceinitiative)](https://www.npmjs.com/package/@flexnative/switch)


A highly customizable and universal switch component for React Native and Web, part of the FlexNative design system.

[![npm version](https://img.shields.io/npm/v/@flexnative/switch.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/switch)
[![license](https://img.shields.io/npm/l/@flexnative/switch?logo=opensourceinitiative)](https://github.com/RedonAlla/flexnative/blob/main/LICENSE)

## Features

- 🌐 **Universal**: Works seamlessly on Android, iOS, and Web.
- 🎨 **Themed**: Integrated with `@flexnative/theme-context` for consistent styling.
- ⚡ **Smooth Animations**: Powered by React Native's Animated API for high-performance transitions.
- 🔧 **Customizable**: Control colors, dimensions, and animation duration with ease.
- 📝 **TypeScript**: Fully typed for a great developer experience.

## Installation

Install the package via npm or yarn:

```bash
npm install @flexnative/switch
# or
yarn add @flexnative/switch
```

### Peer Dependencies

This component requires `react-native-svg` and `@flexnative/theme-context`. Ensure they are installed in your project:

```bash
npm install react-native-svg @flexnative/theme-context
```

## Usage

```tsx
import React, { useState } from 'react';
import Switch from '@flexnative/switch';

const Example = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      value={isEnabled}
      onValueChange={(value) => setIsEnabled(value)}
      activeTrackColor="#2ecc71"
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| value | `boolean` | `false` | The value of the switch. |
| onValueChange | `(value: boolean) => void` | `undefined` | Callback called when the value changes. |
| activeTrackColor | `ColorValue` | `theme.colors.primary` | Background color when the switch is ON. |
| inactiveTrackColor` | `ColorValue` | `theme.colors.default` | Background color when the switch is OFF. |
| thumbColor | `ColorValue` | `theme.colors.card` | Color of the sliding thumb. |
| width | `number` | `50` | Total width of the switch component. |
| height | `number` | `28` | Total height of the switch component. |
| duration | `number` | `200` | Duration of the toggle animation in milliseconds. |

## Theming

The component automatically consumes colors from the `@flexnative/theme-context`. If you don't provide explicit colors via props, it will fallback to your theme's `primary`, `default`, and `card` colors.

## License

MIT © Redon Alla

---

For more information, visit the FlexNative Documentation.

Report issues on GitHub.