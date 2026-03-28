# Changelog

All notable changes to this project will be documented in this file.


## [0.0.19] - 2026-03-27

### Added

- **Scaling**: Added formal support for scaling factor updates via `onScaleChange`.

## [0.0.18] - 2026-03-26
- **Typography**: Platform-specific system font stacks for iOS, Web, and Android (supporting sans, serif, rounded, and mono).


## [0.0.17] - 2026-03-25

### Added
- Initial release of `@flexnative/theme-context`.
- `ThemeProvider` component and `ThemeContext` for managing application-wide theming state.
- Hooks for consuming theme data: `useThemeContext`, `useThemeState`, and `useThemeColors`.
- Support for Light and Dark modes with high-quality default color schemes.
- Theme utility functions: `createTheme`, `defaultTheme`, and `defaultColors` for easy customization.
- Color manipulation utilities for dynamic interaction states: `applyHoverColor`, `applyActiveColor`, and subtle variants.
- Platform-specific font system configurations for iOS, Web, and Android.
- Predefined design tokens and scales for:
  - **Font Sizes**: Standardized scale from `xxs` (8) to `xxl` (24).
  - **Spacing**: Comprehensive spacing system from `none` to `xxxl` (36).
  - **Borders**: Defined scales for widths and radius (none to full).