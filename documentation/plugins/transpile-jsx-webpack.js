// Pre-compile the regex once to avoid overhead during the build process
const TRANSPILE_WHITELIST = /node_modules\/(@flexnative|expo)/;

module.exports = function transpileJsxWebpack() {
  return {
    name: 'custom-webpack-config',
    configureWebpack(config, isServer, utils) {
      // Robustly find the babel-loader rule, handling nested 'oneOf' structures
      // commonly found in Docusaurus/React Native Web configurations.
      const findBabelRule = (rules) => {
        for (const rule of rules) {
          if (rule.oneOf) {
            const found = findBabelRule(rule.oneOf);
            if (found) return found;
          }
          if (rule.use && Array.isArray(rule.use) && rule.use.some((loader) => loader.loader?.includes('babel-loader'))) {
            return rule;
          }
        }
        return null;
      };

      const babelLoaderRule = findBabelRule(config.module.rules);

      if (babelLoaderRule) {
        // 1. Enable caching for these transpiled modules
        // This prevents Babel from re-transpiling dependencies on every build
        const loaderInstance = babelLoaderRule.use.find(l => l.loader?.includes('babel-loader'));
        if (loaderInstance) {
          loaderInstance.options = {
            ...loaderInstance.options,
            cacheDirectory: true,
            cacheCompression: false, // Disabling compression speeds up development builds
          };
        }

        const originalExclude = babelLoaderRule.exclude;

        babelLoaderRule.exclude = (filepath) => {
          if (TRANSPILE_WHITELIST.test(filepath)) {
            return false;
          }

          if (originalExclude) {
            if (typeof originalExclude === 'function') return originalExclude(filepath);
            if (originalExclude instanceof RegExp) return originalExclude.test(filepath);
            if (Array.isArray(originalExclude)) {
              return originalExclude.some(condition => {
                if (typeof condition === 'function') return condition(filepath);
                if (condition instanceof RegExp) return condition.test(filepath);
                return false;
              });
            }
          }

          return false;
        };
      }

      return {
        resolve: {
          // Prioritize web-specific implementations. This ensures libraries like expo-haptics 
          // load their web-safe shims instead of the native code that causes crashes.
          extensions: [
            '.web.tsx', '.web.ts', '.web.js', '.tsx', '.ts', '.js', ...(config.resolve.extensions || [])
          ],
        },
        ignoreWarnings: [
          // Suppress TurboModuleRegistry warnings which are expected artifacts 
          // when transpiling Expo packages for the web.
          /export 'TurboModuleRegistry' .* was not found in 'react-native-web'/,
        ],
      };
    },
  };
};