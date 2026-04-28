---
title: Badges
sidebar_class_name: nav_session badges
last_update:
  date: 2026-04-14
  author: Redon Alla
tags: [react, react-native, expo, framework, component, flexnative, badges]
---

[![npm version](https://img.shields.io/npm/v/@flexnative/badges.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/badges)
[![npm downloads](https://img.shields.io/npm/dt/@flexnative/badges.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/badges)
[![GitHub source code](https://img.shields.io/badge/github-source%20code-blue?logo=github)](https://github.com/RedonAlla/flexnative/tree/main/npm-packages/src/packages/context/badges)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/RedonAlla/flexnative/issues)
[![npm unpacked size](https://img.shields.io/npm/unpacked-size/@flexnative/badges.svg?logo=npm)](https://www.npmjs.com/package/@flexnative/badges)
[![language](https://img.shields.io/github/languages/top/RedonAlla/flexnative?logo=github)](https://github.com/RedonAlla/flexnative)
[![npm last update](https://img.shields.io/npm/last-update/@flexnative/badges.svg?logo=npm&label=last%20publish)](https://www.npmjs.com/package/@flexnative/badges)
[![npm license](https://img.shields.io/npm/l/@flexnative/badges?logo=opensourceinitiative)](https://www.npmjs.com/package/@flexnative/badges)

The `@flexnative/badges` package is a collection of highly customizable, themeable, and performant badge components designed specifically for React Native applications.
It is part of the Flexnative UI ecosystem.

Its primary purposes include:

* **Visual Indicators**: Providing clear visual cues for status, counts (like unread notifications), or categories.
* **Contextual Information**: Overlaying information (labels or numbers) on top of other components, such as icons, avatars, or containers, using predefined positions (e.g., `top-right`, `bottom-left`).
* **Theming Integration**: It is built to work seamlessly with `@flexnative/theme-context`, allowing the badges to adapt automatically to the application's global theme (colors, sizes, and spacing).
* **Customization**: Offering flexibility in appearance through various variants (standard, outline, dot), sizes (small, medium, large), and shapes (via radius properties).

In short, it simplifies the process of adding professional, consistent, and responsive badges to a React Native mobile interface.

import Installation from '../../_installation.mdx';

<Installation title="Badges" name='@flexnative/badges' />

## API

```typescript
import Badge from '@flexnative/badges';
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
| borderWidth | [`BorderWidth`](../../theme/default-theme#borderwidth) | 🔲 | `none` | Optional border width for the badge. |
| position | [`BadgePosition`](#badgeposition) | 🔲 | `top-right` | Specifies the corner where the badge will be positioned relative to its children.  |
| borderColor | [`ColorValue`](https://reactnative.dev/docs/colors) | 🔲 | `undefined` | BCustom border color for the badge. |
| size | [`FontSize`](../../theme/default-theme#fontsize) | 🔲 | `md` | Badged Size variable. |
| radius | [`BorderRadius`](../../theme/default-theme#borderradius) |  🔲 |`full` | Badged Size variable. |
| color | [`ColorValue`](../../theme/default-theme#basecolors) | 🔲 | `error` | Color by theme or a custom color. |


### BadgePosition Type

BadgePosition is a type that defines predefined positions for the badge when it's used with children.

| Value | Description |
| :---- | :---------- |
| 'top-left' | Positions the badge at the `top-left` corner (e.g., `{ top: -10, left: -10 }`). |
| 'top-right' | Positions the badge at the `top-right` corner (e.g., `{ top: -10, right: -10 }`). |
| 'bottom-left' | Positions the badge at the `bottom-left` corner (e.g., `{ bottom: -10, left: -10 }`). |
| 'bottom-right' | Positions the badge at the `bottom-right` corner (e.g., `{ bottom: -10, right: -10 }`). |

## Playground

```typescript live noInline
//Play with props to see live changes;

render(
  <Badge text="10" color='primary'>
    <Icon name='star'
        size={128}
        color='primary'
        backgroundColor='#ebedf0'
        borderRadius={64}
    />
  </Badge>
);
```


## Example used

```tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Badge } from '@flexnative/badges';
import { ThemeProvider } from '@flexnative/theme-context';

const BadgeDotExample = () => {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        {/* 
          The 'dot' variant provides a small circular indicator.
          Commonly used for presence/status.
        */}
        <Badge
          variant="dot"
          type="success"
          position="top-right"
          label="" // The dot variant doesn't display label text
        >
          <View style={styles.avatarPlaceholder}>
            <Text>User</Text>
          </View>
        </Badge>
        
        <Text style={styles.description}>Online Status Indicator</Text>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 12
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
  }
});

export default BadgeDotExample;
```