const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Path to the local package
const iconsPackage = path.resolve(__dirname, '../npm-packages/src/packages/components/icons');
const sliderPackage = path.resolve(__dirname, '../npm-packages/src/packages/components/slider');

// Add all local packages to watchFolders so Metro can see the source files
config.watchFolders = [iconsPackage, sliderPackage];

config.resolver.extraNodeModules = new Proxy(
  {
    // Explicitly map your local packages
    '@flexnative/slider': sliderPackage,
    '@flexnative/icons': iconsPackage,
  },
  {
    // Redirect all other dependencies to the app's node_modules
    get: (target, name) => (name in target ? target[name] : path.join(__dirname, 'node_modules', name)),
  }
);

module.exports = config;