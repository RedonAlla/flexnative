module.exports = function transpileJsxWebpack() {
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
          if (filepath.includes('@flexnative/theme-context')) {
            return false;
          }
          // Use original exclude for everything else
          if (typeof originalExclude === 'function') {
            return originalExclude(filepath);
          }
          return originalExclude;
        };
      }

      return {};
    },
  };
};