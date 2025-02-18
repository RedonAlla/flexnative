---
slug: 1f75cdd
title: 🛠️ Inputs refactor
description: refactor(inputs) update version and adjust layout styles
authors: RedonAlla
tags: [inputs_v0.0.9, inputs]
---

## 🛠️ Inputs refactor

**[#1f75cdd](https://github.com/RedonAlla/flexnative/commit/1f75cdd) refactor(inputs): update version and adjust layout styles**

Bump the package version from 0.0.4 to 0.0.9 in preparation for a new release. Removed the 'flex: 1' style from the wrapper in `input.styles.ts` to allow for better flexibility. Applied conditional styling in `text-box.tsx` to maintain 'flex: 1' only when the 'material' prop is not present, improving layout behavior based on component props.
