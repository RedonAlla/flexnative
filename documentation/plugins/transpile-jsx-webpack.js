module.exports = function transpileJsxWebpack() {
  console.log('[FlexNative] transpile-jsx-webpack plugin loaded');
  return {
    name: 'custom-webpack-config',
    configureWebpack(config, isServer, utils) {
      // Find the default babel-loader rule
      const babelLoaderRule = config.module.rules.find(
        (rule) =>
          rule.use &&
          rule.use.some &&
          rule.use.some((loader) => loader.loader?.includes('babel-loader')),
      );

      if (babelLoaderRule) {
        const originalExclude = babelLoaderRule.exclude;
        // Override the exclude pattern
        babelLoaderRule.exclude = (filepath) => {
          // Don't exclude our problematic package
          if (
            filepath.includes('@flexnative/theme-context')
          ) {
            return false;
          }
          // Use original exclude for everything else
          if (typeof originalExclude === 'function') {
            return originalExclude(filepath);
          }
          if (originalExclude instanceof RegExp) {
            return originalExclude.test(filepath);
          }
          return false;
        };
      }

      return {};
    },
  };
};