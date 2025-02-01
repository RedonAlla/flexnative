---
slug: 93429af
title: 🛠️ Inputs refactor
description: refactor(inputs) make certain props optional and handle non-null assertions
authors: RedonAlla
tags: [inputs_v0.0.10]
---

## 🛠️ Inputs refactor

**[#93429af](https://github.com/RedonAlla/flexnative/commit/93429af) refactor(inputs): make certain props optional and handle non-null assertions**

Changed `type`, `size`, and `radius` in `BaseInputProps` from required to optional by using '?' modifier. Updated TypeScript code in `number-text-box` and `text-box` components to use non-null assertion operator for these properties where necessary. This change provides more flexibility when using the input components, allowing for default values to be applied if these attributes are not specified explicitly. Additionally, incremented package version from 0.0.9 to 0.0.10.
