---
slug: 76ff988
title: 🪲 Inputs fix
description: fix(inputs) correct theme color reference for error state
authors: RedonAlla
tags: [inputs_v0.0.12, inputs]
---

## 🪲 Inputs fix

**[#76ff988](https://github.com/RedonAlla/flexnative/commit/76ff988) fix(inputs): correct theme color reference for error state**

Updated the color property in input and label styles to use 'props.theme.colors.error' instead of the incorrect 'props.theme.colors.isError'. This ensures that the appropriate error color is applied when 'isError' is true, maintaining consistency across the component's error styling. Additionally, incremented the package version from 0.0.11 to 0.0.12 to reflect this change.
