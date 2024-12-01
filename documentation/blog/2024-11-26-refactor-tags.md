---
slug: d5a4ed7
title: 🛠️ Tags refactor
description: refactor(tags) remove ui-constants dependency and refactor type definitions
authors: RedonAlla
tags: [component, refactor]
---

**[#d5a4ed7](https://github.com/RedonAlla/flexnative/commit/d5a4ed7) refactor(tags): remove ui-constants dependency and refactor type definitions**

This commit removes the `@flexnative/ui-constants` dependency from the `ra-tags` component, replacing hardcoded values and constants with locally defined equivalents for padding and action elements. It also refactors type definitions by aligning them more closely with `@flexnative/theme-context`, ensuring consistency across different parts of the application.

The removal of `ui-constants` simplifies the dependencies and allows for more flexibility and maintainability within the module. Additionally, it updates the logic in utility functions to improve clarity and reusability of color handling within tags. This refactoring might require testing to ensure compatibility with existing themes and styles.
