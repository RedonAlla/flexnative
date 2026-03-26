---
title: Fonts
sidebar_position: 4
---

# Fonts

FlexNative provides a platform-aware font system through the `Fonts` constant. This utility maps semantic font styles to the native system stacks of the underlying platform, ensuring your application feels native whether it's running on iOS, Android, or a browser.

## Platform Font Stacks

The `Fonts` object provides four standard font families. Below are the specific mappings used for each platform:

### iOS
Leverages the system font design descriptors introduced in iOS 13+.
- **sans**: `system-ui`
- **serif**: `ui-serif`
- **rounded**: `ui-rounded`
- **mono**: `ui-monospace`

### Web
Uses a robust fallback stack to ensure a high-quality experience across different operating systems and browsers.
- **sans**: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
- **serif**: `Georgia, 'Times New Roman', serif`
- **rounded**: `'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif`
- **mono**: `SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`

### Default (Android)
- **sans**: `normal`
- **serif**: `serif`
- **rounded**: `Roboto`
- **mono**: `monospace`

## Usage

You can import the `Fonts` constant directly into your style definitions to ensure cross-platform consistency.

```tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Fonts } from '@flexnative/theme-context';

const RoundedText = () => (
  <Text style={{ fontFamily: Fonts.rounded }}>
    This text uses the system rounded font design.
  </Text>
);
```

:::tip
The `rounded` font is particularly useful for modern, friendly UI designs. On Apple devices and supported browsers, it uses **SF Pro Rounded**, while falling back to **Roboto** on Android.
:::