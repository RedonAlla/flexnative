module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    ["@babel/preset-react", {"runtime": "automatic"}]
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