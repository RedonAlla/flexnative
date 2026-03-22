---
title: Show case
sidebar_position: 5
last_update:
  date: 2026-03-21
  author: Redon Alla
tags: [react, react-native, expo, framework, component, icons]
---

The following example demonstrates the Icons in action.

## Basic Icon
Use the Icon component to display a static icon.
It resolves styles (`color`, `size`) from the `@flexnative/icons`.

### IconProps

:::info

Inherits all other standard React Native [Text](https://reactnative.dev/docs/text#props) component props.

:::

| Property |	Type | Required | Default Value |	Description |
| -------- |	---- | -------- |	------------- | ----------- |
| name	| `string` |	**true** | `undefined` | The name of the icon to render. This must match a key in the icon set configuration passed to [`IconProvider`](./IconProvider.md#properties-iconproviderprops). |
| size |	[`FontSize`](../../theme/default-theme.mdx#fontsize) | **false** | `md` | Size of the icon. Values from the theme's `fontSize` or a numeric value. |
| color |	[`Color`](../../theme/default-theme.mdx#basecolors) |	**false** | `undefined` | The color of the icon. Can be a hex code, a standard color string, or a key from the theme colors. |
| backgroundColor	| [`ColorValue`](https://reactnative.dev/docs/colors) | **false** | `undefined` |	The background color of the icon. Supports theme color keys or standard color values. |
| borderRadius | [`Color`](../../theme/default-theme.mdx#borderradius) | **false** | `undefined` | Border radius for the icon background. Values from the theme's `borders.radius` or a numeric value. |

```tsx
import { Icon } from '@flexnative/icons';

<Icon name="home" size="md" color="primary" />
```

### Playground
Play with props to see live changes;

```typescript live noInline
// Play with props to see live changes;
render(
  <Icon name='star'
        size={128}
        color='primary'
        backgroundColor='#ebedf0'
        borderRadius={64}
  />
);
```

## Animated Icon
Use the `AnimatedIcon` component to display icons with built-in animations.
You can switch animations using the animation prop.

### AnimatedIconProps
:::info

Inherits all [IconProps](./show-case.md#iconprops) props.

:::

| Property |	Type |	Description |
| -------- |	---- | ------------ |
| duration | `number` | The duration of one animation cycle in milliseconds.
| delay | `number` | Delay before the animation starts in milliseconds. |
| pulseColor | `string` | *(`HeartbeatIcon` only)* The color to interpolate to during the beat. |
| amplitude | `number` | *(`GlitchIcon` only)* The intensity of the glitch displacement. |


### Available Animations

| Animation | Component | Description |
|---|---|---|
| `bounce` | `BounceIcon` | Scales the icon up and down continuously. |
| `fade` | `FadeIcon` | Pulses the opacity of the icon. |
| `glitch` | `GlitchIcon` | Randomly shifts the icon position and opacity to simulate a glitch effect. |
| `heartbeat` | `HeartbeatIcon` | Mimics a cardiac rhythm (lub-dub) using scale. |
| `pulse` | `PulseIcon` | Animates the `backgroundColor` opacity (breathing effect). |
| `shake` | `ShakeIcon` | Rotates the icon back and forth quickly. |
| `spin` | `Spinner` | Rotates the icon 360 degrees infinitely. |
| `wiggle` | `WiggleIcon` | Rotates the icon back and forth gently. |

```tsx
import { AnimatedIcon } from '@flexnative/icons';

<AnimatedIcon 
  name="heart" 
  animation="heartbeat" 
  size="xl" 
  color="error" 
  duration={1200} 
/>
```


### Specific Animated Components

You can also import specific animated components directly for better type safety or specific props.

```tsx
import { 
  BounceIcon, 
  FadeIcon, 
  GlitchIcon, 
  HeartbeatIcon, 
  PulseIcon, 
  ShakeIcon, 
  Spinner, 
  WiggleIcon 
} from '@flexnative/icons';

<Spinner name="loading" />
<HeartbeatIcon name="heart" pulseColor="#ff0000" />
<GlitchIcon name="alert" amplitude={6} />
```

### Playground
Play with props to see live changes;

```typescript live noInline
// Play with props to see live changes;
render(
  <HeartbeatIcon
    name="star"
    size={128}
    color='primary'
    backgroundColor='#ebedf0'
    borderRadius={64}
    pulseColor="#ff0000"
  />
);
```