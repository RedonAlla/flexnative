---
slug: 7834392
title: 🛠️ Inputs refactor
description: refactor(inputs) update default size and theme structure
authors: RedonAlla
tags: [inputs_v0.0.3, inputs]
---

**[#7834392](https://github.com/RedonAlla/flexnative/commit/7834392) refactor(inputs): update default size and theme structure**

Changed the default size from `default` to `medium` using nullish coalescing for improved clarity.
Refactored the theme structure by removing redundant `isDark` context, now relying solely on `colors`.
Import paths for `BorderRadius`, `BorderWidth`, and `Sizes` are updated to use `@flexnative/theme-context` for better modularity and alignment with the project architecture.
These changes streamline the component's configuration and enhance maintainability.
