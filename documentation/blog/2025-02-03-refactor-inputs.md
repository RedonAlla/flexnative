---
slug: fce5c91
title: 🛠️ Inputs refactor
description: refactor(inputs) make color prop optional and update fallback logic
authors: RedonAlla
tags: [inputs_v0.0.13, inputs]
---

## 🛠️ Inputs refactor

**[#fce5c91](https://github.com/RedonAlla/flexnative/commit/fce5c91) refactor(inputs): make color prop optional and update fallback logic**

This commit updates the `ContainerProps` type definition in `input.styles.ts`, making the `color` property optional. Additionally, it modifies the `createStyles` function to provide a default theme color when `color` is not specified. In `number-text-box/index.tsx`, the usage of the `color` prop is updated to accommodate this change. The version in `package.json` is incremented from 0.0.12 to 0.0.13 to reflect these non-breaking changes.
