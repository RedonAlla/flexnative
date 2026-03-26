# Changelog

All notable changes to this project will be documented in this file.

## Bump version to 0.1.4
Improve `createIconSetFromIcoMoon` to support configurations for New IcoMoon App.

## Bump version to 0.1.1
Enhance `IconProvider` with documentation, and refactor `createIconSetFromIcoMoon` function

## [Unreleased]

### Added
- New `AnimatedIcon` component that supports multiple animation types via props.
- New animated components:
  - `BounceIcon`
  - `FadeIcon`
  - `GlitchIcon` (supports `amplitude` prop)
  - `HeartbeatIcon` (supports `pulseColor` prop)
  - `PulseIcon`
  - `ShakeIcon`
  - `WiggleIcon`
- Shared `useIconCommon` hook to consolidate logic.
- `duration` and `delay` props to all animated icons.

### Changed
- Refactored `Icon` and `Spinner` to utilize shared logic from `useIconCommon`.
- Optimized re-renders using `React.memo` and `useMemo`.