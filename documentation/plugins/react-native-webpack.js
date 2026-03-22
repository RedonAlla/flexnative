module.exports = function reactNativeWebpack() {
  return {
    name: 'react-native-webpack',
    configureWebpack(config, isServer) {
      // Log aliases to the terminal during build to verify settings
      // if (!isServer) {
      //   console.log('\n--- Webpack Aliases Check ---');
      //   console.log('Existing Aliases:', config.resolve?.alias);
      //   // Note: The aliases returned below are merged into this list after this function runs
      //   console.log('-----------------------------\n');
      // }

      return {
        resolve: {
          alias: {
            'react-native$': 'react-native-web',
          },
          extensions: [
            '.web.ts',
            '.web.tsx',
            '.web.js',
            '.ts',
            '.tsx',
            '.js',
          ],
        },
      };
    },
  };
};