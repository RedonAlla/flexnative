module.exports = {
  presets: ['@docusaurus/core/lib/babel/preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native$': 'react-native-web'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};