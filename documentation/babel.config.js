module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset')
  ],
  "plugins": [
    [
      "module-resolver",
      {
        "alias":
        {
          "^react-native$": "react-native-web",
          'react-native/Libraries/Image/AssetRegistry$': 'react-native-web/dist/modules/AssetRegistry'
        }
      }
    ]
  ]
};