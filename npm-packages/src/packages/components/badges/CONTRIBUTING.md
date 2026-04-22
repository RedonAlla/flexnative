# Contributing to @flexnative/badges

First off, thank you for considering contributing to `@flexnative/badges`! Contributions like yours help make the Flexnative ecosystem better for everyone.

## Code of Conduct

By participating in this project, you agree to abide by the terms of our Code of Conduct and maintain a respectful and inclusive environment.

## How Can I Contribute?

### Reporting Bugs
Before creating bug reports, please check the existing issues to see if the problem has already been reported.

When filing a bug, please include:
- A clear and descriptive title.
- Steps to reproduce the problem.
- Expected vs. actual behavior.
- Environment details (React Native version, Platform, Device).
- Code snippets or a link to a minimal reproduction (e.g., Snack).

### Suggesting Enhancements
Enhancement suggestions are tracked as GitHub issues. When suggesting an enhancement:
- Use a clear and descriptive title.
- Provide a step-by-step description of the suggested enhancement in as much detail as possible.
- Explain why this enhancement would be useful to other users.

### Pull Requests
1. **Fork** the repository and create your branch from `master`.
2. **Install dependencies**: Run `npm install` in the package directory.
3. **Make your changes**: Ensure your code follows the project's coding style and TypeScript conventions.
4. **Build**: Run `npm run build` to ensure your changes compile correctly.
5. **Test**: While unit tests are encouraged, ensure your changes work as expected in a React Native environment.
6. **Submit**: Open a Pull Request with a clear description of your changes and link any relevant issues.

## Development Workflow

This package is part of the Flexnative monorepo. To work on the badges component specifically:

```bash
# Navigate to the package directory
cd npm-packages/src/packages/components/badges

# Install dependencies
npm install

# Build the package
npm run build
```

## Coding Guidelines

- **TypeScript**: All components and utilities must be written in TypeScript with proper type definitions.
- **Styling**: Use the `@flexnative/theme-context` for styling to maintain consistency with the rest of the library.
- **Naming**: Use PascalCase for components and camelCase for props and variables.
- **Documentation**: Update the `README.md` if your changes introduce new props or change existing behavior.

## License

By contributing to `@flexnative/badges`, you agree that your contributions will be licensed under the MIT License.

---
Happy coding! 🚀