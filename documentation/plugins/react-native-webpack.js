module.exports = function reactNativeWebpack() {
  return {
    name: 'react-native-webpack',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            'react-native$': 'react-native-web',
            'react-native-reanimated': require.resolve('react-native-reanimated'),
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