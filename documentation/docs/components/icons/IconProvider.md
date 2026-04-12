---
title: IconProvider
sidebar_position: 1
last_update:
  date: 2026-03-21
  author: Redon Alla
tags: [react, react-native, expo, framework, component, flexnative, icons]
---

IconProvider implements the **React Context API** for your icon system.
Its primary purpose is to allow your icon configuration (the mapping of icon names to their SVG/font data) to be defined once at the top of your application and accessed by any component deep in the component tree without having to pass the icons prop down manually through every level (prop drilling).

Here is a breakdown of its parts:

1. **IconContext**: Creates the context object that holds the icon set data.
2. **IconProvider**: A wrapper component that you place at the root of your application (or part of it).
  It accepts the icons prop and "broadcasts" it to 1. **all children.
3. **useIcon**: A custom hook that allows child components to easily retrieve a specific icon's data by its name.

## IconProvider

`IconProvider` acts as the central store for your application's icon set.
It uses the React Context API to make icons available to all child components without the need for prop drilling.

You must wrap your application (or the part of the tree that uses icons) with this provider and pass your generated icon configuration to the `icons` prop.

### Properties (IconProviderProps)

| Property	| Type |	Required	| Description |
| --------	| ---- |	--------	| ----------- |
| children |	[`React.ReactNode`](https://reactnative.dev/docs/react-node) | **Yes**	| The child components of the provider. These components and their descendants will have access to the icon context. |
| icons	| `Record<string, string>` |	**Yes**	| An object where keys are icon names and values are the corresponding character codes (glyphs). This is typically generated using utilities like `createIconSetFromIcoMoon`. |


### Example
```tsx
import { IconProvider } from '@flexnative/icons';
import config from './path/to/selection.json';
import createIconSetFromIcoMoon from '@flexnative/icons/dist/utilities';

const icons = createIconSetFromIcoMoon(config);

function App() {
  return (
    <IconProvider icons={icons}>
      <YourAppComponents />
    </IconProvider>
  );
}
```

## useIcon

A custom hook to retrieve the definition of a specific icon by its name.
This hook must be used within a component that is a descendant of `IconProvider`.

### Example

```tsx
const iconData = useIcon('home');
```