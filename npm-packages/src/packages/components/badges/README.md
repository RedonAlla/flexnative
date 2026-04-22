# @flexnative/badges

[![npm version](https://img.shields.io/npm/v/@flexnative/badges.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/badges)
[![npm downloads](https://img.shields.io/npm/dt/@flexnative/badges.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/badges)
[![GitHub source code](https://img.shields.io/badge/github-source%20code-blue?logo=github)](https://github.com/RedonAlla/flexnative/tree/main/npm-packages/src/packages/context/badges)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/RedonAlla/flexnative/issues)
[![npm unpacked size](https://img.shields.io/npm/unpacked-size/@flexnative/badges.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/badges)
[![language](https://img.shields.io/github/languages/top/RedonAlla/flexnative?logo=github)](https://github.com/RedonAlla/flexnative)
[![npm last update](https://img.shields.io/npm/last-update/@flexnative/badges.svg?logo=npm&label=last%20publish)](https://www.npmjs.com/package/@flexnative/badges)
[![npm license](https://img.shields.io/npm/l/@flexnative/badges?logo=opensourceinitiative)](https://www.npmjs.com/package/@flexnative/badges)


A set of highly customizable, themeable, and performant badge components for React Native applications. Part of the Flexnative UI ecosystem, these components are designed to provide clear visual indicators for status, counts, or categories.

## Installation

Install the package via npm or yarn:

```bash
npm install @flexnative/badges @flexnative/theme-context
```

or

```bash
yarn add @flexnative/badges @flexnative/theme-context
```

## Usage

Wrap your application with the `ThemeProvider` and start using the `Badge` component.

```tsx
import React from 'react';
import { View } from 'react-native';
import { Badge } from '@flexnative/badges';
import { ThemeProvider } from '@flexnative/theme-context';

const App = () => {
  return (
    <ThemeProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Badge label="New" type="primary" position="top-right">
          <View style={{ width: 50, height: 50, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Item</Text>
          </View>
        </Badge>

        <Badge label={3} type="info" position="bottom-left" radius="sm">
          <View style={{ width: 60, height: 60, backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cart</Text>
          </View>
        </Badge>
      </View>
    </ThemeProvider>
  );
};

export default App;
```

## Properties

:::info
**`BadgedProps`** props extends [`TextProps`](https://reactnative.dev/docs/text-style-props)
so any [`TextProps`](https://reactnative.dev/docs/text-style-props) properties are also applicable in **`BadgedProps`**
:::

| Prop | Type | Required | Default | Description |
| :--- | :--- | :------- | :------ | :---------- |
| text | `string` | ✅ | `undefined` | The text content to be displayed within the badge. |
| textColor | [`ColorValue`](https://reactnative.dev/docs/colors) | 🔲 | `undefined` |  Custom styles for the badge label text. |
| children | [`React.ReactNode`](https://reactnative.dev/docs/react-node) | 🔲 | The content that the badge will be positioned relative to. The badge will appear on top of this content. |
| borderWidth | [`BorderWidth`](https://redonalla.github.io/flexnative/docs/theme/default-theme#borderwidth) | 🔲 | `none` | Optional border width for the badge. |
| position | [`BadgePosition`](#badgeposition) | 🔲 | `top-right` | Specifies the corner where the badge will be positioned relative to its children.  |
| borderColor | [`ColorValue`](https://reactnative.dev/docs/colors) | 🔲 | `undefined` | BCustom border color for the badge. |
| size | [`FontSize`](https://redonalla.github.io/flexnative/docs/theme/default-theme#fontsize) | `md` | 🔲 | Badged Size variable. |
| radius | [`BorderRadius`](https://redonalla.github.io/flexnative/docs/theme/default-theme#borderradius) |  🔲 |`full` | Badged Size variable. |
| color | [`ColorValue`](https://redonalla.github.io/flexnative/docs/theme/default-theme#basecolors) | 🔲 | `error` | Color by theme or a custom color. |


### BadgePosition Type

BadgePosition is a type that defines predefined positions for the badge when it's used with children.

| Value | Description |
| :---- | :---------- |
| 'top-left' | Positions the badge at the `top-left` corner (e.g., `{ top: -10, left: -10 }`). |
| 'top-right' | Positions the badge at the `top-right` corner (e.g., `{ top: -10, right: -10 }`). |
| 'bottom-left' | Positions the badge at the `bottom-left` corner (e.g., `{ bottom: -10, left: -10 }`). |
| 'bottom-right' | Positions the badge at the `bottom-right` corner (e.g., `{ bottom: -10, right: -10 }`). |

## License

Licensed under the MIT License.


---
Built with ❤️ for the Flexnative ecosystem.