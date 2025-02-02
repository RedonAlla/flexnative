---
slug: b3713dd
title: 🛠️ Inputs refactor
description: feat(inputs) add isError prop to enhance error handling
authors: RedonAlla
tags: [inputs_v0.0.11]
---

**[#b3713dd](https://github.com/RedonAlla/flexnative/commit/b3713dd) feat(inputs): add isError prop to enhance error handling**

Added the `isError` property to the input components within the ra-inputs package, allowing for improved error state management. This change updates the component styles to display error-specific colors when `isError` is true, ensuring consistent visual feedback. Additionally, certain optional properties like `borderWidth` and `disabled` are now explicitly marked as optional in the TypeScript interfaces, increasing flexibility in their usage. These enhancements collectively improve the user experience by providing clearer input validation feedback. Additionally, incremented package version from 0.0.10 to 0.0.11.
