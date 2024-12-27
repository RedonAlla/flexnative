---
slug: 8194945
title: ✨ Theme Context 0.0.7
description: feat(theme-context) enhance theme initialization with device color scheme
authors: RedonAlla
tags: [theme-context.0.0.7]
---

## ✨ Version 0.0.7

**[#8194945](https://github.com/RedonAlla/flexnative/commit/8194945) feat(theme-context): enhance theme initialization with device color scheme**

Updated the `ThemeProvider` to incorporate the device's current color scheme using React Native's Appearance API. This change allows themes to default to the user's preferred `light` or `dark` mode setting if not explicitly provided. Additionally, made the `theme` prop optional in `ThemeProviderProps` and enhanced type handling for colors. This modification improves user experience by aligning app theming with system preferences, ensuring a more consistent aesthetic across applications.
