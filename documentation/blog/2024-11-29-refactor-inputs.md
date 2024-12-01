---
slug: 80ff097
title: 🛠️ Inputs refactor
description: refactor(inputs) update theme handling and optimize component imports
authors: RedonAlla
tags: [component, refactor]
---

**[#80ff097](https://github.com/RedonAlla/flexnative/commit/80ff097) refactor(inputs): update theme handling and optimize component imports**

This commit includes the following changes:
- Theme context usage updated to simplify access to theming properties by removing `.colors` where applicable.
- Reorganized and optimized import paths and component structures, including moving `input-adornment.tsx` logic to `input-icon.tsx` for better cohesion.
- Introduction of new components such as `InputIcon`, `HelperText`, and `ActionContainer` to enhance code modularity and readability.
- Improved styling logic through adjustments to constants and styles definitions, focusing on consistency across components.
- Deletion of obsolete components that have been refactored elsewhere in the project.
These updates aim to streamline the codebase, reduce redundancy, and improve the overall maintainability of the input components.
