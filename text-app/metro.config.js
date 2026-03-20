const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Path to the local package
const iconsPackage = path.resolve(__dirname, '../npm-packages/src/packages/components/icons');

config.watchFolders = [iconsPackage];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(iconsPackage, 'node_modules')
];

module.exports = config;